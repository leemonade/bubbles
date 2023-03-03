const _ = require('lodash');
const path = require('path');
const execa = require('execa');
const chalk = require('chalk');
const yargs = require('yargs/yargs');
const Logger = require('./utils/Logger');
const { getPackagesBuildOrder } = require('./utils/get-build-order');

const logger = new Logger('build-package');

async function main() {
  const argv = yargs(process.argv).argv;
  const type = _.isString(argv.type) ? argv.type : 'patch';

  // ····························································
  // Root of monorepo

  logger.info(`Bumping package ${chalk.cyan('@bubbles-ui')}`);

  const startTime = Date.now();

  try {
    await execa('npm', ['version', type], { cwd: path.resolve(__dirname, '..') });

    logger.info(
      `Package ${chalk.cyan('@bubbles-ui')} bumped in ${chalk.green(
        `${((Date.now() - startTime) / 1000).toFixed(2)}s`
      )}`
    );
  } catch (err) {
    logger.error(`Failed to bump package: ${chalk.cyan('@bubbles-ui')}`);
    process.stdout.write(`${err.toString('minimal')}\n`);
    process.exit(1);
  }

  // ····························································
  // Every package inside

  const toInclude = Object.keys(argv).filter((key) => !['_', '$0', 'type'].includes(key));
  const packages = (await getPackagesBuildOrder()).filter((package) => {
    if (toInclude.length === 0) {
      return true;
    }

    let found = false;
    toInclude.forEach((item) => {
      if (package.packageJson.name.indexOf(item) > 0) {
        found = true;
        return;
      }
    });

    return found;
  });

  for (const item of packages) {
    try {
      logger.info(`Bumping package ${chalk.cyan(item.packageJson.name)}`);

      const startTime = Date.now();

      try {
        await execa('npm', ['version', type, '--force'], { cwd: item.path });

        logger.info(
          `Package ${chalk.cyan(item.packageJson.name)} bumped in ${chalk.green(
            `${((Date.now() - startTime) / 1000).toFixed(2)}s`
          )}`
        );
      } catch (err) {
        logger.error(`Failed to bump package: ${chalk.cyan(item.packageJson.name)}`);
        process.stdout.write(`${err.toString('minimal')}\n`);
        process.exit(1);
      }
    } catch (err) {
      process.exit(1);
    }
  }
}

main();

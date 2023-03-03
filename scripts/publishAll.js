const _ = require('lodash');
const execa = require('execa');
const chalk = require('chalk');
const yargs = require('yargs/yargs');
const Logger = require('./utils/Logger');
const { getPackagesBuildOrder } = require('./utils/get-build-order');

const logger = new Logger('build-package');

async function main() {
  const argv = yargs(process.argv).argv;
  const toInclude = Object.keys(argv).filter((key) => !['_', '$0', 'tag'].includes(key));
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

  const tag = _.isString(argv.tag) ? argv.tag : 'latest';

  for (const item of packages) {
    try {
      logger.info(`Publishing package ${chalk.cyan(item.packageJson.name)}`);

      const startTime = Date.now();

      try {
        await execa('npm', ['publish', '--tag', tag], { cwd: item.path });

        logger.info(
          `Package ${chalk.cyan(item.packageJson.name)} published in ${chalk.green(
            `${((Date.now() - startTime) / 1000).toFixed(2)}s`
          )}`
        );
      } catch (err) {
        logger.error(`Failed to publish package: ${chalk.cyan(item.packageJson.name)}`);
        process.stdout.write(`${err.toString('minimal')}\n`);
        process.exit(1);
      }
    } catch (err) {
      process.exit(1);
    }
  }
}

main();

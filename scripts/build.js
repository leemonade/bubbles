/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const execa = require('execa');
const chalk = require('chalk');
const yargs = require('yargs/yargs');
const spawn = require('better-spawn');
const Logger = require('./utils/Logger');
const { getPackagesBuildOrder } = require('./utils/get-build-order');

const logger = new Logger('build-package');

async function main() {
  const { argv } = yargs(process.argv);
  const toInclude = Object.keys(argv).filter(
    (key) => !['_', '$0', 'all', 'nomadge', 'notypes'].includes(key),
  );
  const packages = (await getPackagesBuildOrder()).filter((packageUnit) => {
    if (toInclude.length === 0) {
      return true;
    }

    let found = false;
    toInclude.forEach((item) => {
      if (packageUnit.packageJson.name.indexOf(item) > 0) {
        found = true;
      }
    });

    return found;
  });

  const suffix = argv.notypes ? ':no-types' : '';

  for (const item of packages) {
    try {
      logger.info(`Building package ${chalk.cyan(item.packageJson.name)}`);

      const startTime = Date.now();
      const itemPath = `${item.path}/src`;

      if (!argv.nomadge) {
        spawn(`yarn madge:circular ${itemPath}`);
      }

      try {
        await execa('yarn', [
          'workspace',
          item.packageJson.name,
          argv.all ? `build-all${suffix}` : `build${suffix}`,
          '--silent',
        ]);

        logger.info(
          `Package ${chalk.cyan(item.packageJson.name)} built in ${chalk.green(
            `${((Date.now() - startTime) / 1000).toFixed(2)}s`,
          )}`,
        );
      } catch (err) {
        logger.error(`Failed to compile package: ${chalk.cyan(item.packageJson.name)}`);
        process.stdout.write(`${err.toString('minimal')}\n`);
        process.exit(1);
      }
    } catch (err) {
      process.exit(1);
    }
  }
}

main();

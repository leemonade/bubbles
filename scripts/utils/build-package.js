const chalk = require('chalk');
const execa = require('execa');
const createPackageConfig = require('./create-package-config');
const locatePackage = require('./locate-package');
const compile = require('./compile');
const Logger = require('./Logger');

const logger = new Logger('build-package');

async function buildPackage(packageName, options) {
  const packagePath = await locatePackage(packageName || '');

  if (!packagePath) {
    logger.error(`Package ${chalk.cyan(packageName)} does not exist`);
    process.exit(1);
  }

  logger.info(`Building package ${chalk.cyan(packageName)}`);

  try {
    const startTime = Date.now();

    if (packageName.indexOf('icons') > 1) {
      const { stdout } = await execa('yarn', ['workspace', packageName, 'build']);
    } else {
      for (const format of options?.formats) {
        const config = await createPackageConfig({
          ...options,
          basePath: packagePath,
          format,
        });

        logger.info(`Building to ${chalk.cyan(format)} format...`);
        await compile(config);
      }
    }

    logger.info(
      `Package ${chalk.cyan(packageName)} was build in ${chalk.green(
        `${((Date.now() - startTime) / 1000).toFixed(2)}s`
      )}`
    );
  } catch (err) {
    logger.error(`Failed to compile package: ${chalk.cyan(packageName)}`);
    process.stdout.write(`${err.toString('minimal')}\n`);
    process.exit(1);
  }
}

module.exports = { buildPackage };

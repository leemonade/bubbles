const chalk = require('chalk');

class Logger {
  name;

  constructor(name) {
    this.name = name;
  }

  log(message, breaks = 1) {
    const thisNameArray = `[${this.name}]`;
    process.stdout.write(`${chalk.cyan(thisNameArray)} ${message}${'\n'.repeat(breaks)}`);
  }

  info(message, breaks = 1) {
    this.log(`${chalk.cyan('→')} ${message}`, breaks);
  }

  success(message, breaks = 1) {
    this.log(`${chalk.green('✓')} ${message}`, breaks);
  }

  error(message, breaks = 1) {
    this.log(`${chalk.red('✗')} ${message}`, breaks);
  }
}

module.exports = Logger;

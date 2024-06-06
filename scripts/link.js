/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

async function main() {
  const dir = path.resolve(__dirname, '../packages');

  const directories = fs.readdirSync(dir, { withFileTypes: true });

  const result = await Promise.all(
    directories
      .filter((directory) => directory.isDirectory())
      .map(
        (directory) =>
          new Promise((resolve) => {
            // Build the package with child process
            const packagePath = path.resolve(dir, directory.name);
            const name = path.basename(packagePath);

            childProcess.exec(`yarn --cwd ${packagePath} unlink`).on('exit', () => {
              childProcess
                .exec(`yarn --cwd ${packagePath} link`)
                // on finish
                .on('message', (message) => {
                  console.log(`[${name}]`, message);
                })
                .on('exit', (code) => {
                  if (code !== 0) {
                    console.error(`Error linking ${name}`);
                    process.exit(1);
                  } else {
                    console.log(`Linked ${name}`);
                  }
                  resolve(name);
                });
            });
          }),
      ),
  );

  console.log();
  console.log(' --- RUN THE FOLLOWING COMMAND IN YOUR PROJECT ---');
  console.log();

  console.log(`yarn link @bubbles-ui/${result.join(' @bubbles-ui/')}`);
  console.log();
  console.log();
}

main();

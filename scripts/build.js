const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

async function main() {
  const dir = path.resolve(__dirname, '../packages');

  const directories = fs.readdirSync(dir, { withFileTypes: true });

  directories
    .filter((directory) => directory.isDirectory())
    .forEach((directory) => {
      // Build the package with child process
      const packagePath = path.resolve(dir, directory.name);
      console.log('Building', packagePath);
      childProcess
        .exec(`yarn --cwd ${packagePath} build`)
        // on finish
        .on('exit', (code) => {
          if (code !== 0) {
            console.error(`Error building ${directory.name}`);
            process.exit(1);
          } else {
            console.log(`Built ${directory.name}`);
          }
        });
    });
}

main();

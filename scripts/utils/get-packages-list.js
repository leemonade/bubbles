const path = require('path');
const fs = require('fs-extra');

async function getPackagesList() {
  const basePath = path.join(__dirname, '../../packages');
  const srcPaths = await fs.readdir(basePath);
  const packages = [];

  for (const srcPath of srcPaths) {
    const packageJsonPath = path.join(basePath, srcPath, 'package.json');
    if (await fs.pathExists(packageJsonPath)) {
      packages.push({
        path: path.join(basePath, srcPath),
        packageJsonPath,
        packageJson: await fs.readJSON(packageJsonPath),
      });
    }
  }

  return packages;
}

module.exports = { getPackagesList };

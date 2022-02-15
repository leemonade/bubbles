const path = require('path');
const fs = require('fs-extra');

async function locatePackage(packageName) {
  const folder = packageName.split('/')[1];
  const packagePath = path.join(__dirname, '../../packages', folder);
  const exists = await fs.pathExists(packagePath);
  return exists ? packagePath : null;
}

module.exports = locatePackage;

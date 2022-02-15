const { buildPackage } = require('./build-package');
const { getPackagesBuildOrder } = require('./get-packages-build-order');

async function buildAllPackages(options) {
  const packages = await getPackagesBuildOrder();

  options = options || {
    analyze: false,
    sourcemap: true,
    minify: false,
    formats: ['es', 'cjs'],
  };

  for (const item of packages) {
    await buildPackage(item.packageJson.name, options);
  }

  return packages;
}

module.exports = { buildAllPackages };

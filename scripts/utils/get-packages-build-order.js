const { getPackagesList } = require('./get-packages-list');

async function getPackageBuildOrder(packages, pkg, order = {}) {
  const { name } = pkg.packageJson;

  if (name in order) return;
  if (pkg.packageJson.private) {
    order[name] = -1;
    return;
  }

  packages = packages || [];

  const dependencies = Object.keys({
    ...pkg.packageJson.peerDependencies,
    ...pkg.packageJson.dependencies,
  })
    .filter((dependency) => dependency.includes('@bubbles-ui/'))
    .map((dependency) => packages.find((pkgItem) => pkgItem.packageJson.name === dependency));

  if (dependencies.length === 0) {
    order[name] = 0;
    return;
  }

  await Promise.all(
    dependencies.map((dependency) => getPackageBuildOrder(packages, dependency, order))
  );

  order[name] =
    1 + Math.max(...dependencies.map((dependency) => order[dependency.packageJson.name]));
}

async function getPackagesBuildOrder(packages, order = {}) {
  packages = packages || (await getPackagesList());

  for (const pkg of packages) {
    await getPackageBuildOrder(packages, pkg, order);
  }

  return Object.keys(order)
    .filter((p) => order[p] !== -1)
    .sort((a, b) => order[a] - order[b])
    .map((p) => packages.find((dataItem) => dataItem.packageJson.name === p));
}

module.exports = { getPackageBuildOrder, getPackagesBuildOrder };

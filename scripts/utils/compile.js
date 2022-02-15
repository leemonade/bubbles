const { rollup } = require('rollup');

async function compile(config) {
  const build = await rollup(config);
  const outputs = Array.isArray(config.output) ? config.output : [config.output];

  return Promise.all(outputs.map((output) => build.write(output)));
}

module.exports = compile;

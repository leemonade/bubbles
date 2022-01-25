'use strict';

const { execSync } = require('child_process');
const { inInstall } = require('in-publish');
const which = require('npm-which')(__dirname);

if (inInstall()) {
  process.exit(0);
}

const babelPath = which.sync('babel');

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv),
  });

const ignoreGlobs = [
  '**/__tests__/*',
  '**/*-test.js',
  '**/*.stories.js',
  '**/*.mdx',
  '**/mocks/*',
].join(',');

try {
  exec(`${babelPath} src --quiet -d es --ignore "${ignoreGlobs}" --copy-files --no-copy-ignored`, {
    BABEL_ENV: 'es',
  });
  exec(
    `${babelPath} src --quiet -d lib --ignore "${ignoreGlobs}" --copy-files --no-copy-ignored --plugins @babel/plugin-transform-modules-commonjs`,
    {
      BABEL_ENV: 'cjs',
    }
  );
} catch (error) {
  console.error('One of the commands failed:', error.stack); // eslint-disable-line no-console
  process.exit(1);
}

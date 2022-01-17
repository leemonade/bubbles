'use strict';

const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const stripBanner = require('rollup-plugin-strip-banner');
const { terser } = require('rollup-plugin-terser');
const styles = require('rollup-plugin-styles');
const packageJson = require('./package.json');
import css from 'rollup-plugin-import-css';

const baseConfig = {
  input: './src/index.js',
  external: [
    ...Object.keys(packageJson.peerDependencies || {}),
    ...Object.keys(packageJson.dependencies),
    'prop-types',
  ],
  plugins: [
    nodeResolve(),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      babelrc: false,
      exclude: ['node_modules/**'],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              browsers: [
                'last 2 Chrome versions',
                'not Chrome < 60',
                'last 2 Safari versions',
                'not Safari < 10.1',
                'last 2 iOS versions',
                'not iOS < 10.3',
                'last 2 Firefox versions',
                'not Firefox < 54',
                'last 2 Edge versions',
                'not Edge < 15',
              ],
            },
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        'dev-expression',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-export-default-from',
      ],
      babelHelpers: 'bundled',
    }),
    styles({
      mode: 'extract',
    }),
    css(),
    stripBanner(),
  ],
};

const umdExternalDependencies = Object.keys(packageJson.peerDependencies || {});

const umdBundleConfig = {
  input: baseConfig.input,
  external: [...umdExternalDependencies, 'prop-types'],
  output: {
    name: 'BubblesComponents',
    format: 'umd',
    globals: {
      classnames: 'classNames',
      'prop-types': 'PropTypes',
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
};

module.exports = [
  {
    ...umdBundleConfig,
    plugins: [
      ...baseConfig.plugins,
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
    output: {
      ...umdBundleConfig.output,
      file: 'umd/bubbles-components.js',
      assetFileNames: '[name]-[hash][extname]',
    },
  },

  // Generate the production UMD bundle:
  // UMD: umd/carbon-components-react.min.js
  {
    ...umdBundleConfig,
    plugins: [
      ...baseConfig.plugins,
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser(),
    ],
    output: {
      ...umdBundleConfig.output,
      file: 'umd/bubbles-components.min.js',
    },
  },
];

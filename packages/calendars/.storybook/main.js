const path = require('path');

module.exports = {
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          react: path.resolve(require.resolve('react'), '..'),
          'react-dom': path.resolve(require.resolve('react-dom'), '..'),
          'react-router-dom': path.resolve(require.resolve('react-router-dom'), '..'),
          // 'styled-components': path.resolve(require.resolve('styled-components'), '..'),
        },
      },
    };
  },
  stories: [
    './Welcome/Welcome.stories.js',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
};

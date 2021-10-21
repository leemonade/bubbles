const path = require('path');

module.exports = {
  stories: [
    './Welcome/Welcome.stories.js',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-docs'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    const sassLoader = {
      loader: require.resolve('sass-loader'),
      options: {
        sassOptions: {
          implementation: require('sass'),
          includePaths: [path.resolve(__dirname, '..', 'node_modules')],
        },
        sourceMap: true,
      },
    };

    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: [{ loader: 'style-loader' }, { loader: 'css-loader?modules' }, sassLoader],
    });

    // Return the altered config
    return config;
  },
};

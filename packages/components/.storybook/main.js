const path = require('path');

module.exports = {
  stories: [
    './Welcome/Welcome.stories.js',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    // '@storybook/addon-react-native-web',
  ],
};

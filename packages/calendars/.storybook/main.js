module.exports = {
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
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

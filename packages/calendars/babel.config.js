module.exports = {
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
    '@babel/plugin-proposal-export-default-from',
  ],
};

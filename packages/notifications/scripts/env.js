'use strict';

const BABEL_ENV = process.env.BABEL_ENV;

module.exports = () => ({
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        modules: BABEL_ENV === 'es' ? false : 'commonjs',
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
    require.resolve('@babel/preset-react'),
  ],
});

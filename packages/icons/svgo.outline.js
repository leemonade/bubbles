module.exports = {
  plugins: [
    {
      name: 'preset-default',
    },
    'removeDimensions',
    'sortAttrs',
    {
      name: 'removeAttrs',
      params: {
        attrs: 'stroke',
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            stroke: 'currentColor',
          },
          {
            'aria-hidden': 'true',
          },
        ],
      },
    },
  ],
};

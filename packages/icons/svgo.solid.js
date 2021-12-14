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
        attrs: 'fill',
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'currentColor',
          },
          {
            'aria-hidden': 'true',
          },
        ],
      },
    },
  ],
};

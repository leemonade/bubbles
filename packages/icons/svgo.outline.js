module.exports = {
  plugins: [
    {
      name: 'preset-default',
    },
    'removeXMLNS',
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

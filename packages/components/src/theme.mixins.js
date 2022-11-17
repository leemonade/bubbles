function round25(x) {
  let nums = String(x).split('.');
  const intPart = nums.shift();
  const floatPart = (nums.pop() || '0').padEnd(2, '0');
  return parseFloat(intPart + '.' + String(Math.round(parseInt(floatPart) / 25) * 25));
}

export function pxToRem(val, rounded25) {
  const PX_TO_REM = 0.063;
  const rem = Math.floor(val * PX_TO_REM * 100) / 100;
  return `${rounded25 ? round25(rem) : rem}rem`;
}

export function getPaddings(vertical, horizontal, rounded = false) {
  const paddingV = vertical > 0 ? pxToRem(vertical, rounded) : 0;
  const paddingH = horizontal > 0 ? pxToRem(horizontal, rounded) : 0;
  return {
    paddingTop: paddingV,
    paddingBottom: paddingV,
    paddingLeft: paddingH,
    paddingRight: paddingH,
  };
}

export function getSpacing(spaces) {
  let spacing = {};

  spacing = Object.assign(
    {},
    spaces.map((val) => pxToRem(val, true))
  );

  return spacing;
}

export function getFocusStyles(theme) {
  return {
    WebkitTapHighlightColor: 'transparent',

    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 1px ${
        theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white
      }, 0 0 0 3px ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`,
    },

    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
    },
  };
}

export function getBoxShadowFromToken(token) {
  const { x, y, blur, spread, color } = token;
  return { boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${color}` };
}

const FONT_TYPES = { EXPRESSIVE: 'expressive', PRODUCTIVE: 'productive' };

function getFontFamily(type = FONT_TYPES.EXPRESSIVE, size, weight) {
  const result = {
    fontFamily: type === FONT_TYPES.EXPRESSIVE ? "'Lexend', sans-serif" : "'Inter', sans-serif",
    lineHeight: 1.2,
  };

  if (size) {
    result['fontSize'] = size;
  }

  if (weight) {
    result['fontWeight'] = weight;
  }

  return result;
}

export function getFontExpressive(size, weight) {
  return getFontFamily(FONT_TYPES.EXPRESSIVE, size, weight);
}

export function getFontProductive(size, weight) {
  return getFontFamily(FONT_TYPES.PRODUCTIVE, size, weight);
}

export function getHtmlStyles(theme) {
  const headings = Object.keys(theme.headings.sizes).reduce((acc, h) => {
    const order = parseInt(h.substring(1, 2));

    acc[`& ${h}`] = {
      ...getFontExpressive(theme.fontSizes[8 - order], 600),
      marginTop: theme.spacing.xl * theme.headings.sizes[h].lineHeight,
      marginBottom: theme.spacing.sm,
      lineHeight: theme.headings.sizes[h].lineHeight,

      '@media (max-width: 755px)': {
        fontSize:
          typeof theme.headings.sizes[h].fontSize === 'number' &&
          theme.headings.sizes[h].fontSize / 1.3,
      },
    };

    return acc;
  }, {});

  return {
    root: {
      ...getFontProductive(theme.fontSizes[2]),
      color: theme.colors.text01,
      lineHeight: theme.lineHeight,
      fontSize: theme.fontSizes[2],

      '@media (max-width: 755px)': {
        fontSize: theme.fontSizes[1],
      },

      ...headings,

      '& img': {
        maxWidth: '100%',
        marginBottom: theme.spacing.xs,
      },

      '& p': {
        marginTop: 0,
        marginBottom: theme.spacing.lg,
      },

      '& p:last-of-type': {
        marginBottom: 0,
      },

      '& hr': {
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.sm,
        borderBottom: 0,
        borderLeft: 0,
        borderRight: 0,
        borderTop: `1px dashed ${theme.colors.gray[theme.colorScheme === 'dark' ? 4 : 6]}`,
      },

      '& a': {
        color: theme.colors.interactive01,
        textDecoration: 'none',

        '&:hover': {
          textDecoration: 'underline',
        },
      },

      '& pre': {
        padding: theme.spacing.xs,
        lineHeight: theme.lineHeight,
        margin: 0,
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.md,
        overflowX: 'auto',
        fontFamily: theme.fontFamilyMonospace,
        fontSize: theme.fontSizes.sm,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.interactive03,
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.interactive02,
      },

      '& code': {
        lineHeight: theme.lineHeight,
        padding: `1px ${theme.spacing.xs / 1}`,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
        fontFamily: theme.fontFamilyMonospace,
        fontSize: theme.fontSizes.xs,
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[3]
        }`,
      },

      '& ul, & ol': {
        marginBottom: theme.spacing.md,
        paddingLeft: theme.spacing.lg * 2,

        '& li': {
          marginTop: theme.spacing.xs,
        },
      },

      '& ul': {
        listStyle: 'disc',
      },
      '& ol': {
        listStyle: 'auto',
      },

      '& table': {
        width: '100%',
        borderCollapse: 'collapse',
        captionSide: 'bottom',
        marginBottom: theme.spacing.md,

        '& caption': {
          marginTop: theme.spacing.xs,
          fontSize: theme.fontSizes.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        },

        '& th': {
          textAlign: 'left',
          fontWeight: 'bold',
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
          fontSize: 14,
          padding: '7px 10px',
        },

        '& thead th': {
          borderBottom: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
        },

        '& tfoot th': {
          borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
        },

        '& td': {
          padding: '7px 10px',
          borderBottom: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
          fontSize: 14,
        },

        '& tr:last-of-type td': {
          borderBottom: 'none',
        },
      },

      '& blockquote': {
        fontSize: theme.fontSizes[2],
        lineHeight: theme.lineHeight,
        margin: `${theme.spacing.md}px 0`,
        marginLeft: theme.spacing[5],
        borderLeft: `4px solid ${theme.colors.ui01}`,
        padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '& cite': {
          display: 'block',
          fontSize: theme.fontSizes.sm,
          marginTop: theme.spacing.xs,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },

      '& strong': {
        fontWeight: 700,
      },

      '& em': {
        fontStyle: 'italic',
      },
    },
  };
}

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

export function getGlobals(GLOBAL_IMPORTS) {
  return { '@import': GLOBAL_IMPORTS };
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

const FONT_TYPES = { EXPRESSIVE: 'expressive', PRODUCTIVE: 'productive' };

function getFontFamily(type = FONT_TYPES.EXPRESSIVE, size, weight) {
  const result = {
    fontFamily: type === FONT_TYPES.EXPRESSIVE ? "'Lexend', sans-serif" : "'Inter', sans-serif",
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

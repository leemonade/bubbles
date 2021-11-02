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

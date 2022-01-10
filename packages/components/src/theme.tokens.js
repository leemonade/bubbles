import { EFFECTS, FONT_SIZES as FS, PALETTE, SPACING as SPACES } from './theme.constants';

export const COLORS = {
  mainWhite: PALETTE.mainWhite,
  mainBlack: PALETTE.mainBlack,

  uiBackground01: PALETTE.mainWhite,
  uiBackground02: PALETTE.neutral5,
  uiBackground03: PALETTE.neutral90,
  uiBackground04: PALETTE.mainWhite,
  uiBackground05: PALETTE.mainPrimary,

  ui01: PALETTE.neutral30,
  ui02: PALETTE.neutral10,
  ui03: PALETTE.neutral5,
  ui04: PALETTE.neutral20,

  text01: PALETTE.mainPrimary,
  text02: PALETTE.neutral70,
  text03: PALETTE.neutral80,
  text04: PALETTE.neutral60,
  text05: PALETTE.neutral50,
  text06: PALETTE.neutral40,
  text07: PALETTE.mainWhite,
  text08: PALETTE.neutral40,

  interactive01: PALETTE.interactive100,
  interactive01h: PALETTE.interactive50,
  interactive01d: PALETTE.interactive40,
  interactive01v0: PALETTE.interactive20,
  interactive01v1: PALETTE.interactive10,
  interactive02: PALETTE.neutral100,
  interactive02h: PALETTE.neutral90,
  interactive02d: PALETTE.neutral70,
  interactive03: PALETTE.neutral10,
  interactive03h: PALETTE.neutral20,
  interactive03d: PALETTE.neutral5,

  fatic01: PALETTE.faticError,
  fatic01v0: PALETTE.faticErrorLight,
  fatic02: PALETTE.faticSuccess,
  fatic02v0: PALETTE.faticSuccessLight,
  fatic03: PALETTE.faticWarning,
  fatic03v0: PALETTE.faticWarningLight,
  fatic04: PALETTE.faticInfo,
  fatic04v0: PALETTE.faticInfoLight,
};

export const SPACING = Object.assign({}, SPACES);

export const FONT_SIZES = Object.assign({}, FS);
export const SHADOWS = {
  drop01: EFFECTS.dropShadow01,
  // shadow01: EFFECTS.boxShadow01,
  // shadow02: EFFECTS.boxShadow02,
  // shadow03: EFFECTS.boxShadow03,
  // shadow04: EFFECTS.boxShadow04,
  shadow01: EFFECTS.uiLevel01,
  shadow02: EFFECTS.uiLevel02,
  shadow03: EFFECTS.uiLevel03,
  shadow04: EFFECTS.uiLevel04,
  shadow100: EFFECTS.uiLevel100
};

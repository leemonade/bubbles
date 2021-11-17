import { getFontExpressive } from './theme.mixins';

export function errorIcon(theme) {
  return {
    width: 10,
    color: theme.colors.fatic01,
    marginLeft: theme.spacing['1'],
    transform: `translateY(-${theme.spacing['1']}px)`,
  };
}
export function successIcon(theme) {
  return {
    width: 10,
    color: theme.colors.fatic02,
    marginLeft: theme.spacing['1'],
    transform: `translateY(-${theme.spacing['1']}px)`,
  };
}

export function modulevspacing(theme) {
  return {
    marginTop: theme.spacing['5'],
    marginBottom: theme.spacing['8'],
  };
}

export function editModuleTeme(theme) {
  return {
    marginBottom: theme.spacing['5'],
    ...getFontExpressive('1.266rem'), //fs02
  };
}

export function buttonsGroup01(theme) {
  return {
    marginLeft: 0,
    marginRight: 0,
    marginTop: theme.spacing['5'],
    marginBottom: theme.spacing['9'],
  };
}

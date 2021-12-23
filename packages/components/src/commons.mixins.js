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

export function editModuleTitle(theme) {
  return {
    marginBottom: theme.spacing['4'],
    color: theme.colors.text01,
    ...getFontExpressive('1.266rem'), //fs02
  };
}
export function ModalDescription(theme) {
  return {
    textAling: 'center',
    color: theme.colors.text04,
    ...getFontExpressive('Inter','0.79rem','400'), //fs02
  };
}

export function ModalTitle(theme) {
  return {
    color: theme.colors.text01,
    marginBottom: theme.spacing['5'],
    ...getFontExpressive('1rem', '500'), //fs02
  };
}
export function ModalBody(theme) {
  return {
    margin: theme.spacing['4'],
    flexDirection: 'column',
  };
}

export function buttonsGroup01(theme) {
  return {
    marginLeft: 0,
    marginRight: 0,
    marginTop: theme.spacing['5'],
    marginBottom: theme.spacing['9'],
    justifyContent: 'space-between',
  };
}
export function buttonsGroup02(theme) {
  return {
    marginLeft: 0,
    marginRight: 0,
    marginTop: theme.spacing['5'],
    marginBottom: 0,
    paddingLeft: theme.spacing['7'],
    justifyContent: 'space-between',
  };
}

  export function avatarBadgeNumber(theme) {
    return {
      background: theme.colors.interactive01,
      color: theme.colors.text07,
      position: 'absolute',
      borderRadius: '100%',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: theme.spacing[4],
      height: theme.spacing[4],
      ...getFontExpressive(10, 400, 'inter'),
    };
}
    export function avatarBadge(theme) {
    return {
      background: theme.colors.interactive01,
      color: theme.colors.text07,
      position: 'absolute',
      borderRadius: '100%',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: theme.spacing[2],
      height: theme.spacing[2],
    };
}
    export function avatarError(theme) {
    return {
      background: theme.colors.fatic01,
      color: theme.colors.text07,
      position: 'absolute',
      borderRadius: '100%',
      textAlign: 'center',
      width: theme.spacing[4],
      height: theme.spacing[4],
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      svg: { width: '90%' },
   };
}
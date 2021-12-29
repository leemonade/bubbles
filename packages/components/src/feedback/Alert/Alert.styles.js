import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

const getColor = (theme, severity) => {
  return {
    success: {
      background: theme.colors.fatic02v0,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: theme.colors.fatic02,
      },
    },
    warning: {
      background: theme.colors.fatic03v0,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: theme.colors.fatic03,
      },
    },
    info: {
      background: theme.colors.interactive01v0,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: theme.colors.fatic04,
      },
    },
    error: {
      background: theme.colors.fatic01v0,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: theme.colors.fatic01,
      },
    },
  }[severity];
};

export const AlertStyles = createStyles((theme, { variant, severity }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      ...getColor(theme, severity),
      borderRadius: variant === 'block' ? pxToRem(2) : pxToRem(0),
      padding:
        variant === 'block'
          ? `${pxToRem(14)} ${pxToRem(16)} ${pxToRem(20)} ${pxToRem(20)}`
          : `${pxToRem(14)} ${pxToRem(16)} ${pxToRem(14)} ${pxToRem(24)}`,
    },
    message: {},
    wrapper: {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
    variant: {
      alignItems: 'baseline',
      flex: '1 1 100%',
      display: 'flex',
      flexDirection: variant === 'block' ? 'column' : null,
      transform: variant === 'block' ? 'translateY(-2px)' : 'translateY(-4px)',
      gap: theme.spacing['2'],
    },
    title: {
      ...getFontExpressive(theme.fontSizes['2'], 600),
      marginRight: pxToRem(15),
      lineHeight: 1.2,
      // paddingTop: pxToRem(2),
    },
    content: {
      ...getFontProductive(theme.fontSizes['2'], 400),
      flex: '1 1 100%',
      marginRight: variant === 'block' ? pxToRem(24) : pxToRem(28),
      lineHeight: 1.2,
      // marginTop: pxToRem(4),
      // paddingTop: pxToRem(3.6),
    },
    action: {
      ...getFontExpressive(theme.fontSizes['2'], 400),
      minWidth: 'fit-content',
      marginRight: pxToRem(30),
      marginTop: variant === 'block' ? pxToRem(11) : null,
      // paddingTop: variant === 'block' ? null : pxToRem(3),
    },
    closeButton: {
      color: theme.colors.text05,
    },
    icon: {
      marginRight: pxToRem(18),
      transform: variant === 'block' ? null : 'translateY(-2px)',
      // marginTop: pxToRem(3),
      // paddingTop: pxToRem(2),
    },
  };
});

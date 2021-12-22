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
    message: {
      '> div': {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
      },
    },
    variant: {
      alignItems: 'baseline',
      flex: '1 1 100%',
      display: 'flex',
      flexDirection: variant === 'block' ? 'column' : null,
    },
    title: {
      ...getFontExpressive(theme.fontSizes['2'], 600),
      marginRight: pxToRem(20),
      lineHeight: pxToRem(24),
      // paddingTop: pxToRem(2),
    },
    content: {
      flex: '1 1 100%',
      marginRight: variant === 'block' ? pxToRem(24) : pxToRem(28),
      lineHeight: pxToRem(20),
      // marginTop: pxToRem(4),
      // paddingTop: pxToRem(3.6),
      ...getFontProductive(theme.fontSizes['2'], 400),
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
      // marginTop: pxToRem(3),
      paddingTop: pxToRem(2),
    },
  };
});

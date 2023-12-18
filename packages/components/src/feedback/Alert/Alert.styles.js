import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

const getColor = (theme, severity) =>
  ({
    success: {
      background: `#E4F4E6 !important`,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: '#368442',
      },
    },
    warning: {
      background: `#FEF3E1 !important`,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: '#BA7609',
      },
    },
    info: {
      background: `#F1FFBD !important`,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: '#98C200',
      },
    },
    error: {
      background: `#F7DEDE !important`,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: '#B52A2A',
      },
    },
  })[severity];

const AlertStyles = createStyles((theme, { variant, severity }) => {
  const alertTheme = theme;
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      ...getColor(theme, severity),
      display: 'flex',
      alignItems: 'center',
      borderRadius: variant === 'block' ? pxToRem(2) : pxToRem(0),
      padding: `${pxToRem(8)} ${pxToRem(16)} ${pxToRem(12)} ${pxToRem(24)}`,
    },
    message: {},
    wrapper: {
      display: 'flex',
      flex: 1,
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
    variant: {
      alignItems: 'baseline',
      flex: '1 1 100%',
      display: 'flex',
      flexDirection: variant === 'block' ? 'column' : null,
      // transform: variant === 'block' ? 'translateY(-2px)' : 'translateY(4px)',
      gap: theme.spacing['2'],
    },
    title: {
      ...getFontExpressive(theme.fontSizes['2'], 500),
      color: '#4D5358',
      marginRight: pxToRem(15),
      lineHeight: 1.2,
      paddingTop: theme.spacing[2],
      paddingBottom: theme.spacing[2],
    },
    content: {
      ...getFontProductive(theme.fontSizes['2'], 500),
      flex: '1 1 100%',
      marginRight: variant === 'block' ? pxToRem(24) : pxToRem(28),
      lineHeight: 1.2,
      // marginTop: pxToRem(4),
      // paddingTop: pxToRem(3.6),
      paddingTop: theme.spacing[2],
      paddingBottom: theme.spacing[2],
    },
    action: {
      marginRight: pxToRem(30),
      // marginTop: variant === 'block' ? pxToRem(5) : null,
      // paddingTop: variant === 'block' ? null : pxToRem(3),
    },
    closeButton: {
      // color: theme.colors.text05,
      transform: 'translateY(3px)',
    },
    icon: {
      marginRight: pxToRem(18),
      transform: 'translateY(2px)',
      // marginTop: pxToRem(3),
      // paddingTop: pxToRem(2),
    },
  };
});

export { AlertStyles };

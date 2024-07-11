import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

const getColor = (theme, severity) =>
  ({
    success: {
      background: `#E4F4E6 !important`,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: '#5CBC6A',
      },
      borderColor: `#90D19A !important`,
      borderLeftColor: `#5CBC6A !important`,
    },
    warning: {
      background: `#FEF3E1 !important`,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: '#F39C13',
      },
      borderColor: `#FBDAA6 !important`,
      borderLeftColor: `#F39C13 !important`,
    },
    info: {
      background: `#E8F0FC !important`,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: '#317AE7',
      },
      borderColor: `#B1CDF6 !important`,
      borderLeftColor: `#317AE7 !important`,
    },
    error: {
      background: `#F7DEDE !important`,
      '.mantine-Alert-icon, .mantine-Alert-action': {
        color: '#B52A2A',
      },
      borderColor: `#DF7878 !important`,
      borderLeftColor: `#B52A2A !important`,
    },
  })[severity];

const AlertStyles = createStyles((theme, { variant, severity, isCloseable }) => {
  const titleSize = variant === 'block' ? 'md--bold' : 'sm--bold';
  return {
    root: {
      ...theme.other.global.content.typo.body.sm,
      ...getColor(theme, severity),
      display: 'flex',
      alignItems: 'center',
      borderRadius: 4,
      padding: pxToRem(6),
      paddingLeft: pxToRem(16),
      borderLeftWidth: 4,
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
      gap: theme.spacing['1'],
    },
    title: {
      ...theme.other.global.content.typo.body[titleSize],
      color: theme.colors.text01, // theme.other.global.content.color.text.default,
      marginRight: pxToRem(8),
      lineHeight: 1.2,
      paddingTop: theme.spacing[2],
      paddingBottom: theme.spacing[2],
      whiteSpace: variant === 'inline' ? 'nowrap' : 'normal',
    },
    content: {
      ...theme.other.global.content.typo.body.sm,
      color: theme.other.global.content.color.text.default,
      flex: '1 1 100%',
      marginRight: variant === 'block' ? pxToRem(24) : pxToRem(28),
      lineHeight: 1.2,
      paddingTop: theme.spacing[2],
      paddingBottom: theme.spacing[2],
    },
    action: {
      marginRight: isCloseable ? pxToRem(30) : null,
    },
    closeButton: {},
    icon: {
      marginRight: pxToRem(8),
      transform: 'translateY(2px)',
    },
  };
});

export { AlertStyles };

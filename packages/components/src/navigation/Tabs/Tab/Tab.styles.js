import { createStyles, getFocusStyles, getThemeColor } from '@mantine/styles';
import { pxToRem, getPaddings } from './../../../theme.mixins';

export const TabStyles = createStyles((theme, { color, orientation }, getRef) => {
  const tabActive = { ref: getRef('tabActive') };

  return {
    tabActive,
    tabLabel: {},

    tabControl: {
      ...getFocusStyles(theme),
      ...getPaddings(theme.spacing['4'], theme.spacing['3']),
      WebkitTapHighlightColor: 'transparent',
      boxSizing: 'border-box',
      display: 'block',
      backgroundColor: 'transparent',
      border: 0,
      fontSize: pxToRem(theme.fontSizes['1']),
      fontFamily: "'Lexend', sans-serif",
      cursor: 'pointer',
      width: orientation === 'vertical' ? '100%' : 'auto',

      '&:disabled': {
        cursor: 'not-allowed',
        color: theme.colors.text06,
      },
    },

    default: {
      transition: 'border-color 150ms ease, color 150ms ease',
      color: theme.colors.text05,
      [orientation === 'horizontal' ? 'borderBottom' : 'borderRight']: '3px solid transparent',

      '&:hover': {
        '&:not(:disabled)': {
          [`&:not(.${tabActive.ref})`]: {
            color: theme.colors.text02,
            [orientation === 'horizontal' ? 'borderBottomColor' : 'borderRightColor']: theme.colors
              .text02,
          },
        },
      },

      [`&.${tabActive.ref}`]: {
        color: theme.colors.text01,
        [orientation === 'horizontal' ? 'borderBottomColor' : 'borderRightColor']: theme.colors
          .interactive01,
      },
    },

    tabInner: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: orientation === 'horizontal' ? 'center' : 'flex-start',
      lineHeight: 1,
      height: '100%',
    },

    tabIcon: {
      // this fixes alignment as by default images and svg are inline and will have extra space on the bottom
      '& *': {
        display: 'block',
      },
    },

    tabLeftIcon: {
      marginRight: pxToRem(theme.spacing['3']),
      marginLeft: pxToRem(theme.spacing['1'] * -1),
    },
    tabRightIcon: {
      marginLeft: pxToRem(theme.spacing['3']),
      marginRight: pxToRem(theme.spacing['1'] * -1),
    },
  };
});

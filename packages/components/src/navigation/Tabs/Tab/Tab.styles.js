import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFocusStyles } from './../../../theme.mixins';

export const TabStyles = createStyles((theme, { orientation, active, disabled }, getRef) => {
  const tabActive = { ref: getRef('tabActive') };

  return {
    root: {
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
      [orientation === 'vertical' ? 'borderRight' : 'borderBottom']: '3px solid transparent',

      '&:hover': {
        '&:not(:disabled)': {
          [`&:not(.${tabActive.ref})`]: {
            color: theme.colors.text02,
            [orientation === 'vertical' ? 'borderRightColor' : 'borderBottomColor']: theme.colors
              .text02,
          },
        },
      },

      [`&.${tabActive.ref}`]: {
        [orientation === 'vertical' ? 'borderRightColor' : 'borderBottomColor']: theme.colors.ui01,
        '&:not(:disabled)': {
          color: theme.colors.text01,
          [orientation === 'vertical' ? 'borderRightColor' : 'borderBottomColor']: theme.colors
            .interactive01,
        },
      },
    },
    tabActive,
    tabLabel: {
      fontFamily: "'Lexend', sans-serif",
      fontSize: theme.fontSizes['1'],
      color: active && !disabled ? theme.colors.text01 : theme.colors.text05,
      lineHeight: 1,
    },
    tabInner: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: orientation === 'horizontal' ? 'center' : 'flex-start',
      lineHeight: 1,
      height: '100%',
      whiteSpace: 'nowrap',
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

    tabBadge: {
      backgroundColor: theme.colors.interactive01,
      width: 15,
      height: 15,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 99,
      fontSize: 10,
      color: theme.colors.text07,
      marginLeft: theme.spacing['2'],
      transform: `translateY(-2px)`,
    },
    tabError: {
      marginLeft: theme.spacing['2'],
      transform: `translateY(-${theme.spacing['1']}px)`,
    },
    tabErrorIcon: {
      width: 10,
      color: theme.colors.fatic01,
    },
  };
});

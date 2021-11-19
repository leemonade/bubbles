import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive } from './../../theme.mixins';

const getSizes = (size, spacing) => {
  return {
    xs: {
      height: spacing['5'],
      ...getPaddings(spacing['1'], spacing['1']),
      svg: { height: spacing['3'] },
    },

    sm: {
      height: spacing['7'],
      ...getPaddings(spacing['1'], spacing['1']),
      svg: { height: spacing['4'] },
    },
  }[size];
};

const getVariant = (variant, theme, color) => {
  const variants = {
    default: {
      positive: {
        backgroundColor: theme.colors.interactive04,
        color: theme.colors.text02,
        '&:hover': {
          backgroundColor: theme.colors.interactive01v1,
          color: theme.colors.interactive01,
        },
        '&:active': {
          backgroundColor: theme.colors.interactive01v1,
          borderColor: theme.colors.interactive03h,
        },
      },
      negative: {
        backgroundColor: theme.colors.uiBackground05,
        color: theme.colors.text06,
        '&:hover': {
          color: theme.colors.text07,
        },
        '&:active': {
          backgroundColor: theme.colors.interactive03,
          borderColor: theme.colors.interactive01,
        },
      },
    },
    outline: {},
  };
  return variants[variant][color];
};

export const ActionButtonStyles = createStyles((theme, { size, color }) => {
  return {
    root: {
      ...getFontExpressive(13, 400),
      ...getSizes(size || 'md', theme.spacing),
    },
    default: {
      border: '2px solid transparent',
      ...getVariant('default', theme, color),
    },
    inner: { gap: '4px' },
    rightIcon: {
      marginLeft: pxToRem(0),
      marginRight: pxToRem(0),
      height: theme.spacing['2'],
    },
    leftIcon: {
      marginRight: pxToRem(0),
      marginLeft: pxToRem(0),
    },
    label: {
      with: '100%', 
    },
    tooltipBody: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: theme.colors.uiBackground05,
      borderRadius: '2px',
      ...getFontExpressive(13, 400),
      ...getPaddings(theme.spacing['1'], theme.spacing['2']),
      boxShadow: theme.shadows.shadow04,
    },
  };
});

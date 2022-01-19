import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive } from './../../theme.mixins';

const getSizes = (size, spacing, iconOnly) => {
  return {
    xs: {
      height: spacing['5'],
      width: iconOnly ? spacing['5'] : 'auto',
      padding: iconOnly ? 0 : `${spacing['1']}px ${spacing['1']}px`,
      svg: { height: spacing['3'] },
    },

    sm: {
      height: spacing['7'],
      width: iconOnly ? spacing['7'] : 'auto',
      padding: iconOnly ? 0 : `${spacing['2']}px ${spacing['2']}px`,
      svg: { height: spacing['4'] },
    },
  }[size];
};

const getVariant = (variant, theme, color, active) => {
  const variants = {
    default: {
      positive: {
        backgroundColor: 'transparent',
        color: active ? theme.colors.interactive01 : theme.colors.text02,
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
        backgroundColor: 'transparent',
        color: active ? theme.colors.interactive02 : theme.colors.text06,
        '&:hover': {
          color: theme.colors.text07,
          backgroundColor: theme.colors.interactive02,
        },
        '&:active': {
          backgroundColor: theme.colors.interactive02h,
        },
      },
    },
    solid: {
      positive: {
        backgroundColor: theme.colors.interactive01v1,
        color: active ? theme.colors.interactive01 : theme.colors.text02,
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
          backgroundColor: theme.colors.interactive02,
        },
        '&:active': {
          backgroundColor: theme.colors.interactive02h,
        },
      },
    },
  };
  return variants[variant][color];
};

export const ActionButtonStyles = createStyles(
  (theme, { size, color, variant, iconOnly, active }) => {
    return {
      root: {
        ...getFontExpressive(theme.fontSizes['1'], 400),
        ...getSizes(size || 'md', theme.spacing, iconOnly),
      },
      default: {
        border: '2px solid transparent',
        ...getVariant(variant, theme, color, active),
      },
      inner: { gap: iconOnly ? 0 : theme.spacing[2] },
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
    };
  }
);

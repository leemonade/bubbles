import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive } from './../../theme.mixins';

const getSizes = (size, spacing) => {
  return {
    xs: {
      fontSize: pxToRem(14),
      width: spacing['7'],
      height: spacing['7'],
      svg: { height: spacing['4'] },
    },

    sm: {
      fontSize: pxToRem(14),
      width: spacing['8'],
      height: spacing['8'],
      svg: { height: spacing['5'] },
    },
  }[size];
};

const getVariant = (variant, theme, color) => {
  const variants = {
    default: {
      positive: {
        backgroundColor: theme.colors.uiBackground04,
        color: theme.colors.text05,
        '&:hover': {
          backgroundColor: theme.colors.interactive03,
          color: theme.colors.interactive01,
        },
        '&:active': {
          backgroundColor: theme.colors.interactive03,
          color: theme.colors.iinteractive01,
          borderTopColor: theme.colors.interactive01,
          borderRightColor: theme.colors.interactive01,
          borderBottomColor: theme.colors.interactive01,
          borderLeftColor: theme.colors.interactive01,
        },
        '&:focus': {
          backgroundColor: theme.colors.interactive03,
          color: theme.colors.iinteractive01,
          borderTopColor: theme.colors.interactive01,
          borderRightColor: theme.colors.interactive01,
          borderBottomColor: theme.colors.interactive01,
          borderLeftColor: theme.colors.interactive01,
        },
      },
      negative: {
        backgroundColor: theme.colors.uiBackground03,
        color: theme.colors.text08,
        '&:hover': {
          opacity: '0.8',
          backgroundColor: theme.colors.uiBackground03,
          color: theme.colors.text08,
        },
        '&:active': {
          backgroundColor: theme.colors.uiBackground03,
          color: theme.colors.text08,
          borderTopColor: theme.colors.interactive01,
          borderRightColor: theme.colors.interactive01,
          borderBottomColor: theme.colors.interactive01,
          borderLeftColor: theme.colors.interactive01,
        },
        '&:focus': {
          backgroundColor: theme.colors.uiBackground03,
          color: theme.colors.text08,
          borderTopColor: theme.colors.interactive01,
          borderRightColor: theme.colors.interactive01,
          borderBottomColor: theme.colors.interactive01,
          borderLeftColor: theme.colors.interactive01,
        },
      },
    },
  };
  return variants[variant][color];
};

export const IconButtonStyles  = createStyles((theme, { size, color }) => {
  return {
    root: {
      ...getSizes(size || 'md', theme.spacing),
      marginRight: pxToRem(0),
      marginLeft: pxToRem(0),
    },
    default: {
      border: '2px solid transparent',
      ...getVariant('default', theme, color),
    },
  };
});

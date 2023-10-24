import { createStyles } from '@mantine/styles';
import { pxToRem, getFocusDefaultBorder, getBoxShadowFromToken } from './../../theme.mixins';

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
    md: {
      fontSize: pxToRem(14),
      width: spacing['9'],
      height: spacing['9'],
      svg: { height: spacing['5'] },
    },
    lg: {
      fontSize: pxToRem(14),
      width: spacing['10'],
      height: spacing['10'],
      svg: { height: spacing['5'] },
    },
  }[size];
};

const getVariant = (variant, theme, color) => {
  const buttonIconTheme = theme.other.buttonIcon;
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
          borderColor: theme.colors.interactive01,
        },
        '&:focus': {
          backgroundColor: theme.colors.interactive03,
          color: theme.colors.iinteractive01,
          borderColor: theme.colors.interactive01,
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
          borderColor: theme.colors.interactive01,
        },
        '&:focus': {
          backgroundColor: theme.colors.uiBackground03,
          color: theme.colors.text08,
          borderColor: theme.colors.interactive01,
        },
      },
      primary: {
        backgroundColor: buttonIconTheme.background.color.primary.default,
        color: buttonIconTheme.content.color.primary.default,
        '&:hover': {
          ...getBoxShadowFromToken(buttonIconTheme.shadow.hover),
          backgroundColor: buttonIconTheme.background.color.primary.default,
          border: 'none',
        },
        '&:active': {
          backgroundColor: buttonIconTheme.background.color.primary.pressed,
          boxShadow: 'none',
        },
      },
    },
    transparent: {},
  };
  return variants[variant][color];
};

export const IconButtonStyles = createStyles((theme, { size, color, variant }) => {
  return {
    root: {
      marginRight: pxToRem(0),
      marginLeft: pxToRem(0),
      border: '2px solid transparent',
      ...getSizes(size || 'md', theme.spacing),
      ...getVariant(variant, theme, color),
    },
  };
});

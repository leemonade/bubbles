import { initial } from 'lodash';
import { pxToRem, getPaddings } from './../../theme.mixins';

const getSizes = (size, spacing, iconOnly) => {
  return {
    xs: {
      fontSize: pxToRem(14),
      height: spacing['7'],
      ...getPaddings(spacing['1'], iconOnly ? 0 : spacing['4']),
    },

    sm: {
      fontSize: pxToRem(14),
      height: 'initial',
      ...getPaddings(spacing['2'], iconOnly ? 0 : spacing['7']),
    },

    md: {
      fontSize: pxToRem(14),
      height: 'initial',
      ...getPaddings(spacing['3'], iconOnly ? 0 : spacing['8']),
    },

    lg: {
      fontSize: pxToRem(14),
      height: 'initial',
      ...getPaddings(spacing['4'], iconOnly ? 0 : spacing['9']),
    },

    xl: {
      fontSize: pxToRem(14),
      height: 'initial',
      ...getPaddings(spacing['5'], iconOnly ? 0 : spacing['10']),
    },
  }[size];
};

const getVariant = (variant, theme, color) => {
  const variants = {
    default: {
      primary: {
        backgroundColor: theme.colors.interactive01,
        color: theme.colors.text07,
        '&:hover': {
          backgroundColor: theme.colors.interactive01h,
        },
        '&:active': {
          backgroundColor: theme.colors.interactive01,
          borderColor: theme.colors.interactive01h,
        },
      },
      secondary: {
        backgroundColor: theme.colors.interactive02,
        color: theme.colors.text07,
        '&:hover': {
          backgroundColor: theme.colors.interactive02h,
        },
        '&:active': {
          backgroundColor: theme.colors.interactive02,
          borderColor: theme.colors.interactive01,
        },
      },
      tertiary: {
        backgroundColor: theme.colors.interactive03,
        color: theme.colors.text02,
        '&:hover': {
          backgroundColor: theme.colors.interactive03h,
        },
        '&:active': {
          backgroundColor: theme.colors.interactive03,
          borderColor: theme.colors.interactive03h,
        },
      },
      negative: {
        backgroundColor: 'transparent',
        color: theme.colors.text07,
        '&:hover': {
          opacity: '0.8',
          '.mantine-Button-icon': {
            //color: current,
          },
        },
        '&:active': {
          backgroundColor: theme.colors.interactive03,
          borderColor: theme.colors.interactive01,
        },
      },
    },
    outline: {
      primary: {
        borderColor: theme.colors.interactive01,
        color: theme.colors.interactive01,
        '&:hover': {
          borderColor: theme.colors.interactive01h,
          color: theme.colors.interactive01h,
        },
      },
      secondary: {
        borderColor: theme.colors.interactive02,
        color: theme.colors.interactive02,
        '&:hover': {
          borderColor: theme.colors.interactive02h,
          color: theme.colors.interactive02h,
        },
      },
      tertiary: {
        borderColor: theme.colors.interactive03,
        color: theme.colors.text02,
        '&:hover': {
          borderColor: theme.colors.interactive03h,
          color: theme.colors.text03,
        },
      },
      negative: {
        borderColor: theme.colors.text07,
        color: theme.colors.text07,
        '&:hover': {
          opacity: '0.8',
        },
        '&:active': {
          borderColor: theme.colors.text07,
          color: theme.colors.text07,
          boxShadow: theme.shadows.drop01,
        },
      },
    },
  };
  return variants[variant][color];
};

export const ButtonStyles = (theme, { size, color, iconOnly }) => {
  console.log(theme.spacing);
  return {
    root: {
      fontFamily: "'Lexend', sans-serif",
      fontWeight: 400,
      ...getSizes(size || 'md', theme.spacing, iconOnly),
      '.mantine-Button-rightIcon': {
        marginLeft: pxToRem(5),
        marginRight: pxToRem(-5),
      },
      '.mantine-Button-leftIcon': {
        marginRight: pxToRem(5),
        marginLeft: pxToRem(-5),
      },
    },
    default: {
      border: '2px solid transparent',
      ...getVariant('default', theme, color),
    },
    outline: {
      borderWidth: 2,
      ...getVariant('outline', theme, color),
    },
    link: {
      borderWidth: 0,
      ...getSizes(size || 'md', iconOnly),
      ...getVariant('outline', theme, color),
      '&:hover': {
        textDecoration: 'none',
      },
    },
  };
};

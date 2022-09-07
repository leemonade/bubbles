import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive } from './../../theme.mixins';

const getSizes = (size, theme, paddingX, paddingY) => {
  const { spacing, fontSizes } = theme;
  return {
    xs: {
      fontSize: pxToRem(fontSizes[2]),
      height: spacing[7],
      ...getPaddings(paddingY || spacing[1], paddingX || spacing[4]),
    },
    sm: {
      fontSize: pxToRem(fontSizes[2]),
      height: spacing[8],
      ...getPaddings(paddingY || spacing[1], paddingX || spacing[5]),
    },
    md: {
      fontSize: pxToRem(fontSizes[2]),
      height: spacing[9],
      ...getPaddings(paddingY || spacing[1], paddingX || spacing[7]),
    },
  }[size];
};

const getVariant = (variant, theme, color) => {
  const commonLinkStyles = {
    border: 'none',
    backgroundColor: 'transparent',
  };

  const variants = {
    filled: {
      primary: {
        backgroundColor: theme.colors.interactive01,
        color: theme.colors.text07,
        border: '2px solid transparent',
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
        border: '2px solid transparent',
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
        border: '2px solid transparent',
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
        border: '2px solid transparent',
        '&:hover': {
          opacity: '0.8',
        },
        '&:active': {
          backgroundColor: theme.colors.interactive03,
          borderColor: theme.colors.interactive01,
        },
      },
      fatic: {
        backgroundColor: theme.colors.fatic01v0,
        color: theme.colors.fatic01,
        border: '2px solid transparent',
        '&:hover': {
          color: theme.colors.text07,
          backgroundColor: theme.colors.fatic01,
        },
        '&:active': {
          backgroundColor: theme.colors.fatic01v0,
          borderColor: theme.colors.fatic01,
          color: theme.colors.fatic01,
        },
      },
    },
    outline: {
      primary: {
        borderColor: theme.colors.interactive01,
        color: theme.colors.interactive01,
        borderWidth: 2,
        '&:hover': {
          borderColor: theme.colors.interactive01h,
          color: theme.colors.interactive01h,
        },
      },
      secondary: {
        borderColor: theme.colors.interactive02,
        color: theme.colors.interactive02,
        borderWidth: 2,
        '&:hover': {
          borderColor: theme.colors.interactive02h,
          color: theme.colors.interactive02h,
        },
      },
      tertiary: {
        borderColor: theme.colors.interactive03,
        color: theme.colors.text02,
        borderWidth: 2,
        '&:hover': {
          borderColor: theme.colors.interactive03h,
          color: theme.colors.text03,
        },
      },
      negative: {
        borderColor: theme.colors.text04,
        color: theme.colors.text02,
        borderWidth: 2,
        '&:hover': {
          opacity: '0.8',
        },
        '&:active': {
          // borderColor: theme.colors.interactive01v0,
          // color: theme.colors.text07,
          boxShadow: theme.shadows.drop01,
        },
      },
      fatic: {
        borderColor: theme.colors.fatic01,
        color: theme.colors.fatic01,
        borderWidth: 2,
        '&:hover': {
          opacity: '0.8',
        },
      },
    },
    link: {
      primary: {
        color: theme.colors.interactive01,
        ...commonLinkStyles,
        '&:hover': {
          color: theme.colors.interactive01h,
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      },
      secondary: {
        color: theme.colors.interactive02,
        ...commonLinkStyles,
        '&:hover': {
          color: theme.colors.interactive02h,
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      },
      tertiary: {
        color: theme.colors.text02,
        ...commonLinkStyles,
        '&:hover': {
          color: theme.colors.text03,
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      },
      negative: {
        color: theme.colors.text07,
        ...commonLinkStyles,
        '&:hover': {
          opacity: '0.8',
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
        '&:active': {
          color: theme.colors.text07,
        },
      },
      fatic: {
        color: theme.colors.fatic01,
        ...commonLinkStyles,
        '&:hover': {
          opacity: '0.8',
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      },
    },
    light: {
      primary: {
        color: theme.colors.interactive01,
        backgroundColor: 'transparent',
        '&:hover': {
          color: theme.colors.interactive01,
          backgroundColor: theme.colors.interactive01v1,
        },
      },
      secondary: {
        color: theme.colors.interactive02,
        backgroundColor: 'transparent',
        '&:hover': {
          color: theme.colors.interactive02h,
          backgroundColor: theme.colors.interactive03,
        },
      },
      tertiary: {
        color: theme.colors.text02,
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: theme.colors.interactive03h,
        },
      },
      negative: {
        color: theme.colors.text07,
        backgroundColor: 'transparent',
        '&:hover': {
          opacity: '0.8',
        },
      },
      fatic: {
        color: theme.colors.fatic01,
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: theme.colors.fatic01v0,
        },
      },
    },
  };
  return variants[variant][color];
};

export const ButtonStyles = createStyles(
  (theme, { size, color, position, variant, compact, fullWidth, styles }) => {
    const currentVariant = getVariant(variant, theme, color);

    let compactOverrides = {};

    if (compact) {
      compactOverrides = {
        paddingLeft: variant === 'link' ? 0 : theme.spacing[4],
        paddingRight: variant === 'link' ? 0 : theme.spacing[4],
      };
    }

    return {
      root: {
        padding: 0,
        ...getFontExpressive(null, 400),
        ...getSizes(size || 'md', theme, variant === 'link' ? 0.1 : null),
        ...getVariant(variant, theme, color),
        ...compactOverrides,
        width: fullWidth ? '100%' : 'auto',
        ...styles,
      },
      inner: {
        justifyContent: position === 'apart' ? 'space-between' : position,
      },
      loading: {
        border: 'transparent',
        svg: {
          stroke: currentVariant.color,
        },
      },
      rightIcon: {
        marginLeft: pxToRem(8),
        marginRight: pxToRem(-8),
      },
      leftIcon: {
        marginRight: pxToRem(8),
        marginLeft: pxToRem(-8),
      },
      label: {
        width: !fullWidth && '100%',
      },
    };
  }
);

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

const getVariant = (variant, theme, color, disabled) => {
  const variants = {
    filled: {
      primary: {
        backgroundColor: disabled ? theme.colors.ui01 : theme.colors.interactive01,
        color: theme.colors.text07,
        '&:hover': {
          backgroundColor: disabled ? theme.colors.ui01 : theme.colors.interactive01h,
        },
        '&:active': {
          backgroundColor: disabled ? theme.colors.ui01 : theme.colors.interactive01,
          borderColor: disabled ? theme.colors.ui01 : theme.colors.interactive01h,
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
        },
        '&:active': {
          backgroundColor: theme.colors.interactive03,
          borderColor: theme.colors.interactive01,
        },
      },
      fatic: {
        backgroundColor: theme.colors.fatic01v0,
        color: theme.colors.fatic01,
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
        borderColor: theme.colors.text04,
        color: theme.colors.text02,
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
        '&:hover': {
          opacity: '0.8',
        },
      },
    },
    link: {
      primary: {
        color: theme.colors.interactive01,
        '&:hover': {
          color: theme.colors.interactive01h,
        },
      },
      secondary: {
        color: theme.colors.interactive02,
        '&:hover': {
          color: theme.colors.interactive02h,
        },
      },
      tertiary: {
        color: theme.colors.text02,
        '&:hover': {
          color: theme.colors.text03,
        },
      },
      negative: {
        color: theme.colors.text07,
        '&:hover': {
          opacity: '0.8',
        },
        '&:active': {
          color: theme.colors.text07,
        },
      },
      fatic: {
        color: theme.colors.fatic01,
        '&:hover': {
          opacity: '0.8',
        },
      },
    },
    light: {
      primary: {
        color: theme.colors.interactive01,
        '&:hover': {
          color: theme.colors.interactive01,
          backgroundColor: theme.colors.interactive01v1,
        },
      },
      secondary: {
        color: theme.colors.interactive02,
        '&:hover': {
          color: theme.colors.interactive02h,
          backgroundColor: theme.colors.interactive03,
        },
      },
      tertiary: {
        color: theme.colors.text02,
        '&:hover': {
          backgroundColor: theme.colors.interactive03h,
        },
      },
      negative: {
        backgroundColor: 'transparent',
        color: theme.colors.text07,
        '&:hover': {
          opacity: '0.8',
        },
      },
      fatic: {
        color: theme.colors.fatic01,
        '&:hover': {
          backgroundColor: theme.colors.fatic01v0,
        },
      },
    },
  };
  return variants[variant][color];
};

export const ButtonStyles = createStyles(
  (theme, { size, color, position, variant, compact, fullWidth, disabled, styles }) => {
    const currentVariant = getVariant(variant, theme, color);

    let compactOverrides = {};

    if (compact) {
      compactOverrides = {
        // paddingTop: theme.spacing[2],
        // paddingBottom: theme.spacing[2],
        paddingLeft: variant === 'link' ? 0 : theme.spacing[4],
        paddingRight: variant === 'link' ? 0 : theme.spacing[4],
        // height: 'auto',
        // minHeight: 38,
      };
    }

    return {
      root: {
        padding: 0,
        ...getFontExpressive(null, 400),
        ...getSizes(size || 'md', theme, variant === 'link' ? 0.1 : null),
        ...compactOverrides,
        width: fullWidth ? '100%' : 'auto',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...styles,
        '&[data-loading]': {
          border: 'transparent',
          svg: {
            stroke: currentVariant.color,
          },
        },
      },
      inner: {
        justifyContent: position === 'apart' ? 'space-between' : position,
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
      filled: {
        ...getVariant('filled', theme, color, disabled),
        border: '2px solid transparent',
        ...compactOverrides,
      },
      outline: {
        ...getVariant('outline', theme, color, disabled),
        borderWidth: 2,
        ...compactOverrides,
      },
      default: {
        ...getVariant('link', theme, color, disabled),
        border: 'none',
        backgroundColor: 'transparent',
        ...compactOverrides,

        '&:hover': {
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      },
      light: {
        ...getVariant('light', theme, color, disabled),
        backgroundColor: 'transparent',
        paddingOverrides: compactOverrides,
      },
    };
  }
);

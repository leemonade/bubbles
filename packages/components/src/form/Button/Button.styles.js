import { createStyles } from '@mantine/styles';
import { getBoxShadowFromToken } from './../../theme.mixins';

const getSizes = (size, theme) => {
  const buttonPadding = theme.other.button.spacing.padding;
  return {
    height: 'unset',
    padding: `${buttonPadding.vertical[size]} ${buttonPadding.horizontal[size]}`,
  };
};

const getVariant = (variant, theme, color) => {
  const buttonTheme = theme.other.button;

  const commonLinkStyles = {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  };

  const variants = {
    filled: {
      primary: {
        backgroundColor: buttonTheme.background.color.primary.default,
        borderColor: buttonTheme.border.color.primary.default,
        color: buttonTheme.content.color.primary['default--reverse'],
        '&:focus-visible': {
          ...getBoxShadowFromToken(theme.other.global.focus.default),
          backgroundColor: buttonTheme.background.color.primary.hover,
          borderColor: buttonTheme.border.color.primary.hover,
          outline: 'none',
        },
        '&:hover': {
          backgroundColor: buttonTheme.background.color.primary.hover,
          borderColor: buttonTheme.border.color.primary.hover,
        },
        '&:active': {
          backgroundColor: buttonTheme.background.color.primary.down,
          borderColor: buttonTheme.border.color.primary.down,
        },
      },
      secondary: {
        backgroundColor: buttonTheme.background.color.secondary.default,
        borderColor: buttonTheme.border.color.secondary.default,
        color: buttonTheme.content.color.secondary['default--reverse'],
        '&:focus-visible': {
          ...getBoxShadowFromToken(theme.other.global.focus.default),
          backgroundColor: buttonTheme.background.color.secondary.hover,
          borderColor: buttonTheme.border.color.secondary.hover,
          outline: 'none',
        },
        '&:hover': {
          backgroundColor: buttonTheme.background.color.secondary.hover,
          borderColor: buttonTheme.border.color.secondary.hover,
        },
        '&:active': {
          backgroundColor: buttonTheme.background.color.secondary.down,
          borderColor: buttonTheme.border.color.secondary.down,
        },
      },
      terciary: {
        backgroundColor: buttonTheme.background.color.terciary.default,
        borderColor: buttonTheme.border.color.terciary.default,
        color: buttonTheme.content.color.terciary['default--reverse'],
        '&:focus-visible': {
          ...getBoxShadowFromToken(theme.other.global.focus.default),
          backgroundColor: buttonTheme.background.color.terciary.hover,
          borderColor: buttonTheme.border.color.terciary.hover,
          outline: 'none',
        },
        '&:hover': {
          backgroundColor: buttonTheme.background.color.terciary.hover,
          borderColor: buttonTheme.border.color.terciary.hover,
        },
        '&:active': {
          backgroundColor: buttonTheme.background.color.terciary.down,
          borderColor: buttonTheme.border.color.terciary.down,
        },
      },
      phatic: {
        backgroundColor: buttonTheme.background.color.phatic.default,
        borderColor: buttonTheme.border.color.phatic.default,
        color: buttonTheme.content.color.phatic.default,
        '&:focus-visible': {
          ...getBoxShadowFromToken(theme.other.global.focus.default),
          backgroundColor: buttonTheme.background.color.phatic.hover,
          borderColor: buttonTheme.border.color.phatic.hover,
          color: buttonTheme.content.color.phatic.hover,
          outline: 'none',
        },
        '&:hover': {
          backgroundColor: buttonTheme.background.color.phatic.hover,
          borderColor: buttonTheme.border.color.phatic.hover,
          color: buttonTheme.content.color.phatic.hover,
        },
        '&:active': {
          backgroundColor: buttonTheme.background.color.phatic.down,
          borderColor: buttonTheme.border.color.phatic.down,
          color: buttonTheme.content.color.phatic.down,
        },
      },
    },
    outline: {
      primary: {
        backgroundColor: theme.other.global.background.color.transparent,
        borderColor: buttonTheme.border.color.primary.default,
        color: buttonTheme.content.color.primary.default,
        '&:focus-visible': {
          ...getBoxShadowFromToken(theme.other.global.focus.default),
          backgroundColor: theme.other.global.background.color.overlay.default,
          borderColor: buttonTheme.border.color.primary.hover,
          color: buttonTheme.content.color.primary.hover,
          outline: 'none',
        },
        '&:hover': {
          backgroundColor: theme.other.global.background.color.overlay.default,
          borderColor: buttonTheme.border.color.primary.hover,
          color: buttonTheme.content.color.primary.hover,
        },
        '&:active': {
          backgroundColor: theme.other.global.background.color.transparent,
          borderColor: buttonTheme.border.color.primary.down,
          color: buttonTheme.content.color.primary.down,
        },
      },
      secondary: {
        backgroundColor: theme.other.global.background.color.transparent,
        borderColor: buttonTheme.border.color.secondary.default,
        color: buttonTheme.content.color.secondary.default,
        '&:focus-visible': {
          ...getBoxShadowFromToken(theme.other.global.focus.default),
          backgroundColor: theme.other.global.background.color.overlay.default,
          borderColor: buttonTheme.border.color.secondary.hover,
          color: buttonTheme.content.color.secondary.hover,
          outline: 'none',
        },
        '&:hover': {
          backgroundColor: theme.other.global.background.color.overlay.default,
          borderColor: buttonTheme.border.color.secondary.hover,
          color: buttonTheme.content.color.secondary.hover,
        },
        '&:active': {
          backgroundColor: theme.other.global.background.color.transparent,
          borderColor: buttonTheme.border.color.secondary.down,
          color: buttonTheme.content.color.secondary.down,
        },
      },
      terciary: {
        backgroundColor: theme.other.global.background.color.transparent,
        borderColor: buttonTheme.border.color.terciary.default,
        color: buttonTheme.content.color.terciary.default,
        '&:focus-visible': {
          ...getBoxShadowFromToken(theme.other.global.focus.default),
          backgroundColor: theme.other.global.background.color.overlay.default,
          borderColor: buttonTheme.border.color.terciary.hover,
          color: buttonTheme.content.color.terciary.hover,
          outline: 'none',
        },
        '&:hover': {
          backgroundColor: theme.other.global.background.color.overlay.default,
          borderColor: buttonTheme.border.color.terciary.hover,
          color: buttonTheme.content.color.terciary.hover,
        },
        '&:active': {
          backgroundColor: theme.other.global.background.color.transparent,
          borderColor: buttonTheme.border.color.terciary.down,
          color: buttonTheme.content.color.terciary.down,
        },
      },
      phatic: {
        backgroundColor: theme.other.global.background.color.transparent,
        borderColor: buttonTheme.border.color.phatic['default-reverse'],
        color: buttonTheme.content.color.phatic.default,
        '&:focus-visible': {
          ...getBoxShadowFromToken(theme.other.global.focus.default),
          backgroundColor: buttonTheme.background.color.phatic.hover,
          borderColor: buttonTheme.border.color.phatic.hover,
          color: buttonTheme.content.color.phatic.hover,
          outline: 'none',
        },
        '&:hover': {
          backgroundColor: buttonTheme.background.color.phatic.hover,
          borderColor: buttonTheme.border.color.phatic.hover,
          color: buttonTheme.content.color.phatic.hover,
        },
        '&:active': {
          backgroundColor: theme.other.global.background.color.transparent,
          borderColor: buttonTheme.border.color.phatic.down,
          color: buttonTheme.content.color.phatic.down,
        },
      },
    },
    link: {
      primary: {
        color: theme.colors.interactive01,
        paddingInline: 0,
        ...commonLinkStyles,
        '&:hover': {
          color: theme.colors.interactive01h,
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      },
      secondary: {
        color: theme.colors.interactive02,
        paddingInline: 0,
        ...commonLinkStyles,
        '&:hover': {
          color: theme.colors.interactive02h,
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      },
      tertiary: {
        color: theme.colors.text02,
        paddingInline: 0,
        ...commonLinkStyles,
        '&:hover': {
          color: theme.colors.text03,
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      },
      negative: {
        color: theme.colors.text07,
        paddingInline: 0,
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
      phatic: {
        color: theme.colors.fatic01,
        paddingInline: 0,
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
        ...commonLinkStyles,
        '&:hover': {
          color: theme.colors.interactive01,
          backgroundColor: theme.colors.interactive01v1,
        },
      },
      secondary: {
        color: theme.colors.interactive02,
        backgroundColor: 'transparent',
        ...commonLinkStyles,
        '&:hover': {
          color: theme.colors.interactive02h,
          backgroundColor: theme.colors.interactive03,
        },
      },
      tertiary: {
        color: theme.colors.text02,
        backgroundColor: 'transparent',
        ...commonLinkStyles,
        '&:hover': {
          backgroundColor: theme.colors.interactive03h,
        },
      },
      negative: {
        color: theme.colors.text07,
        backgroundColor: 'transparent',
        ...commonLinkStyles,
        '&:hover': {
          opacity: '0.8',
        },
      },
      phatic: {
        color: theme.colors.fatic01,
        backgroundColor: 'transparent',
        ...commonLinkStyles,
        '&:hover': {
          backgroundColor: theme.colors.fatic01v0,
        },
      },
    },
  };
  return variants[variant][color];
};

export const ButtonStyles = createStyles(
  (theme, { size, color, variant, fullWidth, styles, rounded, disabled }) => {
    const currentVariant = getVariant(variant, theme, color);
    const buttonTheme = theme.other.button;
    const iconStyles = {
      padding: 3,
    };

    let disabledOverrides = {};
    if (disabled) {
      disabledOverrides = {
        backgroundColor:
          variant === 'filled' ? theme.other.global.background.color.disabled : 'transparent',
        borderColor: theme.other.global.background.color.disabled,
        color: theme.other.global.content.color.disabled,
      };
    }

    return {
      root: {
        border: `${buttonTheme.border.width} solid`,
        borderRadius: buttonTheme.border.radius.md,
        // borderRadius: rounded ? '50px' : 4,
        width: fullWidth ? '100%' : 'auto',
        // transition: 'background-color 300ms ease-out, border-color 300ms ease-out',
        ...getSizes(size || 'md', theme),
        ...getVariant(variant, theme, color),
        ...styles,
        '&[data-loading]': {
          // borderColor: 'transparent',
          svg: {
            stroke: currentVariant?.color,
          },
          '&:before': {
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
          },
        },
        '&[data-disabled]': {
          ...disabledOverrides,
        },
      },
      rightIcon: {
        ...iconStyles,
        marginLeft: buttonTheme.spacing.gap,
      },
      leftIcon: {
        ...iconStyles,
        marginRight: buttonTheme.spacing.gap,
      },
      inner: {
        height: 20,
      },
      label: {
        ...buttonTheme.content.typo,
      },
    };
  }
);

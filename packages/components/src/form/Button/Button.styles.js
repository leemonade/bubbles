import { createStyles } from '@mantine/styles';
import { getBoxShadowFromToken, getFocusDefaultBorder } from './../../theme.mixins';

const getSizes = (size, theme) => {
  const buttonPadding = theme.other.button.spacing.padding;
  if (size === 'md') {
    return {
      height: 'unset',
      padding: `${buttonPadding.vertical[size]} ${buttonPadding.horizontal.sm}`,
    };
  }
};

const getPaddingIfIcon = (hasLeftIcon, hasRightIcon, theme) => {
  if (!hasLeftIcon && !hasRightIcon) return;
  const buttonPadding = theme.other.button.spacing.padding;
  const iconLeftPadding = hasLeftIcon ? buttonPadding.horizontal.xs : buttonPadding.horizontal.sm;
  const iconRightPadding = hasRightIcon ? buttonPadding.horizontal.xs : buttonPadding.horizontal.sm;
  return {
    padding: `${buttonPadding.vertical.md} ${iconRightPadding} ${buttonPadding.vertical.md} ${iconLeftPadding}`,
  };
};

const getVariant = (variant, theme, color) => {
  const buttonTheme = theme.other.button;

  const commonLinkStyles = {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  };
  const buttonTypoDefault = buttonTheme.content.default;
  const buttonTypoHover = buttonTheme.content.hover;

  const variants = {
    filled: {
      primary: {
        backgroundColor: buttonTheme.background.color.primary.default,
        border: 'none',
        color: buttonTheme.content.color.primary.default,
        ...buttonTypoDefault,
        '&:focus-visible': {
          backgroundColor: buttonTheme.background.color.primary.hover,
          ...getFocusDefaultBorder(theme),
          outline: 'none',
          '& > div > span': {
            ...buttonTypoHover,
          },
        },
        '&:hover': {
          backgroundColor: buttonTheme.background.color.primary.hover,
          ...getBoxShadowFromToken(buttonTheme.shadow.hover),
          '& > div > span': {
            ...buttonTypoHover,
          },
        },
        '&:active': {
          backgroundColor: buttonTheme.background.color.primary.pressed,
          boxShadow: 'none',
          '& > div > span': {
            ...buttonTypoDefault,
          },
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
        color: buttonTheme.content.color.primary.default,
        paddingInline: 0,
        ...commonLinkStyles,
        '&:hover': {
          color: buttonTheme.content.color.primary.default,
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      },
      secondary: {
        color: buttonTheme.content.color.secondary.default,
        paddingInline: 0,
        ...commonLinkStyles,
        '&:hover': {
          color: buttonTheme.content.color.secondary.default,
          textDecoration: 'none',
          backgroundColor: 'transparent',
        },
      },
      tertiary: {
        color: buttonTheme.content.color.terciary.default,
        paddingInline: 0,
        ...commonLinkStyles,
        '&:hover': {
          color: buttonTheme.content.color.terciary.default,
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
        color: buttonTheme.content.color.terciary['default--reverse'],
        backgroundColor: 'transparent',
        ...commonLinkStyles,
        '&:hover': {
          color: buttonTheme.content.color.terciary['default--reverse'],
          backgroundColor: buttonTheme.background.color.terciary.default,
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
  (
    theme,
    {
      size,
      color,
      variant,
      fullWidth,
      styles,
      rounded,
      textAlign,
      disabled,
      hasLeftIcon,
      hasRightIcon,
    }
  ) => {
    const currentVariant = getVariant(variant, theme, color);
    const buttonTheme = theme.other.button;
    const iconStyles = {
      padding: 3,
    };

    const getTextAlign = () => {
      if (textAlign === 'left') return 'start';
      if (textAlign === 'right') return 'end';
      if (textAlign === 'appart') return 'space-between';
      return 'center';
    };

    let disabledOverrides = {};
    if (disabled) {
      disabledOverrides = {
        backgroundColor:
          variant === 'filled' ? theme.other.global.background.color.disabled : 'transparent',
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
        ...getPaddingIfIcon(hasLeftIcon, hasRightIcon, theme),
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
        justifyContent: getTextAlign(),
      },
      label: {
        ...buttonTheme.content.typo,
      },
    };
  }
);

/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import { createStyles } from '@mantine/styles';
import { getBoxShadowFromToken, getFocusDefaultBorder } from '../../theme.mixins';

const getSizes = (size, theme) => {
  const buttonPadding = theme.other.button.spacing.padding;
  return {
    height: 'unset',
    padding: `${buttonPadding.vertical.md} ${buttonPadding.horizontal.sm}`,
  };
};

const getIsSelected = (isSelected, theme) => {
  if (!isSelected) return;
  const buttonStyles = theme.other.button;
  return {
    backgroundColor: buttonStyles.background.color.primary.selected,
    borderRadius: `${buttonStyles.border.radius.md} ${buttonStyles.border.radius.md} 0 0 !important`,
  };
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
  // const commonLinkStyles = {
  //   borderColor: 'transparent',
  //   backgroundColor: 'transparent',
  // };
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
    },
    outline: {
      primary: {
        backgroundColor: theme.other.global.background.color.transparent,
        border: `${buttonTheme.border.width} solid ${buttonTheme.border.color.secondary.default}`,
        color: buttonTheme.content.color.secondary.default,
        '&:focus-visible': {
          ...getBoxShadowFromToken(theme.other.global.focus.default),
          borderColor: buttonTheme.border.color.primary.hover,
          outline: 'none',
          '& > div > span': {
            ...buttonTypoHover,
          },
        },
        '&:hover': {
          backgroundColor: buttonTheme.background.color.secondary.hover,
          ...getBoxShadowFromToken(buttonTheme.shadow.hover),
          '& > div > span': {
            ...buttonTypoHover,
          },
        },
        '&:active': {
          backgroundColor: buttonTheme.background.color.secondary.press,
          border: `${buttonTheme.border.width} solid ${buttonTheme.border.color.secondary.pressed}`,
          color: buttonTheme.content.color.secondary.pressed,
          ...getBoxShadowFromToken(buttonTheme.shadow.pressed),
          '& > div > span': {
            ...buttonTypoDefault,
          },
        },
      },
    },
    link: {
      primary: {
        color: buttonTheme.content.color.secondary.default,
        // paddingInline: 0,
        border: 'none',
        textAlign: 'center',
        textDecoration: buttonTheme.textDecoration.underLine,
        backgroundColor: buttonTheme.background.color.ghost.default,
        // ...commonLinkStyles,
        '&:focus-visible': {
          backgroundColor: buttonTheme.background.color.ghost.hover,
          ...getFocusDefaultBorder(theme),
          outline: 'none',
          '& > div > span': {
            ...buttonTypoHover,
          },
        },
        '&:hover': {
          color: buttonTheme.content.color.primary.default,
          backgroundColor: buttonTheme.background.color.ghost.hover,
          '& > div > span': {
            ...buttonTypoHover,
          },
        },
        '&:active': {
          backgroundColor: buttonTheme.background.color.ghost.pressed,
          border: 'none',
          color: buttonTheme.content.color.secondary.pressed,
          '& > div > span': {
            ...buttonTypoDefault,
          },
        },
      },
    },
    light: {
      primary: {
        color: buttonTheme.content.color.terciary['default--reverse'],
        backgroundColor: 'transparent',
        // ...commonLinkStyles,
        '&:hover': {
          color: buttonTheme.content.color.terciary['default--reverse'],
          backgroundColor: buttonTheme.background.color.terciary.default,
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
      textAlign,
      disabled,
      hasLeftIcon,
      hasRightIcon,
      isSelected,
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
        backgroundColor: theme.other.global.background.color.disabled,
        color: theme.other.global.content.color.disabled,
        border:
          variant === 'outline'
            ? `${buttonTheme.border.width} solid ${theme.other.global.border.color.disabled.default}`
            : 'none',
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
        ...getIsSelected(isSelected, theme),
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

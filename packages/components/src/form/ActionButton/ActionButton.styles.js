import { createStyles } from '@mantine/styles';
import { pxToRem, getFocusDefaultBorder } from './../../theme.mixins';

// These are really the styles when it is hovered, but they are applied when `active` prop is `true`
const getActiveStyles = (theme, color) => {
  const activeStyles = {
    primary: {
      backgroundColor: theme.background.color.primary.hover,
      borderColor: theme.border.color.primary.hover,
      color: `${theme.content.color.primary.hover} !important`,
    },
  };
  return activeStyles[color];
};
const getSizes = (size, padding) => {
  return {
    height: 'unset',
    padding: padding[size],
  };
};

const getVariant = (color, theme) => {
  const buttonActionTheme = theme.other.buttonAction;
  const variants = {
    primary: {
      backgroundColor: buttonActionTheme.background.color.primary.default,
      border: 'none',
      color: buttonActionTheme.content.color.primary.default,
      '&:hover': {
        backgroundColor: buttonActionTheme.background.color.primary.hover,
      },
      '&:active': {
        backgroundColor: buttonActionTheme.background.color.primary.pressed,
      },
      '&:focus-visible': {
        backgroundColor: buttonActionTheme.background.color.primary.hover,
        ...getFocusDefaultBorder(theme),
        outline: 'none',
      },
    },
  };
  return variants[color];
};

export const ActionButtonStyles = createStyles(
  (theme, { size, color, iconOnly, radius, active }) => {
    const actionButtonTheme = theme.other.buttonAction;
    const iconSize = size === 'md' ? 'lg' : 'md';
    console.log(theme);

    const isActive = active ? getActiveStyles(actionButtonTheme, color) : {};

    return {
      root: {
        border: `${actionButtonTheme.border.width} solid`,
        borderRadius: actionButtonTheme.border.radius[radius],
        ...actionButtonTheme.content.typo,
        ...getSizes(size || 'md', actionButtonTheme.spacing.padding),
        ...getVariant(color, theme),
        ...isActive,
      },
      inner: { gap: iconOnly ? 0 : actionButtonTheme.spacing.gap },
      leftIcon: {
        marginRight: pxToRem(0),
        marginLeft: pxToRem(0),
        height: theme.other.global.icon.size[iconSize],
        width: theme.other.global.icon.size[iconSize],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    };
  }
);

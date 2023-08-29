import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive } from './../../theme.mixins';

// These are really the styles when it is hovered, but they are applied when `active` prop is `true`
const getActiveStyles = (theme, color) => {
  const activeStyles = {
    primary: {
      backgroundColor: theme.background.color.primary.hover,
      borderColor: theme.border.color.primary.hover,
      color: `${theme.content.color.primary.hover} !important`,
    },
    negative: {
      backgroundColor: theme.background.color.primary['hover--reverse'],
      borderColor: theme.border.color.primary['hover--reverse'],
      color: theme.content.color.primary['hover--reverse'],
    },
    phatic: {
      backgroundColor: theme.background.color.phatic.hover,
      borderColor: theme.border.color.phatic.hover,
      color: theme.content.color.phatic.hover,
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
  const variants = {
    primary: {
      backgroundColor: theme.background.color.primary.default,
      borderColor: theme.border.color.primary.default,
      color: theme.content.color.primary.default,
      '&:hover': {
        backgroundColor: theme.background.color.primary.hover,
        borderColor: theme.border.color.primary.hover,
        color: theme.content.color.primary.hover,
      },
      '&:active': {
        backgroundColor: theme.background.color.primary.down,
        borderColor: theme.border.color.primary.down,
        color: theme.content.color.primary.down,
      },
    },
    negative: {
      backgroundColor: theme.background.color.primary.default,
      borderColor: theme.border.color.primary.default,
      color: theme.content.color.primary['default--reverse'],
      '&:hover': {
        backgroundColor: theme.background.color.primary['hover--reverse'],
        borderColor: theme.border.color.primary['hover--reverse'],
        color: theme.content.color.primary['hover--reverse'],
      },
      '&:active': {
        backgroundColor: theme.background.color.primary['down--reverse'],
        borderColor: theme.border.color.primary['down--reverse'],
        color: `${theme.content.color.primary['down--reverse']}`,
      },
    },
    phatic: {
      backgroundColor: theme.background.color.phatic.default,
      borderColor: theme.border.color.phatic.default,
      color: theme.content.color.phatic.default,
      '&:hover': {
        backgroundColor: theme.background.color.phatic.hover,
        borderColor: theme.border.color.phatic.hover,
        color: theme.content.color.phatic.hover,
      },
      '&:active': {
        backgroundColor: theme.background.color.phatic.down,
        borderColor: theme.border.color.phatic.down,
        color: theme.content.color.phatic.down,
      },
    },
  };
  return variants[color];
};

export const ActionButtonStyles = createStyles(
  (theme, { size, color, iconOnly, radius, active }) => {
    const actionButtonTheme = theme.other.buttonAction;
    const iconSize = size === 'md' ? 'lg' : 'md';

    const isActive = active ? getActiveStyles(actionButtonTheme, color) : {};

    return {
      root: {
        border: `${actionButtonTheme.border.width} solid`,
        borderRadius: actionButtonTheme.border.radius[radius],
        ...actionButtonTheme.content.typo,
        ...getSizes(size || 'md', actionButtonTheme.spacing.padding),
        ...getVariant(color, actionButtonTheme),
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

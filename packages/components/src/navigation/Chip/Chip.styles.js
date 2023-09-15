import { createStyles } from '@mantine/styles';

const getSizes = (size, theme) => {
  const chipPadding = theme.other.badge.spacing.padding;
  if (size === 'menu') {
    return {
      padding: `2px 8px`,
    };
  }
  return {
    padding: `${chipPadding[size] / 2}px ${chipPadding[size]}px`,
  };
};

const getVariant = (variant, theme, color) => {
  const chipTheme = theme.other.badge;
  const variants = {
    filled: {
      primary: {
        backgroundColor: `${chipTheme.background.color.primary.default} !important`,
        borderColor: `${chipTheme.background.color.primary.default} !important`,
      },
      secondary: {
        backgroundColor: `${chipTheme.background.color.secondary.default} !important`,
        borderColor: `${chipTheme.background.color.primary.default} !important`,
      },
    },
    outlined: {
      primary: {
        backgroundColor: `${theme.other.global.background.color.transparent} !important`,
        border: `1px solid ${chipTheme.background.color.primary.default} !important`,
      },
      secondary: {
        backgroundColor: `${theme.other.global.background.color.transparent} !important`,
        borderColor: `${chipTheme.background.color.secondary.default} !important`,
      },
    },
  };
  return variants[variant][color];
};

export const ChipStyles = createStyles((theme, { size, variant, color, disabled }) => {
  const chipTheme = theme.other.badge;
  const sizeMenu = size === 'menu';
  console.log(theme.other);
  const textColor = {
    filled: {
      primary: theme.other.global.background.color.surface.default,
      secondary: theme.other.global.background.color.surface.default,
    },
    outlined: {
      primary: chipTheme.background.color.primary.default,
      secondary: chipTheme.background.color.secondary.default,
    },
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
      '&[data-disabled]': {
        ...disabledOverrides,
        '& > div': {},
      },
    },
    label: {
      ...getSizes(size || 'md', theme),
      ...getVariant(variant, theme, color),
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: 'fit-content',
      '& > span': {
        color: textColor[variant][color],
        // ...chipTheme.content.typo[size],
        fontSize: sizeMenu && '8px',
      },
    },
    checkIcon: {
      color: textColor[variant][color],
    },
  };
});

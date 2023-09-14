import { createStyles } from '@mantine/styles';

const getSizes = (size, theme) => {
  const chipPadding = theme.other.badge.spacing.padding;
  return {
    height: 'unset',
    padding: `${chipPadding[size]}`,
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
      ...getSizes(size || 'md', theme),
      '&[data-disabled]': {
        ...disabledOverrides,
        '& > div': {},
      },
    },
    label: {
      ...getVariant(variant, theme, color),
      '& > span': {
        color: textColor[variant][color],
      },
    },
    checkIcon: {
      color: '#FFF',
    },
  };
});

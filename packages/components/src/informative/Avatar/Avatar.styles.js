import React from 'react';
import { createStyles } from '@mantine/styles';
import { AlertWarningTriangleIcon } from '@bubbles-ui/icons/solid';

const getSizes = (size, avatarSizes) => {
  const avatarSize = avatarSizes[size];
  return {
    height: avatarSize,
    width: avatarSize,
    minWidth: avatarSize,
  };
};

export const getIndicatorStyle = (theme, state) => {
  const indicatorStyle = {
    normal: {
      size: 0,
    },
    alert: { size: 8, color: theme.other.badge.background.color.primary.default },
    error: {
      size: 16,
      color: theme.other.badge.background.color.phatic.default,
      label: <AlertWarningTriangleIcon height={6} width={6} />,
    },
    notifications: {
      size: 16,
      color: theme.other.badge.background.color.primary.default,
      label: '2',
    },
    activity: { size: 0 },
  };
  return indicatorStyle[state];
};

const getIconWrapperStyles = (size, theme, badgeTheme) => {
  const svgStyles = {
    position: 'absolute',
    color: badgeTheme.content.color['default--reverse'],
  };

  const style = {
    md: {
      svg: {
        height: theme.other.global.icon.size.xsm,
        width: theme.other.global.icon.size.xsm,
        ...svgStyles,
      },
      height: theme.other.global.icon.size.xsm,
      width: theme.other.global.icon.size.xsm,
      padding: badgeTheme.spacing.padding.sm,
    },
    lg: {
      svg: {
        height: theme.other.global.icon.size.sm,
        width: theme.other.global.icon.size.sm,
        ...svgStyles,
      },
      height: theme.other.global.icon.size.sm,
      width: theme.other.global.icon.size.sm,
      padding: badgeTheme.spacing.padding.md,
    },
  };
  return style[size];
};

export const AvatarStyles = createStyles(
  (theme, { size, radius, color, state, activityStatus }) => {
    const avatarTheme = theme.other.avatar;
    const badgeTheme = theme.other.badge;

    return {
      root: {
        borderRadius: radius ? avatarTheme.border.radius.circle : 0,
        ...getSizes(size || 'md', avatarTheme.size),
      },
      placeholder: {
        color: avatarTheme.content.color.default,
        background: `${color}`,
        svg: { height: '80%' },
        ...avatarTheme.content.typo[size],
      },
      avatarWrapper: {
        display: 'inline-block',
      },
      indicatorRoot: {
        color: badgeTheme.content.color['default--reverse'],
        ...badgeTheme.content.typo['sm--bold'],
      },
      iconWrapper: {
        display: size === 'sm' && 'none',
        boxSizing: 'content-box',
        backgroundColor: badgeTheme.background.color.secondary.default,
        borderRadius: radius ? badgeTheme.border.radius : 0,
        position: 'absolute',
        ...getIconWrapperStyles(size, theme, badgeTheme),
        bottom: 0,
        right: 0,
        img: {
          filter: 'brightness(0) invert(1)',
        },
      },
    };
  }
);

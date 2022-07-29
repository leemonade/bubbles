import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';
import { avatarBadge, avatarBadgeNumber, avatarError } from '../../commons.mixins';

const getSizes = (size, spacing) => {
  return {
    xs: {
      height: `calc(${spacing['1']}px * 6)`,
      width: `calc(${spacing['1']}px * 6)`,
      fontSize: pxToRem(12),
      borderWidth: '1px',
    },

    sm: {
      fontSize: pxToRem(14),
      height: `calc(${spacing['1']}px * 9)`,
      width: `calc(${spacing['1']}px * 9)`,
      borderWidth: '1px',
    },
    md: {
      fontSize: pxToRem(28),
      height: `calc(${spacing['1']}px * 14)`,
      width: `calc(${spacing['1']}px * 14)`,
      borderWidth: '1px',
    },
    lg: {
      fontSize: pxToRem(60),
      height: `calc(${spacing['1']}px * 30)`,
      width: `calc(${spacing['1']}px * 30)`,
      borderWidth: '1px',
    },
  }[size];
};

const getActivityStatus = (size) => {
  return {
    xs: {
      height: 8,
      width: 8,
      bottom: 0,
      right: 0,
    },
    sm: {
      height: 10,
      width: 10,
      bottom: 0,
      right: 0,
    },
    md: {
      height: 14,
      width: 14,
      bottom: 0,
      right: 0,
    },
    lg: {
      height: 28,
      width: 28,
      bottom: 4,
      right: 4,
    },
  }[size];
};

export const AvatarStyles = createStyles((theme, { size, color, activityStatus }) => {
  let placeholder = {};
  if (size === 'xs') {
    placeholder.fontSize = '11px';
  }
  return {
    root: {
      borderRadius: '100%',
      borderStyle: 'solid',
      borderColor: theme.colors.ui01,
      boxSizing: 'content-box',
      ...getSizes(size || 'md', theme.spacing),
    },
    avatarsolid: {
      borderColor: `${color}`,
    },
    placeholder: {
      background: `${color}`,
      color: theme.colors.text07,
      svg: { height: '80%' },
      fontSize: 'inherit',
      ...placeholder,
    },
    avatarWrapper: {
      position: 'relative',
      display: 'inline-block',
    },
    avatarBadgeNumber: {
      ...avatarBadgeNumber(theme),
      top: 0,
      right: 0,
      transform: 'translateY(2%)',
    },
    avatarBadge: {
      ...avatarBadge(theme),
      top: 0,
      right: 0,
      transform: 'translateY(2%)',
    },
    avatarError: {
      ...avatarError(theme),
      top: 0,
      right: 0,
      transform: 'translateY(2%)',
    },
    avatarActivity: {
      position: 'absolute',
      borderRadius: '50%',
      border: `1px solid ${theme.colors.mainWhite}`,
      backgroundColor: theme.colors.fatic02,
      ...getActivityStatus(size, activityStatus),
    },
  };
});

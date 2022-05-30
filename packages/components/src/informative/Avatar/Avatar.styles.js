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

export const AvatarStyles = createStyles((theme, { size, color }) => {
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
  };
});

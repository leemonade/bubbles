import { createStyles } from '@mantine/styles';
import { pxToRem,  getFontExpressive } from './../../../theme.mixins';


const getSizes = (size, spacing) => {
  return {
    xs: {
      height: `calc(${spacing['1']}px * 5)`,
      width: `calc(${spacing['1']}px * 5)`,
      fontSize: pxToRem(12),
      borderWidth: '1px',
    },

    sm: {
      fontSize: pxToRem(14),
      height: `calc(${spacing['1']}px * 8)`,
      width: `calc(${spacing['1']}px * 8)`,
      borderWidth: '1px',
    },
    md: {
      fontSize: pxToRem(28),
      height: `calc(${spacing['1']}px * 15)`,
      width: `calc(${spacing['1']}px * 15)`,
      borderWidth: '2px',
    },
    lg: {
      fontSize: pxToRem(60),
      height: `calc(${spacing['1']}px * 30)`,
      width: `calc(${spacing['1']}px * 30)`,
      borderWidth: '2px',
    },
  }[size];
};


export const AvatarStyles = createStyles((theme, { size, color }) => {
  return {
    root: {
      borderRadius: '100%',
      borderStyle: 'solid',
      borderColor: theme.colors.ui01,
      ...getSizes(size || 'md', theme.spacing),
    },
    placeholder: {
      background: `${color}`,
      color: theme.colors.text07,
      svg: { height: '80%' },
      fontSize: 'inherit',
    },
    avatarWrapper: {
      position: 'relative',
      display: 'inline-block',
    },
    avatarBadgeNumber: {
      background: theme.colors.interactive01,
      color: theme.colors.text07,
      position: 'absolute',
      top: 0,
      right: 0,
      borderRadius: '100%',
      textAlign: 'center',
      width: theme.spacing[4],
      height: theme.spacing[4],
      ...getFontExpressive(10, 400, 'inter'),
    },
    avatarBadge: {
      background: theme.colors.interactive01,
      color: theme.colors.text07,
      position: 'absolute',
      top: 0,
      right: 0,
      borderRadius: '100%',
      textAlign: 'center',
      width: theme.spacing[2],
      height: theme.spacing[2],
    },
    avatarError: {
      background: theme.colors.fatic01,
      color: theme.colors.text07,
      position: 'absolute',
      top: 0,
      right: 0,
      borderRadius: '100%',
      textAlign: 'center',
      width: theme.spacing[4],
      height: theme.spacing[4],
      display:"inline-flex",
      justifyContent: "center",
      alignItems: "center",
      svg: { width: "90%"}
    },
  };
});

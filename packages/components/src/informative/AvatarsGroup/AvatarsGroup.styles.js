import { createStyles } from '@mantine/styles';
import { pxToRem } from '../../theme.mixins';

function getOverlap(theme, size) {
  return {
    xs: {
      marginLeft: pxToRem(-theme.spacing[3]),
      transform: `translateX(${pxToRem(theme.spacing[3])})`,
    },
    sm: {
      marginLeft: pxToRem(-theme.spacing[4]),
      transform: `translateX(${pxToRem(theme.spacing[4])})`,
    },
    md: {
      marginLeft: pxToRem(-theme.spacing[5]),
      transform: `translateX(${pxToRem(theme.spacing[5])})`,
    },
    lg: {
      marginLeft: pxToRem(-theme.spacing[6]),
      transform: `translateX(${pxToRem(theme.spacing[6])})`,
    },
  }[size];
}

export const AvatarsGroupStyles = createStyles((theme, { size, customAvatarMargin }) => {
  let overlap = getOverlap(theme, size);
  if (customAvatarMargin) {
    overlap = {
      marginLeft: pxToRem(-customAvatarMargin),
      transform: `translateX(${pxToRem(customAvatarMargin)})`,
    };
  }
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '.mantine-Avatar-root': {
        ...overlap,
        border: `1px solid ${theme.colors.ui03}`,
      },
    },
    overflow: {
      fontSize: '12px !important',
    },
    numberUsers: {
      paddingLeft: 21,
      ...theme.other.cardLibrary.content.typo.sm,
      color: theme.other.cardLibrary.content.color.muted,
      fontSize: 12,
      fontWeight: 'normal',
    },
  };
});

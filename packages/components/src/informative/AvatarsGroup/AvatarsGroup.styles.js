import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

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

export const AvatarsGroupStyles = createStyles((theme, { size }) => {
  return {
    root: {
      display: 'flex',

      '.mantine-Avatar-root': {
        ...getOverlap(theme, size),
        border: `1px solid ${theme.colors.ui03}`,
      },
    },
    overflow: {
      fontSize: '12px !important',
    },
  };
});

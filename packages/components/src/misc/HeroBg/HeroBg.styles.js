import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

const getColors = (theme, color) => {
  return {
    inherit: {},
    primary: {
      backgroundColor: theme.colors.interactive02,
      color: theme.colors.interactive03,
    },
    secondary: {
      backgroundColor: theme.colors.interactive01,
      color: theme.colors.interactive01v1,
    },
  }[color];
};

export const HeroBgStyles = createStyles((theme, { color, size }) => {
  return {
    root: {
      ...getColors(theme, color),
    },
  };
});

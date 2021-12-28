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

const getSize = (size) => {
  const isVertical = size.indexOf('x') === 0 || size === 'lg';
  return {
    height: isVertical ? '100%' : 'auto',
    width: isVertical ? 'auto' : '100%',
  };
};

export const HeroBgStyles = createStyles((theme, { color, size }) => {
  return {
    root: {
      ...getColors(theme, color),
      ...getSize(size),
    },
  };
});

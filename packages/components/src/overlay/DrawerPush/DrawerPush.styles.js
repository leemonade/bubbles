import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const DrawerPushStyles = createStyles((theme, { opened, size, style }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      boxSizing: 'border-box',
      height: '100%',
      overflow: 'hidden',
      width: opened ? size : 0,
      minWidth: opened ? size : 0,
      transition: 'all 0.3s ease-in-out',
      ...style,
    },
  };
});

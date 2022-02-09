import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const FileIconStyles = createStyles((theme, { size, color }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: 'inline-flex',
      alignItems: 'center',
      color: color,
    },
    label: {
      marginLeft: pxToRem(size / 1.5),
      fontSize: pxToRem(size),
      color: color,
    },
  };
});

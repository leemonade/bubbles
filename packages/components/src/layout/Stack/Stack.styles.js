import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const StackStyles = createStyles((theme, { direction, fullWidth }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: 'inline-flex',
      flexDirection: direction,
    },
  };
});

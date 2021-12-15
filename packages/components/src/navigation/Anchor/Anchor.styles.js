import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const AnchorStyles = createStyles((theme, {}) => {
  return {
    root: {
      textDecoration: 'underline',
      color: theme.colors.interactive01,
    },
  };
});

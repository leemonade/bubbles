import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ContentLegibleStyles = createStyles((theme, {}) => {
  return {
    root: {
      maxWidth: theme.breakpoints['sm'],
      flex: 1,
    },
  };
});

import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const TitleStyles = createStyles((theme, { order }) => {
  return {
    root: {
      color: theme.colors.text01,
      ...getFontExpressive(theme.fontSizes['2']),
      fontSize: theme.fontSizes[9 - order],
      lineHeight: 1.1,
    },
  };
});

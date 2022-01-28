import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const TitleStyles = createStyles((theme, { order }) => {
  return {
    root: {
      ...getFontExpressive(),
      color: theme.colors.text01,
      fontSize: theme.fontSizes[8 - order],
      lineHeight: 1.1,
      fontWeight: 500,
    },
  };
});

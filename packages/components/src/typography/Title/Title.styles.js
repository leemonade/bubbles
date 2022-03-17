import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

export const TitleStyles = createStyles((theme, { order, transform, color }) => {
  const COLORS = {
    primary: theme.colors.text01,
    secondary: theme.colors.text02,
    tertiary: theme.colors.text03,
    soft: theme.colors.text05,
    interactive: theme.colors.interactive01,
  };

  return {
    root: {
      ...getFontExpressive(),
      fontSize: theme.fontSizes[8 - order],
      lineHeight: 1.1,
      fontWeight: 500,
      textTransform: transform,
      color: COLORS[color] || theme.colors.text01,
    },
  };
});

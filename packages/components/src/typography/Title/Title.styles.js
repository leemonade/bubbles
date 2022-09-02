import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

export const TitleStyles = createStyles((theme, { order, transform, color, highlighted }) => {
  const COLORS = {
    primary: theme.colors.text01,
    secondary: theme.colors.text02,
    tertiary: theme.colors.text03,
    soft: theme.colors.text05,
    interactive: theme.colors.interactive01,
  };

  let highlightProps = {};
  if (highlighted) {
    highlightProps = {
      display: 'inline-block',
      boxShadow: `0 -0.9em 0 inset ${theme.colors.fatic05}`,
      padding: `0px 0.2rem`,
      margin: `0px -0.2rem`,
    };
  }

  return {
    root: {
      ...getFontExpressive(),
      fontSize: theme.fontSizes[8 - order],
      lineHeight: 1.2,
      fontWeight: 600,
      textTransform: transform,
      color: COLORS[color] || theme.colors.text01,
      ...highlightProps,
    },
  };
});

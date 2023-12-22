import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../theme.mixins';

export const TitleStyles = createStyles((theme, { order, transform, color, highlighted }) => {
  const globalContent = theme.other?.global?.content;
  const fontStyles = [];
  
  if (globalContent?.typo) {
    fontStyles.push(
      globalContent.typo.heading.xlg,
      globalContent.typo.heading.lg,
      globalContent.typo.heading.md,
      globalContent.typo.heading.sm,
      globalContent.typo.heading.xsm
    );
  }

  const COLORS = {
    primary: theme.colors.text01,
    secondary: theme.colors.text02,
    tertiary: theme.colors.text03,
    quartiary: theme.colors.text04,
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
      // ...getFontExpressive(),
      // fontSize: fontSizes[order - 1],
      // lineHeight: 1.2,
      // fontWeight: 600,
      ...(fontStyles[order - 1] ?? {}),
      textTransform: transform,
      color: COLORS[color] || theme.colors.text01,
      ...highlightProps,
    },
  };
});

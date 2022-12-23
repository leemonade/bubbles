import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const ItemStyles = createStyles((theme, {}) => {
  const scoreTheme = theme.other.score;
  return {
    root: {
      borderTop: `${scoreTheme.border.width} solid ${scoreTheme.border.color.neutral.emphasis}`,
      backgroundColor: scoreTheme.background.color.neutral.subtle,
      padding: scoreTheme.spacing.padding.md,
      '&:hover': {
        backgroundColor: scoreTheme.background.color.neutral.hover,
      },
      display: 'flex',
      gap: scoreTheme.spacing.gap,
      cursor: 'pointer',
    },
    titleContainer: {
      padding: scoreTheme.spacing.gap,
      gap: 4,
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    scoreContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: scoreTheme.spacing.gap,
    },
    title: {
      color: scoreTheme.content.color.default,
      ...scoreTheme.content.typo.md,
    },
    date: {
      color: scoreTheme.content.color.muted,
      ...scoreTheme.content.typo.sm,
    },
    percenatage: {
      color: scoreTheme.content.color.muted,
      ...scoreTheme.content.typo.sm,
    },
  };
});

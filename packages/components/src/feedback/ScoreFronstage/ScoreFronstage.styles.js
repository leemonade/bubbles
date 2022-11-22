import { createStyles } from '@mantine/styles';

export const ScoreFronstageStyles = createStyles((theme, {}) => {
  const scoreTheme = theme.other.score;
  const paddingLg = scoreTheme.spacing.padding.lg;
  return {
    root: {
      borderRadius: scoreTheme.border.radiuss.lg,
      position: 'relative',
    },
    imageContainer: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: -8,
    },
    header: {
      padding: `56px ${paddingLg} ${paddingLg} ${paddingLg}`,
      backgroundColor: scoreTheme.background.color.neutral.subtle,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderTopRightRadius: scoreTheme.border.radiuss.lg,
      borderTopLeftRadius: scoreTheme.border.radiuss.lg,
    },
    title: {
      color: scoreTheme.content.color.default,
      ...scoreTheme.content.typo.lg,
      lineHeight: '24px',
    },
    subtitle: {
      color: scoreTheme.content.color.muted,
      ...scoreTheme.content.typo.sm,
      lineHeight: '16px',
    },
    valuesContainer: {
      borderBottomRightRadius: scoreTheme.border.radiuss.lg,
      borderBottomLeftRadius: scoreTheme.border.radiuss.lg,
      overflow: 'hidden',
    },
  };
});

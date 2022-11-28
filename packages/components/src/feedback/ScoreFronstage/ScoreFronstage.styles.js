import { createStyles } from '@mantine/styles';

export const ScoreFronstageStyles = createStyles((theme, {}) => {
  const scoreTheme = theme.other.score;
  const paddingLg = scoreTheme.spacing.padding.lg;
  return {
    root: {
      borderRadius: scoreTheme.border.radius.lg,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
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
      borderTopRightRadius: scoreTheme.border.radius.lg,
      borderTopLeftRadius: scoreTheme.border.radius.lg,
    },
    title: {
      color: scoreTheme.content.color.default,
      ...scoreTheme.content.typo.lg,
    },
    subtitle: {
      color: scoreTheme.content.color.muted,
      ...scoreTheme.content.typo.sm,
    },
    valuesContainer: {
      borderBottomRightRadius: scoreTheme.border.radius.lg,
      borderBottomLeftRadius: scoreTheme.border.radius.lg,
      overflowY: 'auto',
    },
  };
});

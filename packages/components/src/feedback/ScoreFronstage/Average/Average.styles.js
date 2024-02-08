import { createStyles } from '@mantine/styles';
import { isUndefined } from 'lodash';

export const getVariant = (score, minGrade) => {
  if (score.number > minGrade) return 'positive';
  if (score.number < minGrade) return 'negative';
  if (score.number === minGrade) return 'attention';
  return 'neutral';
};

const getBackgroundColor = (scoreTheme, score, minGrade) => {
  const variant = getVariant(score, minGrade);

  return {
    labelBackground: scoreTheme.background.color[variant].muted,
    scoreBackground: scoreTheme.background.color[variant].muted,
  };
};

const getStyles = (scoreTheme, score, minGrade) => {
  const fontColor = isUndefined(score)
    ? scoreTheme.content.color.muted
    : scoreTheme.content.color.default;

  return {
    fontColor,
    ...getBackgroundColor(scoreTheme, score, minGrade),
  };
};

export const AverageStyles = createStyles((theme, { score, minGrade }) => {
  const scoreTheme = theme.other.score;
  const styles = getStyles(scoreTheme, score, minGrade);

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: scoreTheme.background.color.neutral.subtle,
    },
    labelContainer: {
      ...scoreTheme.content.typo.md,
      padding: scoreTheme.spacing.padding.lg,
      paddingLeft: `calc(${scoreTheme.spacing.padding.lg} + 32px)`,
      color: styles.fontColor,
      backgroundColor: styles.labelBackground,
      textAlign: 'right',
      flex: 1,
      whiteSpace: 'nowrap',
    },
    scoreContainer: {
      ...scoreTheme.content.typo.md,
      padding: scoreTheme.spacing.padding.lg,
      paddingInline: `calc(${scoreTheme.spacing.padding.lg} + 12px)`,
      boxSizing: 'content-box',
      height: '20px',
      color: styles.fontColor,
      backgroundColor: styles.scoreBackground,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
    },
    score: {
      ...theme.other.global.content.typo.heading.md,
    },
  };
});

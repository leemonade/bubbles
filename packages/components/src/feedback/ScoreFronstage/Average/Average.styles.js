import { createStyles } from '@mantine/styles';
import { isUndefined } from 'lodash';

export const getVariant = (score, minGrade) => {
  if (isUndefined(score)) return 'neutral';
  if (score > minGrade) return 'positive';
  if (score < minGrade) return 'negative';
  if (score === minGrade) return 'attention';
};

const getBackgroundColor = (scoreTheme, score, minGrade) => {
  const variant = getVariant(score, minGrade);

  return {
    labelBackground: scoreTheme.background.color[variant].default,
    scoreBackground: scoreTheme.background.color[variant].emphasis,
  };
};

const getStyles = (scoreTheme, score, minGrade) => {
  const fontColor = isUndefined(score)
    ? scoreTheme.content.color.muted
    : scoreTheme.content.color['default--reverse'];

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
      color: styles.fontColor,
      backgroundColor: styles.labelBackground,
      textAlign: 'right',
      flex: 1,
    },
    scoreContainer: {
      ...scoreTheme.content.typo.md,
      padding: scoreTheme.spacing.padding.lg,
      boxSizing: 'content-box',
      height: '20px',
      color: styles.fontColor,
      backgroundColor: styles.scoreBackground,
      textAlign: 'center',
    },
    score: {
      ...theme.other.global.content.typo.heading.md,
    },
  };
});

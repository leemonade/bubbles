import { createStyles } from '@mantine/styles';
import { getVariant } from '../Average/Average.styles';

export const BadgeStyles = createStyles((theme, { score, minGrade }) => {
  const scoreTheme = theme.other.score;
  const badgeTheme = theme.other.badge;

  const variant = getVariant(score, minGrade);

  return {
    root: {
      width: badgeTheme.size['2xlg'],
      padding: badgeTheme.spacing.padding.sm,
      // borderRadius: badgeTheme.border.radius,
      borderRadius: '50px',
      borderWidth: badgeTheme.border.width,
      ...badgeTheme.content.typo['md--bold'],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: scoreTheme.content.color.default,
      borderColor: scoreTheme.border.color[variant].muted,
      backgroundColor: scoreTheme.background.color[variant].muted,
    },
  };
});

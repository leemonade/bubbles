/* eslint-disable import/prefer-default-export */
import { createStyles } from '@mantine/styles';
import { getVariant } from '../Average/Average.styles';

export const BadgeStyles = createStyles((theme, { score, minGrade, nonCalificable }) => {
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
      borderStyle: 'solid',
      ...badgeTheme.content.typo['md--bold'],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: nonCalificable ? scoreTheme.content.color.muted : scoreTheme.content.color.default,
      borderColor: nonCalificable
        ? scoreTheme.border.color.neutral.emphasis
        : scoreTheme.border.color[variant].muted,
      backgroundColor: nonCalificable ? '#FFF' : scoreTheme.background.color[variant].muted,
    },
  };
});

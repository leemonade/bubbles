import { createStyles } from '@mantine/styles';

export const InputDescriptionStyles = createStyles((theme, { withIcon }) => {
  const labelTheme = theme.other.label;
  return {
    container: {
      display: 'flex',
    },
    description: {
      marginLeft: withIcon && labelTheme.spacing.gap.sm,
      color: labelTheme.content.color.subtle,
      ...labelTheme.content.typo['02'],
    },
    descriptionIcon: {
      height: theme.other.global.icon.size.lg,
      width: theme.other.global.icon.size.lg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: labelTheme.content.color.subtle,
    },
  };
});

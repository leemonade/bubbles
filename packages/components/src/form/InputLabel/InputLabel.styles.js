import { createStyles } from '@mantine/styles';

export const InputLabelStyles = createStyles((theme, {}) => {
  const labelTheme = theme.other.label;
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: labelTheme.spacing.gap.none,
    },
    label: {
      color: labelTheme.content.color.default,
      ...labelTheme.content.typo['01'],
    },
    required: {
      marginLeft: labelTheme.spacing.gap.sm,
      color: labelTheme.content.color.subtle,
    },
  };
});

import { createStyles } from '@mantine/styles';

const InputLabelStyles = createStyles((theme) => {
  const labelTheme = theme.other.label;

  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: labelTheme.spacing.gap.none,
    },
    label: {
      color: labelTheme.content.color.default,
      ...labelTheme.content.typo['02'],
    },
    required: {
      marginLeft: labelTheme.spacing.gap.sm,
      color: labelTheme.content.color.subtle,
    },
  };
});

export { InputLabelStyles };

import { createStyles } from '@mantine/styles';
import { getInputStyle } from '../mixins/fieldStyles.mixins';

export const MultiSelectStyles = createStyles((theme, { size, rightEvents }) => {
  const inputSizes = {
    xs: {
      minHeight: theme.spacing[7],
    },
    sm: {
      minHeight: 38,
    },
  }[size];

  return {
    wrapper: {
      padding: 3,
      margin: -3,
    },
    input: {
      ...getInputStyle(theme),
      ...inputSizes,
      paddingTop: 1,
    },
    rightSection: {
      color: theme.colors.text02,
      bottom: 2,
      right: 3,
      pointerEvents: rightEvents ? 'auto' : 'none',
      cursor: 'pointer',
    },
  };
});

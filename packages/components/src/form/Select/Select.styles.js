import { createStyles } from '@mantine/styles';
import { getInputStyle, getInputSizes } from '../mixins/fieldStyles.mixins';

export const SelectStyles = createStyles((theme, { size, orientation }) => {
  return {
    input: {
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
    },
    rightSection: {
      color: theme.colors.text02,
      pointerEvents: 'none',
    },
  };
});

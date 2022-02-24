import { createStyles } from '@mantine/styles';
import { getInputSizes, getInputStyle } from '../mixins/fieldStyles.mixins';

export const TextareaStyles = createStyles((theme, { size }) => {
  return {
    input: {
      ...getInputSizes(size || 'md', theme.spacing, false),
      ...getInputStyle(theme),
    },
    wrapper: {
      position: 'relative',
    },
    counter: {
      position: 'absolute',
      bottom: -20,
      right: 0,
    },
  };
});

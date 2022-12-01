import { createStyles } from '@mantine/styles';
import { getInputSizes, getInputStyle } from '../mixins/fieldStyles.mixins';

export const TextareaStyles = createStyles((theme, { size }) => {
  const inputTheme = theme.other.input;
  return {
    input: {
      ...getInputSizes(size || 'md', inputTheme.spacing.padding, false),
      ...getInputStyle(inputTheme, theme.other.global),
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

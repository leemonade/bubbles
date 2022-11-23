import { createStyles } from '@mantine/styles';
import { getInputStyle, getInputSizes } from '../mixins/fieldStyles.mixins';

export const TimeInputStyles = createStyles((theme, { size }) => {
  const inputTheme = theme.other.input;
  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', inputTheme.spacing.padding),
      ...getInputStyle(inputTheme, theme.other.global),
    },
    controls: {
      height: '100%',
    },
  };
});

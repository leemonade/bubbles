import { createStyles } from '@mantine/styles';
import { getInputStyle, getRightSection, getInputSizes } from '../mixins/fieldStyles.mixins';

export const ColorInputStyles = createStyles((theme, { size }) => {
  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
    },
  };
});

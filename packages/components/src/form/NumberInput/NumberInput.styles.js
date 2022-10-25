import { createStyles } from '@mantine/styles';
import { getPaddings, getFocusStyles, getSpacing } from '../../theme.mixins';
import { getInputStyle, getRightSection, getInputSizes } from '../mixins/fieldStyles.mixins';

export const NumberInputStyles = createStyles((theme, { size }) => {
  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
    },
  };
});

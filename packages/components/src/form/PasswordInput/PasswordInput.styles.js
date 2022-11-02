import { createStyles } from '@mantine/styles';
import { getFocusStyles, getPaddings } from '../../theme.mixins';
import { getInputStyle, getRightSection, getInputSizes } from '../mixins/fieldStyles.mixins';

export const PasswordInputStyles = createStyles((theme, { size }) => {
  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
    },
    // rightSection: { ...getRightSection(theme) },
    visibilityToggle: {
      color: '#495057',
    },
  };
});

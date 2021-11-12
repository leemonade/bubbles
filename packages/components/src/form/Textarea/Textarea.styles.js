import { createStyles } from '@mantine/styles';
import { getFocusStyles } from '../../theme.mixins';
import { getInputStyle, getErrorStyle, getDescriptionStyle, getLabelStyle, getRequiredStyle, getRightSection } from '../mixins/fieldStyles.mixins'

export const TextareaStyles = createStyles((theme) => {
  
  return {
    root: {},
    input: {
      ...getFocusStyles(theme),
      ...getInputStyle(theme),
    },

    error: {
      ...getErrorStyle(theme),
    },
    description: {
      ...getDescriptionStyle(theme),
    },
    rightSection: { ...getRightSection(theme) },
    label: {
      ...getLabelStyle(theme),
    },
    required: {
      ...getRequiredStyle(theme),
    },
  };
});


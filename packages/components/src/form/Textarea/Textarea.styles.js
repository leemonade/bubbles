import { createStyles } from '@mantine/styles';
import { getFocusStyles } from '../../theme.mixins';
import {
  getInputStyle,
  getErrorStyle,
  getDescriptionStyle,
  getLabelStyle,
  getRequiredStyle,
  getRightSection,
  getOrientation, 
} from '../mixins/fieldStyles.mixins';
export const TextareaStyles = createStyles((theme, { orientation }) => {
  return {
    root: {
      ...getOrientation(orientation || 'vertical', theme.spacing),
      // TODO -- REVISAR FORMA DE HACERLO SIN ATACAR A LA CLASE
      '.mantine-Textarea-description ~ &': {
        display: 'contents',
      },
    },
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


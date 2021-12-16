import { createStyles } from '@mantine/styles';
import { getFocusStyles, getPaddings } from '../../theme.mixins';
import {
  getDescriptionStyle,
  getInputStyle,
  getLabelStyle,
  getRequiredStyle,
  getRightSection,
  getInputSizes,
  getOrientation,
} from '../mixins/fieldStyles.mixins';

export const PasswordInputStyles = createStyles((theme, { size, orientation }) => {
  return {
    root: {
      ...getOrientation(orientation || 'vertical', theme.spacing),
    },
    input: {
      ...getFocusStyles(theme),
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
    },
    description: {
      gridArea: 'description',
    },
    error: {
      gridArea: 'error',
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

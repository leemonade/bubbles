import { createStyles } from '@mantine/styles';
import { getFocusStyles, getPaddings } from '../../theme.mixins';
import {
  getDescriptionStyle,
  getInputStyle,
  getLabelStyle,
  getRequiredStyle,
  getRightSection,
  getInputSizes,
} from '../mixins/fieldStyles.mixins';

export const PasswordInputStyles = createStyles((theme, { size }) => {
  return {
    root: {},
    input: {
      ...getFocusStyles(theme),
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
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

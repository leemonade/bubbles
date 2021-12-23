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
    input: {
      ...getFocusStyles(theme),
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
    },
    rightSection: { ...getRightSection(theme) },
  };
});

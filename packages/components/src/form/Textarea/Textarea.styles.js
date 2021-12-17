import { createStyles } from '@mantine/styles';
import {
  pxToRem,
  getFocusStyles,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '../../theme.mixins';
import {
  getDescriptionStyle,
  getLabelStyle,
  getOrientation,
  getRequiredStyle,
  getRightSection,
  getInputSizes,
  getInputStyle,
  getHelpStyle,
} from '../mixins/fieldStyles.mixins';

export const TextareaStyles = createStyles((theme, { size }) => {
  return {
    input: {
      ...getFocusStyles(theme),
      ...getInputSizes(size || 'md', theme.spacing, false),
      ...getInputStyle(theme),
    },
  };
});

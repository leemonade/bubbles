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
  getSizes,
} from '../mixins/fieldStyles.mixins';

export const InputWrapperStyles = createStyles((theme, { size, orientation }) => {
  return {
    root: {
      ...getOrientation(orientation || 'vertical', theme.spacing),
    },
    input: {
      ...getFocusStyles(theme),
      ...getSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
    },
    inputRoot: {
      display: 'contents',
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


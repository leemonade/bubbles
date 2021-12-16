import { createStyles } from '@mantine/styles';
import {
  getDescriptionStyle,
  getLabelStyle,
  getOrientation,
  getRequiredStyle,
  getRightSection,
} from '../mixins/fieldStyles.mixins';

export const InputWrapperStyles = createStyles((theme, { size, orientation }) => {
  return {
    root: {
      ...getOrientation(orientation || 'vertical', theme.spacing),
    },
    inputRoot: {
      display: 'contents',
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

import { createStyles } from '@mantine/styles';
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
    inputRoot: {
      display: 'contents',
    },
    error: {
      ...getErrorStyle(theme),
    },
    errorIcon: {
      color: theme.colors.fatic01,
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

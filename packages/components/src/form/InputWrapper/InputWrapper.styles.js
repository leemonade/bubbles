import { createStyles } from '@mantine/styles';
import { getFocusStyles } from '../../theme.mixins';
import {
  getInputStyle,
  getErrorStyle,
  getDescriptionStyle,
  getLabelStyle,
  getRequiredStyle,
  getRightSection
} from '../mixins/fieldStyles.mixins';

const getSizes = (size, spacing) => {
  return {
    xs: {
      height: spacing['7'],
      ...getPaddings(spacing['1'], spacing['4']),
    },

    sm: {
      height: spacing['8'],
      ...getPaddings(spacing['3'], spacing['4']),
    },
  }[size];
};
export const InputWrapperStyles = createStyles((theme) => {
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


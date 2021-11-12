import { createStyles } from '@mantine/styles';
import { getPaddings, getFocusStyles, getSpacing } from '../../theme.mixins';
import {
  getInputStyle,
  getErrorStyle,
  getDescriptionStyle,
  getLabelStyle,
  getRequiredStyle,
  getRightSection,
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
export const TextInputStyles = createStyles((theme, { size }) => {
  return {
    root: {},
    input: {
      ...getFocusStyles(theme),
      ...getSizes(size || 'md', theme.spacing),
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

import { createStyles } from '@mantine/styles';
import { getFocusStyles, getPaddings } from '../../theme.mixins';
import {
  getDescriptionStyle,
  getInputStyle,
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

export const PasswordInputStyles = createStyles((theme, { size }) => {
  return {
    root: {},
    input: {
      ...getFocusStyles(theme),
      ...getSizes(size || 'md', theme.spacing),
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

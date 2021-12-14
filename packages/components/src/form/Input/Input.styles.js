import { createStyles } from '@mantine/styles';
import { getPaddings, getFocusStyles, getSpacing } from '../../theme.mixins';
import { getInputStyle, getRightSection } from '../mixins/fieldStyles.mixins';

const getSizes = (size, spacing) => {
  return {
    xs: {
      height: spacing['7'],
      ...getPaddings(spacing['1'], spacing['2']),
    },

    sm: {
      height: spacing['8'],
      ...getPaddings(spacing['3'], spacing['3']),
    },
  }[size];
};
export const InputStyles = createStyles((theme, { size }) => {
  return {
    root: {},
    input: {
      ...getFocusStyles(theme),
      ...getSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
    },
    rightSection: { ...getRightSection(theme) },
  };
});

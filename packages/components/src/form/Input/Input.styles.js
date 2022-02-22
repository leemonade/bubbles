import { createStyles } from '@mantine/styles';
import { getPaddings, getFocusStyles, getSpacing, pxToRem } from '../../theme.mixins';
import { getInputStyle, getRightSection, getInputSizes } from '../mixins/fieldStyles.mixins';

export const InputStyles = createStyles((theme, { size, variant }) => {
  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme, variant),
      minHeight: pxToRem(38),
      height: 'auto',
    },
    rightSection: { ...getRightSection(theme) },
    icon: {
      bottom: theme.spacing['1'],
    },
  };
});

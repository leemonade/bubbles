import { createStyles } from '@mantine/styles';
import { getPaddings, getFocusStyles, getSpacing, pxToRem } from '../../theme.mixins';
import { getInputStyle, getRightSection, getInputSizes } from '../mixins/fieldStyles.mixins';

export const InputStyles = createStyles((theme, { size }) => {
  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
      minHeight: pxToRem(38),
      height: 'auto',
    },
    rightSection: { ...getRightSection(theme) },
  };
});

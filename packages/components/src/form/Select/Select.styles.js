import { createStyles } from '@mantine/styles';
import { pxToRem, getFocusStyles, getPaddings } from '../../theme.mixins';
import {
  getLabelStyle,
  getInputStyle,
  getInputSizes,
  getRequiredStyle,
} from '../mixins/fieldStyles.mixins';

export const SelectStyles = createStyles((theme, { size }) => {
  return {
    root: {},
    label: {
      ...getLabelStyle(theme),
    },
    required: {
      ...getRequiredStyle(theme),
    },
    input: {
      ...getFocusStyles(theme),
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
    },
  };
});

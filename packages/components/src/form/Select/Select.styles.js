import { createStyles } from '@mantine/styles';
import { pxToRem, getFocusStyles, getPaddings } from '../../theme.mixins';
import {
  getLabelStyle,
  getInputStyle,
  getInputSizes,
  getRequiredStyle,
  getOrientation,
} from '../mixins/fieldStyles.mixins';

export const SelectStyles = createStyles((theme, { size, orientation }) => {
  return {
    input: {
      ...getFocusStyles(theme),
      ...getInputSizes(size || 'md', theme.spacing),
      ...getInputStyle(theme),
    },
    rightSection: {
      color: theme.colors.text02,
      pointerEvents: 'none',
    },
  };
});

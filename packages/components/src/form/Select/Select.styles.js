import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive } from '../../theme.mixins';
import { getLabelStyle, getRequiredStyle } from '../mixins/fieldStyles.mixins';

export const SelectStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    label: {
      ...getLabelStyle(theme),
    },
    required: {
      ...getRequiredStyle(theme),
    },
  };
});

import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const DividerStyles = createStyles((theme, {}) => {
  return {
    root: {
      borderTopColor: theme.colors.ui01,
    },
    label: {
      ...getFontProductive(null),
    },
  };
});

import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const DividerStyles = createStyles((theme, { orientation }) => {
  return {
    root: {
      borderTopColor: theme.colors.ui01,
      height: orientation === 'vertical' && 'auto',
    },
    label: {
      ...getFontProductive(null),
    },
  };
});

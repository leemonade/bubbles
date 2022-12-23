import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const DividerStyles = createStyles((theme, { orientation }) => {
  const dividerTheme = theme.other.divider;
  return {
    root: {
      borderColor: dividerTheme.background.color.default,
      height: orientation === 'vertical' && 'auto',
    },
    label: {
      ...getFontProductive(null),
    },
  };
});

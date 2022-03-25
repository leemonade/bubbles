import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const StepperStyles = createStyles((theme, {}) => {
  return {
    root: {},
    content: {
      paddingTop: theme.spacing[6],
    },
  };
});

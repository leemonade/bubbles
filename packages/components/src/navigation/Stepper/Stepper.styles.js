import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const StepperStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: pxToRem(16),
    },
  };
});
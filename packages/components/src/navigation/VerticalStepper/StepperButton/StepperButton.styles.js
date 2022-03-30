import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const StepperButtonStyles = createStyles((theme, {}) => {
  return {
    root: {
      padding: '12px 0px 12px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
  };
});

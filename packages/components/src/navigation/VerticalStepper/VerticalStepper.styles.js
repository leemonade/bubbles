import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const VerticalStepperStyles = createStyles(
  (theme, { rootStyles, stepColumnStyles, currentStepStyles }) => {
    return {
      root: { ...rootStyles },
      stepColumn: {
        ...stepColumnStyles,
      },
      currentStep: {
        ...currentStepStyles,
      },
    };
  }
);

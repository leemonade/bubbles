import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

<<<<<<< HEAD:packages/components/src/navigation/Stepper/Stepper.styles.js
export const StepperStyles = createStyles((theme, {}) => {
  return {
    root: {},
=======
export const MenuStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    body: {
      boxShadow: theme.shadows.shadow03,
    },
>>>>>>> Menu:packages/components/src/navigation/Menu/Menu.styles.js
  };
});

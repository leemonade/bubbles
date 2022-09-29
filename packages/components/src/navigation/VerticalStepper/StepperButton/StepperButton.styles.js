import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const StepperButtonStyles = createStyles((theme, { isCompleted }) => {
  return {
    root: {
      padding: '12px 14px 12px 24px',
      display: 'flex',
      alignItems: 'center',
      minHeight: 56,
      position: 'relative',
    },
    isCompletedBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: isCompleted ? 56 : 0,
      overflow: 'hidden',
      transition: 'height 0.2s ease-in-out',
      backgroundColor: theme.colors.interactive03,
      zIndex: -1,
    },
    label: {
      fontWeight: 500,
      color: theme.colors.text04,
    },
    buttonContainer: {
      flex: 1,
      paddingRight: 26,
    },
  };
});

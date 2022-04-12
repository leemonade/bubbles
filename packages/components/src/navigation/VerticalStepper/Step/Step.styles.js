import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const StepStyles = createStyles((theme, { isCompleted, totalChilds }) => {
  const childHeight = 32 * totalChilds;

  return {
    root: {
      padding: '12px 14px 12px 24px',
      display: 'flex',
      height: 43.5,
      position: 'relative',
    },
    childStep: {
      padding: '4px 14px 8.5px 40px',
      display: 'flex',
      height: 32,
      position: 'relative',
    },
    isCompletedBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: isCompleted ? 43.5 + childHeight : 0,
      overflow: 'hidden',
      transition: 'height 0.2s ease-in-out',
      backgroundColor: theme.colors.interactive03,
      zIndex: -1,
    },
    info: { flex: 1, display: 'flex' },
    label: {
      fontWeight: 500,
      color: theme.colors.text04,
    },
    badge: {
      marginLeft: '12px',
    },
  };
});

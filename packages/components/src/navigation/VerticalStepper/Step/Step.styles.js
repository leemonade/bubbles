import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const StepStyles = createStyles((theme, {}) => {
  return {
    root: {
      // backgroundColor: theme.colors.interactive03,
      padding: '12px 8px 12px 24px',
      display: 'flex',
      height: 43.5,
    },
    info: { flex: 1, display: 'flex', alignItems: 'center' },
    label: {
      fontWeight: 500,
      color: theme.colors.text04,
    },
    badge: {
      marginLeft: '12px',
    },
  };
});

import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const ScoreFeedbackStyles = createStyles((theme, { styles }) => {
  return {
    root: {
      borderRadius: 4,
      display: 'flex',
      border: `1px solid ${theme.colors.ui01}`,
      ...styles,
    },
  };
});

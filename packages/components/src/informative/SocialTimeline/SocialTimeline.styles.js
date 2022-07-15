import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const SocialTimelineStyles = createStyles((theme, {}) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    dayHeader: {
      padding: 8,
      backgroundColor: theme.colors.ui02,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      position: 'sticky',
      top: '0px',
      zIndex: 10,
    },
  };
});

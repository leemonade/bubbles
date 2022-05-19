import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const ActivityHeaderStyles = createStyles((theme, {}) => {
  return {
    root: {
      padding: 16,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      alignItems: 'center',
    },
  };
});

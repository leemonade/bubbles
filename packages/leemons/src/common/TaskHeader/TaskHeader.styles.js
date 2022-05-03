import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const TaskHeaderStyles = createStyles((theme, { color }) => {
  return {
    root: {
      padding: '24px 24px 26px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
    },
    title: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: '24px',
    },
    subtitleWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },
    icon: {
      borderRadius: '50%',
      backgroundColor: color,
      padding: 4,
    },
    subtitle: {
      fontWeight: 500,
    },
  };
});

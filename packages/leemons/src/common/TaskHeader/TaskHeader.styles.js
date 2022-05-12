import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const TaskHeaderStyles = createStyles((theme, { color, styles, size }) => {
  const isSmall = size === 'sm';

  return {
    root: {
      padding: !isSmall ? '24px 24px 26px 24px' : 20,
      display: 'flex',
      flexDirection: !isSmall && 'column',
      gap: 18,
      ...styles,
    },
    title: {
      fontSize: !isSmall ? 24 : 20,
      fontWeight: 600,
      lineHeight: !isSmall ? '24px' : '20px',
      flex: isSmall && 1,
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
      display: isSmall && 'none',
      fontWeight: 500,
    },
  };
});

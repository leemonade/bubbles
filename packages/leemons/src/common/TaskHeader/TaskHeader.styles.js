import { createStyles } from '@bubbles-ui/components';

export const TaskHeaderStyles = createStyles((theme, { color, styles, size }) => {
  const isSmall = size === 'sm';

  return {
    root: {
      padding: !isSmall ? '24px 24px 26px 24px' : 22,
      display: 'flex',
      flexDirection: !isSmall && 'column',
      gap: 18,
      ...styles,
    },
    title: {
      fontSize: !isSmall ? 24 : 20,
      fontWeight: 600,
      lineHeight: !isSmall ? '30px' : '24px',
      flex: isSmall && 1,
      transition: 'font-size 0.3s ease-in-out, line-height 0.3s ease-in-out',
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
      position: 'relative',
      img: {
        filter: 'brightness(0) invert(1)',
      },
    },
    subtitle: {
      display: isSmall && 'none',
      fontWeight: 500,
    },
  };
});

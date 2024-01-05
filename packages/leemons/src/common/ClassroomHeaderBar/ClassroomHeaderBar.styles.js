import { createStyles } from '@bubbles-ui/components';

export const ClassroomHeaderBarStyles = createStyles((theme, {}) => {
  const globalTheme = theme.other.global;
  return {
    root: {
      backgroundColor: '#FFFFFF',
      paddingInline: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 80,
    },
    root2: {
      gap: 8,
      display: 'flex',
      alignItems: 'center',
    },
    pinIcon: {
      minHeight: 14,
      minWidth: 14,
    },
    scheduleContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 4,
    },
    infoWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      userSelect: 'none',
      svg: {
        color: '#4D5358',
      },
      paddingLeft: 8,
      paddingRight: 8,
    },
    clickable: {
      cursor: 'pointer',
    },
    label: {
      fontFamily: 'Albert Sans',
      fontWeight: 400,
      fontSize: 14,
      color: '#4D5358',
    },
    separator: {
      width: '1px',
      height: '24px',
      backgroundColor: '#DDE1E6',
    },
  };
});

import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const ClassroomHeaderBarStyles = createStyles((theme, {}) => {
  return {
    root: {
      backgroundColor: theme.colors.interactive03,
      paddingInline: 16,
      paddingBlock: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },
    classroomInfoBox: {
      padding: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 500,
      color: theme.colors.interactive01,
      backgroundColor: theme.colors.mainWhite,
      borderRadius: 4,
      height: 32,
    },
    pinIcon: {
      minHeight: 14,
      minWidth: 14,
    },
    scheduleBox: {
      padding: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      borderRadius: 4,
      backgroundColor: theme.colors.interactive03h,
      svg: {
        color: theme.colors.text05,
      },
      height: 32,
      cursor: 'pointer',
      userSelect: 'none',
    },
    scheduleContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 16,
    },
  };
});

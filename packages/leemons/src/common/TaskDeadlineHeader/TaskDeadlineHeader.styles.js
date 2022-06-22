import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const TaskDeadlineHeaderStyles = createStyles((theme, { deadlineExpanded, styles }) => {
  return {
    root: {
      borderRadius: '16px 16px 0 0',
      backgroundColor: theme.colors.mainWhite,
      ...styles,
    },
    deadlineWrapper: {
      backgroundColor: theme.colors.ui02,
      display: 'flex',
      alignItems: 'center',
      padding: '8px 16px',
      fontWeight: 500,
      color: theme.colors.text04,
      label: { color: theme.colors.text04 },
      gap: 24,
    },
    textColor: {
      color: theme.colors.text04,
      // whiteSpace: 'nowrap',
    },
    deadline: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.colors.interactive03h,
      padding: !deadlineExpanded ? 14 : 8,
      gap: !deadlineExpanded ? 16 : 4,
      borderRadius: 4,
    },
    deadlineDate: {
      color: theme.colors.text01,
    },
    deadlineIcon: {
      cursor: 'pointer',
      padding: 2,
      color: theme.colors.text01,
      ':active': {
        transform: 'translateY(2px)',
      },
    },
    datePicker: {
      minWidth: 240,
    },
    deadlineExtraTime: {
      display: !deadlineExpanded ? 'flex' : 'none',
      alignItems: 'center',
      gap: 8,
      visibility: deadlineExpanded ? 'hidden' : 'visible',
      flex: 1,
    },
    deadlineSwitch: {
      display: 'flex',
      flexDirection: 'row',
      flex: deadlineExpanded && 1,
    },
  };
});

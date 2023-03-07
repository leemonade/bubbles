import { createStyles } from '@bubbles-ui/components';

export const TaskDeadlineHeaderStyles = createStyles((theme, { styles }) => {
  const { global } = theme.other;
  return {
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      ...styles,
    },
    taskHeaderWrapper: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      marginLeft: 30,
    },
    deadlineWrapper: {
      backgroundColor: theme.colors.ui02,
      display: 'flex',
      alignItems: 'center',
      padding: '8px',
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
      padding: 8,
      gap: 16,
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
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      // visibility: deadlineExpanded ? 'hidden' : 'visible',
      flex: 1,
    },
    deadlineSwitch: {
      display: 'flex',
      flexDirection: 'row',
      // flex: deadlineExpanded && 1,
    },
  };
});

import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '@bubbles-ui/components';

export const TaskDeadlineStyles = createStyles((theme, { isMedium, styles }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      borderRadius: 4,
      borderTopRightRadius: !isMedium && 0,
      borderBottomRightRadius: !isMedium && 0,
      backgroundColor: theme.colors.mainWhite,
      display: 'inline-flex',
      flexDirection: isMedium ? 'column' : 'row',
      ...styles,
    },
    deadline: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: isMedium ? 'column' : 'row',
      gap: pxToRem(8),
      padding: isMedium ? 32 : '12px 16px',
    },
    calendarIcon: {
      marginBottom: isMedium && pxToRem(8),
      color: theme.colors.text06,
    },
    date: {
      fontWeight: 600,
    },
    alert: {
      backgroundColor: theme.colors.fatic01v0,
      color: theme.colors.fatic01,
      padding: isMedium ? 16 : '16px 25px',
      borderBottomLeftRadius: isMedium && 4,
      borderBottomRightRadius: isMedium && 4,
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
    },
    deadlineText: {
      color: theme.colors.fatic01,
      fontWeight: 600,
      textAlign: 'center',
    },
  };
});

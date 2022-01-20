import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../../theme.mixins';

export const CalendarEventModalStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    icon: {
      paddingRight: theme.spacing[3],
      color: theme.colors.text05,
      fontSize: theme.fontSizes[3],
    },
    actionButtonsContainer: {
      position: 'absolute',
      width: '100%',
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing[4],
      backgroundColor: theme.colors.uiBackground04,
    },
    divider: {
      marginTop: theme.spacing[6],
      marginBottom: theme.spacing[6],
    },
  };
});

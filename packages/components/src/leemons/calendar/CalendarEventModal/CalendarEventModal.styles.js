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
  };
});

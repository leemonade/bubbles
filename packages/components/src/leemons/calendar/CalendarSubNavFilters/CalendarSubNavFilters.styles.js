import { createStyles } from '@mantine/styles';
import { getFontExpressive } from '../../../theme.mixins';

export const CalendarSubNavFiltersStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
  };
});

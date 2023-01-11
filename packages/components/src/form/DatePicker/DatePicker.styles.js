import { createStyles } from '@mantine/styles';
import { getBoxShadowFromToken } from '../../theme.mixins';
import { getInputStyle, getRightSection, getInputSizes } from '../mixins/fieldStyles.mixins';

export const DatePickerStyles = createStyles((theme, { size, date, range }) => {
  const checkDate = () => {
    if (range) {
      if (Array.isArray(date)) return date?.every((value) => !!value);
      return false;
    }
    return !!date;
  };
  const inputTheme = theme.other.input;
  const calendarTheme = theme.other.calendar;
  const popoverTheme = theme.other.popover;
  return {
    root: {},
    input: {
      ...getInputSizes(size || 'md', inputTheme.spacing.padding, true),
      ...getInputStyle(inputTheme, theme.other.global),
      textOverflow: 'ellipsis !important',
      paddingRight: checkDate() && 30,
    },
    dropdown: {
      padding: `${calendarTheme.spacing.padding.vertical} ${calendarTheme.spacing.padding.horizontal}`,
      ...getBoxShadowFromToken(theme.other.global.shadow['200']),
      backgroundColor: popoverTheme.background.color.enabled,
      border: `${popoverTheme.border.width} solid ${popoverTheme.border.color.enabled}`,
      borderRadius: popoverTheme.border.radius,
    },
    calendarBase: {
      gap: calendarTheme.spacing.gap,
    },
    icon: {
      width: 32,
      color: inputTheme.content.color.icon,
    },
  };
});

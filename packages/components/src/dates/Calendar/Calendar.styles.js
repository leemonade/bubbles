import { createStyles } from '@mantine/styles';

const CalendarStyles = createStyles((theme, {}) => {
  const calendarTheme = theme.other.calendar;
  const buttonStyles = {
    padding: `${calendarTheme.spacing.padding.vertical} ${calendarTheme.spacing.padding.horizontal}`,
    // color: calendarTheme.content.color.calendarButton.default,
    backgroundColor: calendarTheme.background.color.calendarButton.default,
    borderRadius: calendarTheme.border.radius.md,
    ...calendarTheme.content.typo.md,
    fontWeight: 400,
    '&:hover': {
      backgroundColor: calendarTheme.background.color.calendarButton.hover,
      fontWeight: 500,
    },
    '&:active': {
      backgroundColor: calendarTheme.background.color.calendarButton.down,
      fontWeight: 500,
    },
  };

  const activeButtonStyles = {
    color: calendarTheme.content.color.calendarButton.default,

    backgroundColor: calendarTheme.background.color.calendarButton['default--reverse'],
    '&:hover': {
      backgroundColor: calendarTheme.background.color.calendarButton['hover--reverse'],
    },
    '&:active': {
      backgroundColor: calendarTheme.background.color.calendarButton['down--reverse'],
    },
  };

  return {
    calendarHeaderLevel: {
      ...buttonStyles,
    },
    calendarHeaderControl: {
      borderRadius: 9999,
      color: theme.colors.text05,
      '&:hover': {
        backgroundColor: theme.colors.ui03,
      },
      svg: {
        width: 20,
        height: 20,
      },
    },
    day: {
      ...calendarTheme.content.typo.sm,
      backgroundColor: calendarTheme.background.color.weekday.default,
      height: calendarTheme.size.md,
      width: calendarTheme.size.md,
      borderRadius: calendarTheme.border.radius.rounded,
      color: calendarTheme.content.color.weekday.default,
      '&:hover': {
        backgroundColor: calendarTheme.background.color.weekday.hover,
      },
      '&[data-selected]': {
        backgroundColor: calendarTheme.background.color.weekday.down,
        color: calendarTheme.content.color.calendarButton.default,
      },
      '&[data-outside]': {
        color: '#ced4da',
      },
      '&[data-weekend]': {
        color: calendarTheme.content.color.weekday['default-weekend'],
      },
      '&[data-in-range]': {
        backgroundColor: calendarTheme.background.color.range.hover,
      },
      '&[data-first-in-range]': {
        borderTopLeftRadius: calendarTheme.border.radius.rounded,
        borderBottomLeftRadius: calendarTheme.border.radius.rounded,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: calendarTheme.background.color.weekday.down,
      },
      '&[data-last-in-range]': {
        borderTopRightRadius: calendarTheme.border.radius.rounded,
        borderBottomRightRadius: calendarTheme.border.radius.rounded,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: calendarTheme.background.color.weekday.down,
      },
    },
    weekday: {
      ...calendarTheme.content.typo.sm,
      paddingBottom: calendarTheme.spacing.padding.horizontal,
      color: calendarTheme.content.color.weekName.default,
    },
    monthPickerControl: {
      ...buttonStyles,
    },
    monthPickerControlActive: {
      ...activeButtonStyles,
    },
    yearPickerControl: {
      ...buttonStyles,
    },
    yearPickerControlActive: {
      ...activeButtonStyles,
    },
  };
});

export default CalendarStyles;
export { CalendarStyles };

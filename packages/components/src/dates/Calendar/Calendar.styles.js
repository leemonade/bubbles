import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const CalendarStyles = createStyles((theme, {}) => {
  return {
    calendarHeaderLevel: {
      ...getFontProductive(),
      color: theme.colors.text05,
    },
    calendarHeaderControl: {
      borderRadius: 9999,
      color: theme.colors.text05,
      '&:hover': {
        backgroundColor: theme.colors.ui03,
        color: theme.colors.interactive01,
      },
      svg: {
        width: 20,
        height: 20,
      },
    },
    weekday: {
      ...getFontProductive(12),
    },
    day: {
      ...getFontProductive(12),
      borderRadius: 999,
      color: theme.colors.text01,
      width: 35,
      height: 35,

      '&:hover': {
        backgroundColor: theme.colors.interactive03h,
      },
    },
    selected: {
      '&:not(:disabled)': {
        backgroundColor: `${theme.colors.interactive01} !important`,
      },
    },
    monthPickerControl: {
      ...getFontProductive(12),
    },
    monthPickerControlActive: {
      backgroundColor: theme.colors.interactive01,
    },
    yearPickerControl: {
      ...getFontProductive(12),
    },
    yearPickerControlActive: {
      backgroundColor: theme.colors.interactive01,
    },
    inRange: {
      '&:not(:disabled)': {
        backgroundColor: `${theme.colors.interactive01v0} !important`,
        color: `${theme.colors.interactive01} !important`,
      },
    },
    firstInRange: {
      '&:not(:disabled)': {
        backgroundColor: `${theme.colors.interactive01} !important`,
        borderTopLeftRadius: '999px !important',
        borderBottomLeftRadius: '999px !important',
        color: `${theme.colors.text07} !important`,
      },
    },
    lastInRange: {
      '&:not(:disabled)': {
        backgroundColor: `${theme.colors.interactive01} !important`,
        borderTopRightRadius: '999px !important',
        borderBottomRightRadius: '999px !important',
        color: `${theme.colors.text07} !important`,
      },
    },
  };
});

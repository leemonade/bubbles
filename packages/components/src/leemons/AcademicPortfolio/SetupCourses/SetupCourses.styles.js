import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const SetupCoursesStyles = createStyles((theme, { onlyOneCourse }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    buttonRow: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    inputRow: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    onlyOneCourse: {
      visibility: onlyOneCourse && 'hidden',
      position: onlyOneCourse && 'absolute',
    },
    substageRow: {
      display: 'flex',
    },
    checkboxGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
  };
});

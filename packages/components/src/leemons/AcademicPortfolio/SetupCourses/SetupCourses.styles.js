import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../../theme.mixins';

export const SetupCoursesStyles = createStyles((theme, { onlyOneCourse }) => {
  return {
    root: {},
    numInputHeader: {
      width: '60%',
    },
    onlyOneCourse: {
      visibility: onlyOneCourse && 'hidden',
      position: onlyOneCourse && 'absolute',
    },
  };
});

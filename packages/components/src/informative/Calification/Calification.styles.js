import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const CalificationStyles = createStyles((theme, { grade, minimumGrade }) => {
  const colors = [{}, {}];

  if (grade === minimumGrade) {
    colors[0].backgroundColor = '#d4b642';
    colors[1].backgroundColor = '#E8C642';
  }
  if (grade > minimumGrade) {
    colors[0].backgroundColor = '#4ba773';
    colors[1].backgroundColor = '#50B579';
  }
  if (grade < minimumGrade) {
    colors[0].backgroundColor = '#c9516c';
    colors[1].backgroundColor = '#DC5571';
  }

  return {
    root: {
      display: 'flex',
      height: 52,
    },
    labelContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 24,
      paddingRight: 10,
      ...colors[0],
      span: {
        color: theme.colors.mainWhite,
      },
    },
    gradeContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // paddingInline: 16,
      minWidth: 48,
      maxWidth: 48,
      ...colors[1],
      span: {
        color: theme.colors.mainWhite,
        fontWeight: 500,
      },
    },
  };
});

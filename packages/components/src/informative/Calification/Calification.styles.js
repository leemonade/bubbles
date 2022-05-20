import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const CalificationStyles = createStyles(
  (theme, { grade, minimumGrade, orientation, inverted, styles }) => {
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';

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

    const verticalFont = isVertical ? getFontProductive() : {};

    return {
      root: {
        display: 'flex',
        flexDirection: isVertical && 'column-reverse',
        height: isHorizontal && 52,
        ...styles,
      },
      labelContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: isVertical && 'row-reverse',
        alignItems: 'center',
        paddingLeft: isHorizontal && 24,
        writingMode: isVertical && 'vertical-rl',
        justifyContent: isVertical && 'center',
        width: isVertical && 110,
        ...colors[!inverted ? 0 : 1],
        span: {
          color: theme.colors.mainWhite,
          lineHeight: isHorizontal ? '16px' : '24px',
          transform: isVertical && 'rotate(-90deg)',
          paddingInline: isVertical && 16,
          fontSize: isVertical && 24,
        },
      },
      gradeContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: isHorizontal ? 48 : 110,
        maxWidth: isHorizontal ? 48 : 110,
        height: isVertical && 135,
        ...colors[!inverted ? 1 : 0],
        span: {
          color: theme.colors.mainWhite,
          fontWeight: isHorizontal && 500,
          fontSize: isVertical && 48,
          ...verticalFont,
        },
      },
    };
  }
);

import { createStyles, getFontProductive, getPaddings, pxToRem } from '@bubbles-ui/components';

export const MonthRangeViewStyles = createStyles((theme, {}) => {
  return {
    root: {},
    monthRangeView: {
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: 16,
      columnGap: 76,
    },
    month: {
      width: 252,
      minWidth: 252,
      maxWidth: 252,
    },
  };
});

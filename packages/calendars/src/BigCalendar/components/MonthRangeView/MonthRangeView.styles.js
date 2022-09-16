import { createStyles, getFontProductive, getPaddings, pxToRem } from '@bubbles-ui/components';

export const MonthRangeViewStyles = createStyles((theme, { printMode }) => {
  return {
    root: {},
    monthRangeView: {
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: printMode ? 4 : 16,
      columnGap: printMode ? 0 : 76,
      justifyContent: printMode && 'space-between',
      paddingInline: printMode && 40,
    },
    month: {
      width: printMode ? 196 : 252,
      minWidth: printMode ? 196 : 252,
      maxWidth: printMode ? 196 : 252,
    },
  };
});

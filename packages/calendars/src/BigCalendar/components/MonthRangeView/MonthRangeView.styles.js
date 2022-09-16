import { createStyles, getFontProductive, getPaddings, pxToRem } from '@bubbles-ui/components';

export const MonthRangeViewStyles = createStyles((theme, { printMode }) => {
  return {
    root: {},
    monthRangeView: {
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: printMode ? 0 : 16,
      columnGap: printMode ? 0 : 76,
      justifyContent: printMode && 'space-between',
      paddingInline: printMode && 16,
    },
    month: {
      width: 252,
      minWidth: 252,
      maxWidth: 252,
      transform: printMode && 'scale(0.9)',
    },
  };
});

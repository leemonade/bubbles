/* eslint-disable import/prefer-default-export */
import { createStyles } from '@bubbles-ui/components';

export const MonthRangeViewStyles = createStyles((theme, { printMode }) => ({
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
}));

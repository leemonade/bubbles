import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const LibraryCardFooterStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: 'flex',
      justifyContent: 'space-between',
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
    },
    date: {
      color: theme.colors.text04,
      fontWeight: 500,
      fontSize: pxToRem(12.5),
      lineHeight: pxToRem(14),
    },
  };
});

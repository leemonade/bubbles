import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const LibraryCardFooterStyles = createStyles((theme, { action }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: 'flex',
      justifyContent: 'space-between',
      height: 38,
      padding: action ? `${pxToRem(3)} ${pxToRem(16)}` : `${pxToRem(12)} ${pxToRem(16)}`,
    },
    date: {
      color: theme.colors.text04,
      fontWeight: 500,
      fontSize: pxToRem(12.5),
      lineHeight: pxToRem(14),
    },
  };
});

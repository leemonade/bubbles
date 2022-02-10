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
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 38,
      padding: action ? `${pxToRem(3)} ${pxToRem(16)}` : `${pxToRem(12)} ${pxToRem(16)}`,
    },
    date: {
      color: theme.colors.text04,
      fontSize: pxToRem(11),
    },
  };
});

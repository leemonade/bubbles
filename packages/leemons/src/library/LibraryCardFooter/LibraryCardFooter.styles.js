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
      minHeight: 38,
      padding: action ? `${pxToRem(3)} ${pxToRem(16)}` : `${pxToRem(13)} ${pxToRem(16)}`,
      backgroundColor: theme.colors.mainWhite,
    },
    date: {
      color: theme.colors.text04,
      fontSize: pxToRem(11),
    },
  };
});

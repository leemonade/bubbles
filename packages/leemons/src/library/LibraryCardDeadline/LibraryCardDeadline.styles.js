import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const LibraryCardDeadlineStyles = createStyles((theme, { isNew }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      display: 'flex',
    },
    icon: {
      marginRight: pxToRem(8),
      paddingTop: pxToRem(2),
    },
    title: {
      fontWeight: 600,
      fontSize: pxToRem(12),
      lineHeight: pxToRem(20),
      color: isNew ? theme.colors.fatic02 : theme.colors.fatic01,
    },
    deadline: {
      color: theme.colors.text02,
    },
  };
});

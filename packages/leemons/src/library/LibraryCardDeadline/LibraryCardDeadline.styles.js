import { createStyles, pxToRem, getFontProductive } from '@bubbles-ui/components';

export const LibraryCardDeadlineStyles = createStyles((theme, { isNew }) => {
  return {
    root: {
      ...getFontProductive(theme.fontSizes['2'], 400),
      display: 'flex',
      padding: pxToRem(8),
      backgroundColor: 'white',
    },
    icon: {
      marginRight: pxToRem(8),
      paddingTop: pxToRem(4),
      color: theme.colors.text04,
    },
    title: {
      fontWeight: 600,
      fontSize: pxToRem(12),
      lineHeight: pxToRem(20),
      color: isNew ? theme.colors.fatic02 : theme.colors.fatic01,
    },
    deadline: {
      color: theme.colors.text02,
      fontSize: pxToRem(12),
      lineHeight: pxToRem(14),
      height: 14,
      overflow: 'hidden',
    },
  };
});

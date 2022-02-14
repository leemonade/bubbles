import { createStyles, pxToRem, getFontExpressive } from '@bubbles-ui/components';

export const LibraryDetailPlayerStyles = createStyles((theme, { height, color }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      minHeight: height,
    },
    cover: {
      position: 'relative',
    },
    color: {
      backgroundColor: color,
      height: pxToRem(8),
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      left: 0,
      right: 0,
    },
    titleRow: {
      display: 'flex',
      alignItems: 'center',
      padding: `${pxToRem(24)} ${pxToRem(16)}`,
      gap: pxToRem(16),
    },
    title: {
      fontWeight: 600,
      flex: 1,
    },
    fileIcon: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      backgroundColor: theme.colors.interactive03h,
      padding: pxToRem(16),
      borderRadius: '4px 2px 0 0',
    },
  };
});

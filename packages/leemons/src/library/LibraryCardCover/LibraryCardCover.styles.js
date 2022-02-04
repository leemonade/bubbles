import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const LibraryCardCoverStyles = createStyles((theme, { color, hovered, height }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      position: 'relative',
      height: height,
      width: '100%',
    },
    title: {
      fontWeight: 600,
      lineHeight: pxToRem(20),
      padding: pxToRem(12),
    },
    blurryBox: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      height: '100%',
      position: 'absolute',
      zIndex: 1,
      background: 'rgba(246, 245, 247, 0.75)',
      backdropFilter: 'blur(2px)',
      justifyContent: 'space-between',
    },
    color: {
      width: '100%',
      height: hovered ? pxToRem(8) : pxToRem(2),
      backgroundColor: color,
      transition: 'height 0.2s ease-in-out',
    },
    fileIcon: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      backgroundColor: theme.colors.interactive03h,
      padding: pxToRem(16),
    },
  };
});

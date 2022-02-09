import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const LibraryCardCoverStyles = createStyles((theme, { color, height, blur }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      position: 'relative',
      height: height,
      width: '100%',
      borderRadius: '4px 2px 0 0',
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
      backdropFilter: `blur(${blur}px)`,
      justifyContent: 'space-between',
      borderRadius: '4px 0 0 0',
    },
    deadline: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      zIndex: 2,
      width: '50%',
    },
    color: {
      width: '100%',
      height: pxToRem(8),
      backgroundColor: color,
      transition: 'all 0.2s ease-out',
      borderRadius: '2px 0 0 0',
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

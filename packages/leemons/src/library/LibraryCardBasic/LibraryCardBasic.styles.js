import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const LibraryCardBasicStyles = createStyles((theme, { height, blur, color }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      position: 'relative',
      height: height + 4,
      width: '100%',
      borderRadius: 4,
      border: `2px solid ${theme.colors.ui03}`,
      img: {
        borderRadius: 2,
      },
      overflow: 'hidden',
    },
    titleWrapper: {
      paddingBlock: 16,
      paddingInline: 12,
    },
    title: {
      fontWeight: 600,
      lineHeight: pxToRem(20),
    },
    childrenWrapper: {
      flex: 1,
    },
    blurryBox: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      height: '100%',
      position: 'absolute',
      zIndex: 1,
      background: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: `blur(${blur}px)`,
      borderRadius: '2px 0 0px 2px',
    },
    color: {
      width: '100%',
      height: pxToRem(8),
      backgroundColor: color || theme.colors.ui01,
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
      borderRadius: 4,
    },
  };
});

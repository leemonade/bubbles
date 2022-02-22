import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const LibraryNavbarStyles = createStyles((theme, { isExpanded }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      position: 'relative',
      backgroundColor: theme.colors.ui03,
    },
    header: {
      color: theme.colors.text01,
      padding: `${pxToRem(24)} ${pxToRem(0)} ${pxToRem(16)} ${pxToRem(24)}`,
    },
    title: {
      fontSize: pxToRem(24),
      lineHeight: pxToRem(30),
      color: 'inherit',
    },
    uploadButton: {
      display: isExpanded && 'none',
      padding: `${pxToRem(24)} ${pxToRem(14)} ${pxToRem(0)} ${pxToRem(14)}`,
      // width: 'calc(100% - 16px)',
    },
    navbarTop: {
      width: 'calc(100% - 20px)',
      maxHeight: isExpanded ? 700 : 92,
      marginInline: 10,
      backgroundColor: isExpanded ? theme.colors.mainWhite : 'inherit',
      transition:
        'max-height 0.6s ease-out, box-shadow 1s ease-out, border 0.2s ease-out, background-color 0.6s ease-out',
      overflow: 'hidden',
      border: isExpanded ? `1px solid ${theme.colors.ui04}` : `1px solid transparent`,
      position: 'relative',
      zIndex: 2,
    },
    navbarTopSubWrapper: {
      opacity: isExpanded ? 1 : 0,
      transition: 'opacity 0.6s ease-out',
    },
    fileUpload: {
      width: '100%',
    },
    fileUploadWrapper: {
      padding: `${pxToRem(24)} ${pxToRem(16)}`,
      backgroundColor: theme.colors.mainWhite,
    },
    navbarTopList: {
      backgroundColor: theme.colors.ui03,
      '& > span': {
        padding: 16,
      },
    },
    navbarBody: {
      position: 'absolute',
      top: 180,
      right: 0,
      left: 0,
    },
  };
});

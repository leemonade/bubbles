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
      padding: 24,
      opacity: isExpanded ? 0 : 1,
      transition: 'opacity 0.2s ease-in-out',
    },
    navbarTop: {
      height: isExpanded ? 700 : 240,
      transition: 'all 0.3s ease-in-out',
    },
  };
});

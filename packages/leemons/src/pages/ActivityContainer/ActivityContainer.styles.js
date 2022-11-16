import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const ActivityContainerStyles = createStyles((theme, { isScrolled }) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      overflowY: 'auto',
      maxHeight: '100vh',
    },
    header: {
      display: 'flex',
      position: 'fixed',
      minHeight: isScrolled ? 64 : 204,
      height: isScrolled ? 64 : 204,
      top: '0px',
      transition: 'height 0.3s ease-in-out',
      zIndex: 9,
    },
    taskHeader: {
      backgroundColor: isScrolled ? theme.colors.interactive03 : theme.colors.mainWhite,
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      left: 0,
      width: !isScrolled && '50%',
      minWidth: 690,
      borderRadius: !isScrolled && '16px 16px 0 0',
    },
    deadline: {
      zIndex: 1,
      position: 'absolute',
      right: isScrolled ? 0 : 8,
      top: 8,
    },
  };
});

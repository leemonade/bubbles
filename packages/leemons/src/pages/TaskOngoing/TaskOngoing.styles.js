import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const TaskOngoingStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    header: {
      position: 'relative',
      height: 240,
    },
    mainContent: {
      height: '370px',
      backgroundColor: theme.colors.mainWhite,
      display: 'flex',
    },
    leftSide: {
      backgroundColor: 'blue',
      width: '50%',
      padding: '16px 32px',
    },
    rightSide: {
      width: '50%',
      backgroundColor: 'red',
      padding: 24,
    },
  };
});

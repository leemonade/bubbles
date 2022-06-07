import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const ScoresPeriodFormStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
    },
    selectWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    },
    buttonWrapper: {
      marginTop: 84,
    },
    periodWrapper: {
      marginTop: 8,
      display: 'flex',
      padding: 16,
      gap: 8,
      border: `1px solid ${theme.colors.ui01}`,
      borderRadius: 4,
      div: {
        flex: 1,
      },
    },
  };
});

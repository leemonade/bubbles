import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const EvaluationPeriodsFormStyles = createStyles((theme, {}) => {
  return {
    root: {
      ...getFontExpressive(theme.fontSizes['2']),
      width: '100%',
    },
    periodWrapper: {
      width: '100%',
      marginTop: 16,
    },
    inputWrapper: {
      flex: 1,
      minWidth: 160,
    },
    subPeriodTitle: {
      marginBlock: pxToRem(8),
    },
  };
});

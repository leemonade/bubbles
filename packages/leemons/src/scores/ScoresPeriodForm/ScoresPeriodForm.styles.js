import {
  createStyles,
  pxToRem,
  getPaddings,
  getFontExpressive,
  getFontProductive,
} from '@bubbles-ui/components';

export const ScoresPeriodFormStyles = createStyles(
  (theme, { periodWrapperWidth, isSavingPeriod }) => {
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
      popover: {
        width: periodWrapperWidth + 34,
        padding: 16,
      },
      popoverTitle: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        color: theme.colors.text01,
        span: { fontWeight: 500 },
        marginBottom: isSavingPeriod && 32,
      },
      closeButton: {
        flex: 1,
        display: 'flex',
        justifyContent: 'end',
      },
      popoverContent: {
        display: isSavingPeriod ? 'flex' : 'none',
        flexDirection: 'column',
        gap: 18,
      },
    };
  }
);

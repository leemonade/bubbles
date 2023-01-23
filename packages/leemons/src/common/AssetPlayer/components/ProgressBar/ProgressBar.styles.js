import { createStyles, pxToRem } from '@bubbles-ui/components';

export const ProgressBarStyles = createStyles((theme, {}) => {
  const globalTheme = theme.other.global;

  return {
    progressBarWrapper: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      gap: globalTheme.spacing.gap.lg,
      padding: globalTheme.spacing.padding.md,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2,
      background:
        'linear-gradient(180deg, rgba(50, 50, 50, 0) 13.54%, rgba(54, 54, 54, 0.609375) 73.44%, #383838 100%)',
    },
    progressBar: {
      WebkitAppearance: 'none',
      height: 5,
      width: '100%',
      backgroundColor: '#FFF',
      borderRadius: 4,
      overflow: 'hidden',
      position: 'relative',
    },
    progressBarValue: {
      height: '100%',
      backgroundColor: globalTheme.background.color.primary.default,
      transition: 'width 0.1s linear',
      position: 'relative',
    },
    progressBarSeekSlider: {
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      width: '100%',
      position: 'absolute',
      backgroundColor: 'transparent',
      height: 5,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: 0,
      cursor: 'pointer',
      '::-webkit-slider-thumb': {
        visibility: 'hidden',
        WebkitAppearance: 'none',
        appearance: 'none',
        width: pxToRem(5),
        height: pxToRem(5),
        borderRadius: '50%',
        backgroundColor: theme.colors.mainBlack,
        cursor: 'pointer',
      },
      '::-moz-range-thumb': {
        visibility: 'hidden',
        MozAppearance: 'none',
        appearance: 'none',
        width: pxToRem(5),
        height: pxToRem(5),
        borderRadius: '50%',
        backgroundColor: theme.colors.mainBlack,
        cursor: 'pointer',
      },
    },
    duration: {
      color: theme.colors.mainWhite,
      minWidth: pxToRem(46),
    },
    controlBar: {
      display: 'flex',
      gap: globalTheme.spacing.gap.lg,
      alignItems: 'center',
    },
    iconWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    whiteIcon: {
      color: 'white',
      cursor: 'pointer',
    },
  };
});

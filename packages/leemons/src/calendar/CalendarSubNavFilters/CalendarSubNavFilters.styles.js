import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const CalendarSubNavFiltersStyles = createStyles((theme, { mainColor }) => {
  return {
    subNav: {
      height: '100%',
    },
    switchLabel: {
      color: theme.colors.text07,
    },
    segmentRoot: {
      height: '42px',
      padding: 2,
      backgroundColor: mainColor,
      // paddingLeft: 3,
      // paddingRight: 0,
    },
    segmentRoot2: {
      width: '100%',
      padding: 2,
      backgroundColor: mainColor,
    },
    segmentLabel: {
      ...getFontExpressive(),
      color: theme.colors.text06,
      boxSizing: 'border-box',
      alignItems: 'center',
      textAlign: 'center',
      display: 'flex',
      height: '100%',
      margin: 0,
      '&:hover': {
        color: theme.colors.text07,
      },
    },
    segmentLabelActive: {
      color: `${theme.colors.text07}!important`,
    },
    segmentActive: {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      // backgroundColor: theme.colors.interactive02d,
      top: 4,
      left: 4,
    },
    segmentControl: {
      border: 'none!important',
    },
    icon: {
      img: {
        filter: 'brightness(0) invert(1)',
      },
    },
  };
});

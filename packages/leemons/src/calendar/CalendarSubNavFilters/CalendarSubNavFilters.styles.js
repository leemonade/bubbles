import { createStyles, getFontExpressive } from '@bubbles-ui/components';

export const CalendarSubNavFiltersStyles = createStyles((theme, {}) => {
  return {
    subNav: {
      height: '100%'
    },
    switchLabel: {
      color: theme.colors.text07
    },
    segmentRoot: {
      height: '42px',
      padding: 2,
      backgroundColor: theme.colors.uiBackground05
      // paddingLeft: 3,
      // paddingRight: 0,
    },
    segmentRoot2: {
      width: '100%',
      padding: 2,
      backgroundColor: theme.colors.uiBackground05
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
        color: theme.colors.text07
      }
    },
    segmentLabelActive: {
      color: `${theme.colors.text07}!important`
    },
    segmentActive: {
      backgroundColor: theme.colors.interactive02d,
      top: 4,
      left: 4
    },
    segmentControl: {
      border: 'none!important'
    },
    icon: {
      img: {
        filter: 'brightness(0) invert(1)'
      }
    }
  };
});

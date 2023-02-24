import { createStyles } from '@bubbles-ui/components';

const getHeaderHeight = (size) => {
  if (size === 'lg') return { height: 320 };
  if (size === 'sm') return { height: 160 };
  return { height: 220 };
};

const getActivityTop = (size, hasBack, editActivity) => {
  if (size === 'lg') return { top: 108 };
  if (editActivity) return { top: 68 };
  if (hasBack) return { top: 56 };
  return { top: 48 };
};

export const HeaderStyles = createStyles((theme, { size, hasBack, editActivity, withTimeline }) => {
  return {
    root: {},
    header: {
      position: 'relative',
      backgroundColor: 'white',
      ...getHeaderHeight(size),
    },
    headerBackground: {
      position: 'absolute',
    },
    dropdownContainer: {
      position: 'absolute',
      zIndex: 4,
      left: 48,
      top: 68,
      // maxWidth: withTimeline && '50%',
    },
    activityContainer: {
      position: 'absolute',
      zIndex: 4,
      left: 48,
      ...getActivityTop(size, hasBack, editActivity),
      // maxWidth: withTimeline && '50%',
    },
    timeline: {
      zIndex: 5,
      position: 'absolute',
      top: '50%',
      bottom: 0,
      right: 0,
      left: '60%',
      maxWidth: '50%',
      transform: 'translateY(-50%)',
    },
    onBack: {
      position: 'absolute',
      zIndex: 4,
      color: 'white',
      left: 48,
      top: 24,
    },
    onBackButton: {
      padding: 0,
      color: 'white',
      border: 'none',
      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'white',
      },
      '&:active': {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'white',
      },
    },
  };
});

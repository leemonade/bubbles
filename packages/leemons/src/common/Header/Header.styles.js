import { createStyles } from '@bubbles-ui/components';

const getHeaderHeight = (size) => {
  if (size === 'lg') return { height: 320 };
  if (size === 'sm') return { height: 160 };
  return { height: 220 };
};

export const HeaderStyles = createStyles((theme, { size }) => {
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
      // maxWidth: '50%',
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

import { createStyles } from '@bubbles-ui/components';

export const SwiperStyles = createStyles(
  (
    theme,
    { slideStyles, buttonStyles, nextButtonStyles, prevButtonStyles, isBeginning, isEnd },
  ) => {
    const buttonCommonStyles = {
      position: 'absolute',
      top: 0,
      height: '100%',
      backgroundColor: theme.colors.interactive03,
      marginTop: 0,
      borderRadius: 2,
      zIndex: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colors.text04,
      cursor: 'pointer',
      transition: 'width 0.3s ease-in-out',
      ...buttonStyles,
      '&:hover': {
        backgroundColor: theme.colors.interactive03h,
      },
    };

    return {
      root: {
        '.swiper': {
          paddingLeft: !isBeginning ? 45 : 0,
          paddingRight: !isEnd ? 45 : 0,
          transition: 'all 0.3s ease-in-out',
        },
        '.swiper-slide': {
          height: '100%',
          ...slideStyles,
        },
      },
      nextButton: {
        right: 0,
        width: isEnd ? 0 : 48,
        userSelect: 'none',
        ...buttonCommonStyles,
        ...nextButtonStyles,
      },
      prevButton: {
        left: 0,
        width: isBeginning ? 0 : 48,
        userSelect: 'none',
        ...buttonCommonStyles,
        ...prevButtonStyles,
      },
      selectWrapper: {
        height: '100%',
        width: '100%',
        border: '1px solid transparent',
      },
      selectedSlide: {
        border: `1px solid ${theme.colors.interactive01}`,
      },
    };
  },
);

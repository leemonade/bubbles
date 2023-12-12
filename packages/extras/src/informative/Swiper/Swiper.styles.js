import { createStyles, pxToRem } from '@bubbles-ui/components';

const SwiperStyles = createStyles(
  (
    theme,
    { slideStyles, buttonStyles, nextButtonStyles, prevButtonStyles, isBeginning, isEnd },
  ) => {
    const buttonCommonStyles = {
      position: 'absolute',
      top: 0,
      height: '100%',
      backgroundColor: theme.colors.mainWhite,
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
        backgroundColor: theme.colors.mainWhite,
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
        '&:hover': {
          '& > svg': {
            backgroundColor: theme.other.button.content.color.terciary.default,
          },
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: isEnd ? 0 : -48,
          width: pxToRem(48),
          height: '100%',
          background: `linear-gradient(270deg, rgba(255, 255, 255, 0.75) -98.44%, rgba(255, 255, 255, 0.00) 85.94%)`,
        },
      },
      prevButton: {
        left: 0,
        width: isBeginning ? 0 : 48,
        userSelect: 'none',
        ...buttonCommonStyles,
        ...prevButtonStyles,
        '&:hover': {
          '& > svg': {
            backgroundColor: theme.other.button.content.color.terciary.default,
          },
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 47,
          width: isBeginning ? 0 : pxToRem(48),
          height: '100%',
          background: `linear-gradient(270deg, rgba(255, 255, 255, 0.75) -98.44%, rgba(255, 255, 255, 0.00) 85.94%)`,
        },
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

export default SwiperStyles;
export { SwiperStyles };

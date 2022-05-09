import { createStyles } from '@mantine/styles';
import { pxToRem, getPaddings, getFontExpressive, getFontProductive } from '../../theme.mixins';

export const SwiperStyles = createStyles(
  (
    theme,
    { styles, slideStyles, buttonStyles, nextButtonStyles, prevButtonStyles, isBeginning, isEnd }
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
        backgroundColor: theme.colors.ui03,
      },
    };

    return {
      root: {
        '.swiper': {
          backgroundColor: theme.colors.mainWhite,
          paddingLeft: !isBeginning ? 64 : 0,
          paddingRight: !isEnd ? 64 : 0,
          transition: 'all 0.3s ease-in-out',
          ...styles,
        },
        '.swiper-slide': {
          height: '100%',
          ...slideStyles,
        },
      },
      nextButton: {
        right: 0,
        width: !isEnd ? 48 : 0,
        ...buttonCommonStyles,
        ...nextButtonStyles,
      },
      prevButton: {
        left: 0,
        width: !isBeginning ? 48 : 0,
        ...buttonCommonStyles,
        ...prevButtonStyles,
      },
      selectWrapper: {
        height: '100%',
        width: '100%',
      },
    };
  }
);

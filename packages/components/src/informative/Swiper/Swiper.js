import { Box } from '@mantine/core';
import { isFunction } from 'lodash';
import { Navigation } from 'swiper';
import { SwiperStyles } from './Swiper.styles';
import React, { useState } from 'react';
import { NextElement, PrevElement } from './NavigationElements';
import { Swiper as SwiperComp, SwiperSlide } from 'swiper/react/swiper-react';
import { SWIPER_DEFAULT_PROPS, SWIPER_PROP_TYPES } from './Swiper.constants';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';

const Swiper = ({
  children,
  variant,
  breakAt,
  selectable,
  onSelectIndex,
  styles,
  slideStyles,
  buttonStyles,
  nextButtonStyles,
  prevButtonStyles,
  ...props
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const onSelectIndexHandler = (index) => {
    isFunction(onSelectIndex) && onSelectIndex(index);
  };

  const getSwiperSlides = () => {
    return children.map((child, index) => {
      return (
        <SwiperSlide key={`slide${index}`}>
          {selectable ? (
            <Box className={classes.selectWrapper} onClick={() => onSelectIndexHandler(index)}>
              {child}
            </Box>
          ) : (
            child
          )}
        </SwiperSlide>
      );
    });
  };

  const { classes, cx } = SwiperStyles(
    { styles, slideStyles, buttonStyles, nextButtonStyles, prevButtonStyles, isBeginning, isEnd },
    { name: 'Swiper' }
  );
  return (
    <Box className={classes.root}>
      <SwiperComp
        modules={[Navigation]}
        breakpoints={breakAt}
        shortSwipes={false}
        longSwipesMs={100}
        longSwipesRatio={0.3}
        navigation={{
          nextEl: classes.nextButton,
          prevEl: classes.prevButton,
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onResize={(swiper) => {
          if (isBeginning !== swiper.isBeginning) setIsBeginning(swiper.isBeginning);
          if (isEnd !== swiper.isEnd) setIsEnd(swiper.isEnd);
        }}
      >
        {getSwiperSlides()}
        {<PrevElement className={classes.prevButton} />}
        {<NextElement className={classes.nextButton} />}
      </SwiperComp>
    </Box>
  );
};

Swiper.defaultProps = SWIPER_DEFAULT_PROPS;
Swiper.propTypes = SWIPER_PROP_TYPES;

export { Swiper };

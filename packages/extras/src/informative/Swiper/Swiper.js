/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { isFunction } from 'lodash';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper as SwiperComp, SwiperSlide } from 'swiper/react';
import { Box } from '@bubbles-ui/components';
import { SwiperStyles } from './Swiper.styles';
import { NextElement } from './NavigationElements/NextElement';
import { PrevElement } from './NavigationElements/PrevElement';
import { SWIPER_DEFAULT_PROPS, SWIPER_PROP_TYPES } from './Swiper.constants';

const Swiper = ({
  children,
  breakAt,
  selectable,
  deselectable,
  disableSelectedStyles,
  onSelectIndex,
  styles,
  slideStyles,
  buttonStyles,
  nextButtonStyles,
  prevButtonStyles,
  nextButtonAriaLabel,
  prevButtonAriaLabel,
  useAria,
  className,
  spaceBetween,
  watchOverflow,
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const onSelectIndexHandler = (index) => {
    let shouldUpdate = false;
    let newIndex;
    if (selectedIndex === index && deselectable) {
      newIndex = null;
      shouldUpdate = true;
    } else if (selectedIndex !== index) {
      newIndex = index;
      shouldUpdate = true;
    }

    if (shouldUpdate) {
      setSelectedIndex(newIndex);
      if (isFunction(onSelectIndex)) {
        onSelectIndex(newIndex);
      }
    }
  };

  const { classes, cx } = SwiperStyles(
    { slideStyles, buttonStyles, nextButtonStyles, prevButtonStyles, isBeginning, isEnd },
    { name: 'Swiper' },
  );

  const getSwiperSlides = () =>
    children.map((child, index) => {
      const isSelected = selectedIndex === index;
      return (
        <SwiperSlide key={`slide${index}`}>
          {selectable ? (
            <Box
              className={cx(
                classes.selectWrapper,
                isSelected && !disableSelectedStyles ? classes.selectedSlide : '',
              )}
              onClick={() => onSelectIndexHandler(index)}
            >
              {child}
            </Box>
          ) : (
            child
          )}
        </SwiperSlide>
      );
    });

  return (
    <Box className={cx(classes.root, className)} style={styles}>
      <SwiperComp
        modules={[Navigation]}
        breakpoints={breakAt}
        shortSwipes={false}
        longSwipesMs={100}
        longSwipesRatio={0.3}
        spaceBetween={spaceBetween}
        watchOverflow={watchOverflow}
        navigation={{
          nextEl: classes.nextButton,
          prevEl: classes.prevButton,
        }}
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
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
        {
          <PrevElement
            className={classes.prevButton}
            useAria={useAria}
            ariaLabel={prevButtonAriaLabel}
          />
        }
        {
          <NextElement
            className={classes.nextButton}
            useAria={useAria}
            ariaLabel={nextButtonAriaLabel}
          />
        }
      </SwiperComp>
    </Box>
  );
};

Swiper.defaultProps = SWIPER_DEFAULT_PROPS;
Swiper.propTypes = SWIPER_PROP_TYPES;

export { Swiper };
export default Swiper;

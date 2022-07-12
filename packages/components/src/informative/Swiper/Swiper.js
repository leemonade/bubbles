import React, { useState } from 'react';
import { isFunction } from 'lodash';
import { Navigation } from 'swiper';
import { Swiper as SwiperComp, SwiperSlide } from 'swiper/react';
import { Box } from '../../layout';
import { SwiperStyles } from './Swiper.styles';
import { NextElement, PrevElement } from './NavigationElements';
import { SWIPER_DEFAULT_PROPS, SWIPER_PROP_TYPES } from './Swiper.constants';
import 'swiper/css';
import 'swiper/css/navigation';

const Swiper = ({
  children,
  variant,
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
  ...props
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
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
      isFunction(onSelectIndex) && onSelectIndex(newIndex);
    }
  };

  const getSwiperSlides = () => {
    return children.map((child, index) => {
      const isSelected = selectedIndex === index;
      return (
        <SwiperSlide key={`slide${index}`}>
          {selectable ? (
            <Box
              className={cx(
                classes.selectWrapper,
                isSelected && !disableSelectedStyles ? classes.selectedSlide : ''
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
  };

  const { classes, cx } = SwiperStyles(
    { slideStyles, buttonStyles, nextButtonStyles, prevButtonStyles, isBeginning, isEnd },
    { name: 'Swiper' }
  );
  return (
    <Box className={cx(classes.root, className)} style={styles}>
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

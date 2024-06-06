import React, { forwardRef } from 'react';
import { Slider as MantineSlider } from '@mantine/core';
import { SliderStyles } from './Slider.styles';
import { SLIDER_DEFAULT_PROPS, SLIDER_PROP_TYPES } from './Slider.constants';

const Slider = forwardRef(({ ...props }, ref) => {
  const { classes } = SliderStyles({}, { name: 'Slider' });

  return <MantineSlider {...props} ref={ref} classNames={classes} />;
});

Slider.displayName = 'Slider';

Slider.defaultProps = SLIDER_DEFAULT_PROPS;
Slider.propTypes = SLIDER_PROP_TYPES;

export { Slider };

import React, { forwardRef} from 'react';
import PropTypes from 'prop-types';
import { ColorPicker as MantineColorPicker, DEFAULT_THEME } from '@mantine/core';
import { ColorPickerStyles } from './ColorPicker.styles';
import { width } from 'dom-helpers';

export const FORMAT_COLOR_PICKER = ['hex', 'rgba', 'rgb', 'hsl', 'hsla'];
export const SWATCHES_COLOR_PICKER = [...DEFAULT_THEME.colors.dark, ...DEFAULT_THEME.colors.violet, ...DEFAULT_THEME.colors.blue];

export const ColorPicker = forwardRef(
  (
    {
    format= 'hex',
    color= '#000',
    withPicker= true,
    withswatches= true,
    ...props
    },
  ) => {
    
    const { classes, cx } = ColorPickerStyles({});

    return <MantineColorPicker 
      {...props} 
      
      format={format}
      swatchesPerRow={10} 
      classNames={classes} 
      withPicker={withPicker}
      swatches={withswatches ? SWATCHES_COLOR_PICKER: null}
    />;
  }
);

ColorPicker.propTypes = {
  format: PropTypes.oneOf(FORMAT_COLOR_PICKER),
  withPicker: PropTypes.bool,
  withswatches: PropTypes.bool,
};



import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box, ColorSwatch as MantineColorSwatch } from '@mantine/core';
import { ColorSwatchStyles } from './ColorSwatch.styles';

export const ColorSwatch = forwardRef(
  (
    { component = 'button', type = 'button', color, actived, className, spacing = 2, ...props },
    ref
  ) => {
    const { classes, cx } = ColorSwatchStyles({ actived });

    return (
      <>
        <MantineColorSwatch
          color={color}
          aria-label={color}
          tabIndex={0}
          {...props}
          className={`${className} ${classes.root}`}
        />
      </>
    );
  }
);

ColorSwatch.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  actived: PropTypes.bool,
  spacing: PropTypes.number,
};

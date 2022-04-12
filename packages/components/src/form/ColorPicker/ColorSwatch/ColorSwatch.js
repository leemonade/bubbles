import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ColorSwatch as MantineColorSwatch } from '@mantine/core';
import { ColorSwatchStyles } from './ColorSwatch.styles';

export const ColorSwatch = forwardRef(
  (
    {
      component = 'button',
      type = 'button',
      color,
      actived,
      className,
      spacing = 2,
      plain,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = ColorSwatchStyles({ actived, plain });

    return (
      <MantineColorSwatch
        ref={ref}
        {...props}
        color={color}
        aria-label={color}
        tabIndex={0}
        className={cx(className, classes.root)}
      />
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

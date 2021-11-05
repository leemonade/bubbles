import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button as MantineButton } from '@mantine/core';
import { IconButtonSStyles } from './IconButtonS.styles';

export const ICON_BUTTONS_SIZES = ['xs', 'sm'];
export const ICON_BUTTONS_VARIANTS = ['default'];
export const ICON_BUTTONS_COLORS = ['positive', 'negative'];

export const IconButtonS = forwardRef(
  (
    {
      as,
      color: colorProp = 'positive',
      size = 'sm',
      variant: variantProp = 'default',
      rounded = false, 
      sx,
      iconOnly = true,
      styles,
      className,
      classNames,
      ...props
    },
    ref
  ) => {
    const radius = rounded ? 'xl' : 'xs';
    const color = ICON_BUTTONS_COLORS.includes(colorProp) ? colorProp : 'positive';
    const variant = ICON_BUTTONS_VARIANTS.includes(variantProp) ? variantProp : 'default';
    const { classes } = IconButtonSStyles({ color, size });

    return (
      <MantineButton
        {...props}
        component={as}
        variant={variant}
        radius={radius}
        iconOnly={false}
        size={size} 
        className={classes.root}
        ref={ref}
      />
    );
  }
);

IconButtonS.propTypes = {
  size: PropTypes.oneOf(ICON_BUTTONS_SIZES),
  color: PropTypes.oneOf(ICON_BUTTONS_COLORS),
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf(ICON_BUTTONS_VARIANTS),
  //iconOnly: PropTypes.bool,
  // Adds icon before buttonS label
  leftIcon: PropTypes.node,
};

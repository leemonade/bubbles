import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button as MantineButton } from '@mantine/core';
 import { IconButtonStyles } from './IconButton.styles';

export const ICON_BUTTON_SIZES = ['xs', 'sm'];

export const IconButton = forwardRef(
  (
    {
      as, 
      size = 'sm', 
      rounded = false, 
      iconOnly = false,
      sx,
      styles,
      className,
      classNames,
      ...props
    },
    ref
  ) => {
    const radius = rounded ? 'xl' : 'xs';

    return (
      <MantineButton
        {...props}
        component={as} 
        radius={radius} 
        size={size}
        styles={(theme) => IconButtonStyles(theme, { size, iconOnly })}
        ref={ref}
      />
    );
  }
);

IconButton.propTypes = {
  size: PropTypes.oneOf(ICON_BUTTON_SIZES), 
  rounded: PropTypes.bool,
  iconOnly: PropTypes.bool,
  // Adds icon before button label

  leftIcon: PropTypes.node,

  // Adds icon after button label,
   rightIcon: PropTypes.node,
 
};

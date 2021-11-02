import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button as MantineButton } from '@mantine/core';
import { ButtonStyles } from './Button.styles';

export const BUTTON_SIZES = ['xs', 'sm'];
export const BUTTON_VARIANTS = ['filled', 'outline', 'link'];
export const BUTTON_COLORS = ['primary', 'secondary', 'ghost', 'light'];

export const Button = forwardRef(
  (
    {
      as,
      color: colorProp = 'primary',
      size = 'sm',
      variant: variantProp = 'filled',
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
    const color = BUTTON_COLORS.includes(colorProp) ? colorProp : 'primary';
    const variant = BUTTON_VARIANTS.includes(variantProp) ? variantProp : 'filled';

    return (
      <MantineButton
        {...props}
        component={as}
        variant={variant}
        radius={radius}
        size={size}
        styles={(theme) => ButtonStyles(theme, { color, size, iconOnly })}
        ref={ref}
      />
    );
  }
);

Button.propTypes = {
  size: PropTypes.oneOf(BUTTON_SIZES),
  color: PropTypes.oneOf(BUTTON_COLORS),
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  rounded: PropTypes.bool,
  // Adds icon before button label
  leftIcon: PropTypes.node,

  // Adds icon after button label,
  rightIcon: PropTypes.node,

  // Sets button width to 100% of parent element
  fullWidth: PropTypes.bool,
};

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ActionIcon as MantineActionIcon } from '@mantine/core';
import { IconButtonStyles } from './IconButton.styles';

export const ICON_BUTTON_SIZES = ['xs', 'sm', 'md', 'lg'];
export const ICON_BUTTON_VARIANTS = ['default'];
export const ICON_BUTTON_COLORS = ['positive', 'negative', 'primary'];

export const IconButton = forwardRef(
  (
    {
      as,
      color: colorProp = 'positive',
      size = 'sm',
      variant: variantProp = 'default',
      rounded = false,
      sx,
      icon,
      styles,
      className,
      classNames,
      label,
      ...props
    },
    ref
  ) => {
    const radius = rounded ? 'xl' : 'xs';
    const color = ICON_BUTTON_COLORS.includes(colorProp) ? colorProp : 'positive';
    const variant = ICON_BUTTON_VARIANTS.includes(variantProp) ? variantProp : 'default';
    const { classes, cx } = IconButtonStyles({ color, size });

    return (
      <MantineActionIcon
        {...props}
        title={label}
        aria-label={label}
        component={as}
        variant={variant}
        radius={radius}
        leftIcon={icon}
        size={size}
        classNames={classes}
        ref={ref}
      />
    );
  }
);

IconButton.propTypes = {
  size: PropTypes.oneOf(ICON_BUTTON_SIZES),
  color: PropTypes.oneOf(ICON_BUTTON_COLORS),
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf(ICON_BUTTON_VARIANTS),
  //iconOnly: PropTypes.bool,
  // Adds icon before button label
  leftIcon: PropTypes.node,
};

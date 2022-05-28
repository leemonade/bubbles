import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import { ActionIcon as MantineActionIcon } from '@mantine/core';
import { IconButtonStyles } from './IconButton.styles';

export const ICON_BUTTON_SIZES = ['xs', 'sm', 'md', 'lg'];
export const ICON_BUTTON_VARIANTS = ['default', 'transparent'];
export const ICON_BUTTON_COLORS = ['positive', 'negative', 'primary'];

export const ICON_BUTTON_DEFAULT_PROPS = {
  size: 'sm',
  color: 'positive',
  rounded: false,
  variant: 'default',
  label: '',
};

export const IconButton = forwardRef(
  (
    {
      as,
      color: colorProp,
      size,
      variant: variantProp,
      rounded,
      sx,
      icon,
      styles,
      className,
      classNames,
      label,
      children,
      ...props
    },
    ref
  ) => {
    const radius = rounded ? 'xl' : 'xs';
    const color = ICON_BUTTON_COLORS.includes(colorProp)
      ? colorProp
      : ICON_BUTTON_DEFAULT_PROPS.color;
    const variant = ICON_BUTTON_VARIANTS.includes(variantProp)
      ? variantProp
      : ICON_BUTTON_DEFAULT_PROPS.variant;
    const { classes, cx } = IconButtonStyles({ color, size });

    return (
      <MantineActionIcon
        {...props}
        title={label}
        aria-label={label}
        component={as}
        variant={variant}
        radius={radius}
        size={size}
        classNames={classes}
        className={className}
        ref={ref}
      >
        {!isNil(icon) ? icon : children}
      </MantineActionIcon>
    );
  }
);

IconButton.defaultProps = ICON_BUTTON_DEFAULT_PROPS;

IconButton.propTypes = {
  size: PropTypes.oneOf(ICON_BUTTON_SIZES),
  color: PropTypes.oneOf(ICON_BUTTON_COLORS),
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf(ICON_BUTTON_VARIANTS),
  //iconOnly: PropTypes.bool,
  // Adds icon before button label
  icon: PropTypes.node,
};

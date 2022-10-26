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
  useAria: true,
};

export const IconButton = forwardRef(
  (
    {
      color: colorProp,
      size,
      variant: variantProp,
      rounded,
      sx,
      icon,
      styles,
      className,
      label,
      children,
      useAria,
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
    const { classes, cx } = IconButtonStyles({ color, size, variant });

    return (
      <MantineActionIcon
        {...props}
        title={label}
        aria-label={label}
        variant={variant}
        radius={radius}
        size={size}
        className={classes.root}
        ref={ref}
        role={useAria ? 'button' : undefined}
      >
        {!isNil(icon) ? icon : children}
      </MantineActionIcon>
    );
  }
);

IconButton.defaultProps = ICON_BUTTON_DEFAULT_PROPS;

IconButton.propTypes = {
  /** Controls the size */
  size: PropTypes.oneOf(ICON_BUTTON_SIZES),
  /** Controls the color */
  color: PropTypes.oneOf(ICON_BUTTON_COLORS),
  /** Controls if its rounded */
  rounded: PropTypes.bool,
  /** Controls the appearance */
  variant: PropTypes.oneOf(ICON_BUTTON_VARIANTS),
  /** Button label */
  label: PropTypes.string,
  /** Button icon */
  icon: PropTypes.node,
};

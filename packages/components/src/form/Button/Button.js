import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button as MantineButton } from '@mantine/core';
import { ButtonStyles } from './Button.styles';

export const BUTTON_SIZES = ['xs', 'sm'];
export const BUTTON_VARIANTS = ['default', 'outline', 'link'];
export const BUTTON_COLORS = ['primary', 'secondary', 'tertiary', 'negative', 'fatic'];
export const BUTTON_POSITIONS = ['center', 'right', 'left', 'apart'];

export const Button = forwardRef(
  (
    {
      as,
      color: colorProp = 'primary',
      size: sizeProp = 'sm',
      variant: variantProp = 'default',
      position: positionProp = 'center',
      rounded = false,
      iconOnly = false,
      leftIcon,
      rightIcon,
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
    const variant = BUTTON_VARIANTS.includes(variantProp) ? variantProp : 'default';
    const size = BUTTON_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const position = BUTTON_POSITIONS.includes(positionProp) ? positionProp : 'center';

    const { classes, cx } = ButtonStyles({ size, color, iconOnly, position, variant });

    return (
      <MantineButton
        {...props}
        component={as}
        variant={variant}
        radius={radius}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        size={size}
        classNames={classes}
        ref={ref}
      />
    );
  }
);

Button.propTypes = {
  /**
    The xs value is for buttons inside tables or information list.
    */
  size: PropTypes.oneOf(BUTTON_SIZES),
  /**
    Main actions use de primary color, the secondary color is for empahis buttons.
    */
  color: PropTypes.oneOf(BUTTON_COLORS),
  /**
    Main actions use de Default variation, the outline buttons is for  actions suggestion.
    For secondary actions use the button Link variation.
    */
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  /**
   Use rounded style with outline variation for  the  actions suggestion buttons
    */
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
  /** Adds icon before button label */
  leftIcon: PropTypes.node,
  /** Adds icon after button label, */
  rightIcon: PropTypes.node,
  /** Sets button width to 100% of parent element */
  fullWidth: PropTypes.bool,
  position: PropTypes.oneOf(BUTTON_POSITIONS),
};

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button as MantineButton } from '@mantine/core';
import { ButtonStyles } from './Button.styles';

export const BUTTON_SIZES = ['xs', 'sm', 'md'];
export const BUTTON_VARIANTS = ['filled', 'outline', 'link', 'light'];
export const BUTTON_COLORS = ['primary', 'secondary', 'tertiary', 'negative', 'fatic'];
export const BUTTON_POSITIONS = ['center', 'right', 'left', 'apart'];

export const BUTTON_DEFAULT_PROPS = {
  color: 'primary',
  size: 'md',
  variant: 'filled',
  position: 'center',
  rounded: false,
  iconOnly: false,
  loading: false,
  compact: false,
  fullWidth: false,
  disabled: false,
};

export const Button = forwardRef(
  (
    {
      as,
      color: colorProp,
      size: sizeProp,
      variant: variantProp,
      position: positionProp,
      rounded,
      iconOnly,
      leftIcon,
      rightIcon,
      sx,
      styles,
      className,
      classNames,
      compact,
      fullWidth,
      disabled,
      ...props
    },
    ref
  ) => {
    const radius = rounded ? 'xl' : 'xs';
    const color = BUTTON_COLORS.includes(colorProp) ? colorProp : BUTTON_DEFAULT_PROPS.color;
    const variant = BUTTON_VARIANTS.includes(variantProp)
      ? variantProp
      : BUTTON_DEFAULT_PROPS.variant;
    const size = BUTTON_SIZES.includes(sizeProp) ? sizeProp : BUTTON_DEFAULT_PROPS.size;
    const position = BUTTON_POSITIONS.includes(positionProp)
      ? positionProp
      : BUTTON_DEFAULT_PROPS.position;

    const { classes, cx } = ButtonStyles(
      {
        size,
        color,
        iconOnly,
        position,
        variant,
        compact,
        fullWidth,
        disabled,
      },
      { name: 'Button' }
    );
    const mantineVariant = useMemo(() => (variant === 'link' ? 'default' : variant), [variant]);

    return (
      <MantineButton
        {...props}
        ref={ref}
        component={as}
        variant={mantineVariant}
        radius={radius}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        size={size}
        classNames={classes}
        disabled={disabled}
      />
    );
  }
);

Button.defaultProps = BUTTON_DEFAULT_PROPS;

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
  compact: PropTypes.bool,
  disabled: PropTypes.bool,
};

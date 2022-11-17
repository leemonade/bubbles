import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button as MantineButton } from '@mantine/core';
import { ButtonStyles } from './Button.styles';
import { Box } from '../../layout';

export const BUTTON_SIZES = ['sm', 'md'];
export const BUTTON_VARIANTS = ['filled', 'outline'];
export const BUTTON_COLORS = ['primary', 'secondary', 'terciary', 'phatic'];
export const BUTTON_ICON_POSITION = ['right', 'left'];

export const BUTTON_DEFAULT_PROPS = {
  color: BUTTON_COLORS[0],
  size: BUTTON_SIZES[1],
  variant: BUTTON_VARIANTS[0],
  rounded: false,
  loading: false,
  fullWidth: false,
  disabled: false,
  useAria: true,
};

export const Button = forwardRef(
  (
    {
      children,
      color: colorProp,
      disabled,
      fullWidth,
      leftIcon,
      rightIcon,
      loading,
      size: sizeProp,
      variant: variantProp,
      rounded,
      type,
      uppercase,
      loaderPosition,
      loaderProps,
      styles,
      as,
      useAria,
      ariaLabel,
      compact, //UNUSED
      gradient, //UNUSED
      radius, //UNUSED
    },
    ref
  ) => {
    const color = BUTTON_COLORS.includes(colorProp) ? colorProp : BUTTON_DEFAULT_PROPS.color;
    const variant = BUTTON_VARIANTS.includes(variantProp)
      ? variantProp
      : BUTTON_DEFAULT_PROPS.variant;
    const size = BUTTON_SIZES.includes(sizeProp) ? sizeProp : BUTTON_DEFAULT_PROPS.size;

    const { classes } = ButtonStyles(
      {
        color,
        variant,
        size,
        rounded,
        fullWidth,
        disabled,
        styles,
      },
      { name: 'Button' }
    );

    return (
      <MantineButton
        ref={ref}
        component={as}
        children={children}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        classNames={classes}
        disabled={disabled}
        loading={loading}
        uppercase={uppercase}
        type={type}
        loaderPosition={loaderPosition}
        loaderProps={loaderProps}
        aria-label={ariaLabel}
        role={useAria ? 'button' : undefined}
      />
    );
  }
);

Button.defaultProps = BUTTON_DEFAULT_PROPS;

Button.propTypes = {
  /** Controls the button size. */
  size: PropTypes.oneOf(BUTTON_SIZES),
  /** Controls the button colors. */
  color: PropTypes.oneOf(BUTTON_COLORS),
  /** Controls the button variants. */
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  /** Controls the border radius */
  rounded: PropTypes.bool,
  /** Controls if is loading */
  loading: PropTypes.bool,
  /** Adds icon before button label */
  leftIcon: PropTypes.node,
  /** Adds icon after button label, */
  rightIcon: PropTypes.node,
  /** Sets button width to 100% of parent element */
  fullWidth: PropTypes.bool,
  /** Controls if the button is compact */
  compact: PropTypes.bool,
  /** Controls the disabled state */
  disabled: PropTypes.bool,
  /** Controls if Button uses aria role */
  useAria: PropTypes.bool,
  /** Aria label for button */
  ariaLabel: PropTypes.string,
};

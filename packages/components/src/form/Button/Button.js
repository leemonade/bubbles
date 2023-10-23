import React, { forwardRef } from 'react';
import { Button as MantineButton } from '@mantine/core';
import { ButtonStyles } from './Button.styles';
import {
  BUTTON_DEFAULT_PROPS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  BUTTON_COLORS,
  BUTTON_PROP_TYPES,
} from './Button.constants';

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
      textAlign,
      compact, //UNUSED
      gradient, //UNUSED
      radius, //UNUSED
      ...props
    },
    ref
  ) => {
    const color = BUTTON_COLORS.includes(colorProp) ? colorProp : BUTTON_DEFAULT_PROPS.color;
    const variant = BUTTON_VARIANTS.includes(variantProp)
      ? variantProp
      : BUTTON_DEFAULT_PROPS.variant;
    const size = BUTTON_SIZES.includes(sizeProp) ? sizeProp : BUTTON_DEFAULT_PROPS.size;
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!rightIcon;

    const { classes } = ButtonStyles(
      {
        color,
        variant,
        size,
        rounded,
        fullWidth,
        disabled,
        textAlign,
        styles,
        hasLeftIcon,
        hasRightIcon,
      },
      { name: 'Button' }
    );

    return (
      <MantineButton
        {...props}
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

Button.propTypes = BUTTON_PROP_TYPES;

import React, { forwardRef } from 'react';
import { Input as MantineInput } from '@mantine/core';
import { InputStyles } from './Input.styles';

export const INPUT_SIZES = ['sm', 'md'];
export const Input = forwardRef(
  (
    {
      radius,
      variant,
      icon,
      rightSection = null,
      invalid,
      disabled,
      size: sizeProp = 'md',
      autoComplete = 'off',
      classNames = {},
      ...props
    },
    ref
  ) => {
    const hasIcon = !!icon;
    const size = INPUT_SIZES.includes(sizeProp) ? sizeProp : 'md';
    const { classes, cx } = InputStyles({ size, disabled, hasIcon });

    return (
      <MantineInput
        {...props}
        ref={ref}
        // variant={variant}
        // size={size}
        invalid={invalid}
        icon={icon}
        disabled={disabled}
        rightSection={rightSection}
        classNames={{ ...classes, input: cx(classes.input, classNames.input) }}
        autoComplete={autoComplete}
      />
    );
  }
);

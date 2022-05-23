import React, { forwardRef } from 'react';
import { Input as MantineInput } from '@mantine/core';
import { InputStyles } from './Input.styles';

export const INPUT_SIZES = ['xs', 'sm'];
export const Input = forwardRef(
  (
    {
      radius,
      variant,
      icon,
      rightSection = null,
      size: sizeProp = 'sm',
      autoComplete = 'off',
      className,
      ...props
    },
    ref
  ) => {
    const size = INPUT_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const { classes, cx } = InputStyles({ size, variant });

    return (
      <MantineInput
        {...props}
        icon={icon}
        // variant={variant}
        ref={ref}
        size={size}
        rightSection={rightSection}
        classNames={classes}
        autoComplete={autoComplete}
      />
    );
  }
);

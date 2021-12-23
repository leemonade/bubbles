import React, { forwardRef } from 'react';
import { Input as MantineInput } from '@mantine/core';
import { InputStyles } from './Input.styles';

export const INPUT_SIZES = ['xs', 'sm'];
export const Input = forwardRef(
  ({ radius, variant, icon, rightSection = null, size: sizeProp = 'sm', ...props }, ref) => {
    const size = INPUT_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const { classes } = InputStyles({ size });

    return (
      <MantineInput
        {...props}
        ref={ref}
        size={size}
        rightSection={rightSection}
        classNames={classes}
      />
    );
  }
);

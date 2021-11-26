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
      showRightSection = false,
      rightSection,
      size: sizeProp = 'sm',
      ...props
    },
    ref
  ) => {
    const size = INPUT_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const { classes, cx } = InputStyles({ size });
    const buttonRightSection = showRightSection ? rightSection : undefined;

    return (
      <MantineInput
        {...props}
        size={size}
        rightSection={buttonRightSection}
        classNames={{
          input: classes.input,
          rightSection: classes.rightSection,
        }}
      />
    );
  }
);

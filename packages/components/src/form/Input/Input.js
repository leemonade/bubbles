import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Input as MantineInput } from '@mantine/core';
import { InputStyles } from './Input.styles';

export const INPUT_SIZES = ['sm', 'md'];
const Input = forwardRef(
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
    ref,
  ) => {
    const hasIcon = !!icon;
    const size = INPUT_SIZES.includes(sizeProp) ? sizeProp : 'md';
    const { classes, cx } = InputStyles(
      { size, disabled, hasIcon, hasRightSection: !!rightSection },
      { name: 'Input' },
    );

    return (
      <MantineInput
        {...props}
        ref={ref}
        invalid={invalid}
        icon={icon}
        disabled={disabled}
        rightSection={rightSection}
        classNames={{ ...classes, input: cx(classes.input, classNames.input) }}
        autoComplete={autoComplete}
      />
    );
  },
);

Input.displayName = 'Input';
Input.propTypes = {
  size: PropTypes.oneOf(INPUT_SIZES),
  variant: PropTypes.any,
  radius: PropTypes.any,
  icon: PropTypes.node,
  rightSection: PropTypes.node,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  classNames: PropTypes.any,
};

export { Input };

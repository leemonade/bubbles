import React, { forwardRef } from 'react';
import { PasswordInput as MantinePasswordInput, Group, Text } from '@mantine/core';
import { InputError, INPUT_SIZES } from '../Input';
import { PasswordInputStyles } from './PasswordInput.styles';

export const PASSWORD_INPUT_SIZES = INPUT_SIZES;

const InputDescription = ({ className, message }) => {
  return <Text className={className}>{message}</Text>;
};

export const PasswordInput = forwardRef(
  ({ radius, label, description, error, size: sizeProp = 'sm', ...props }, ref) => {
    const size = PASSWORD_INPUT_SIZES.includes(sizeProp) ? sizeProp : 'sm';

    const { classes, cx } = PasswordInputStyles({ size });

    const customError = error ? <InputError classNames={classes} error={error} /> : undefined;

    if (props.hasOwnProperty('value')) {
      props.value = props.value || '';
    }

    return (
      <MantinePasswordInput
        {...props}
        ref={ref}
        description={<InputDescription className={classes.description} message={description} />}
        error={customError}
        label={label}
        classNames={classes}
      />
    );
  }
);

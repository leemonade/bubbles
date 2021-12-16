import React, { forwardRef } from 'react';
import { PasswordInput as MantinePasswordInput, Text } from '@mantine/core';
import { INPUT_SIZES } from '../Input';
import { PasswordInputStyles } from './PasswordInput.styles';
import { InputError } from '../InputError';
import { InputDescription } from '../InputDescription';

export const PASSWORD_INPUT_SIZES = INPUT_SIZES;

export const PasswordInput = forwardRef(
  ({ radius, label, description, error, size: sizeProp = 'sm', ...props }, ref) => {
    const size = PASSWORD_INPUT_SIZES.includes(sizeProp) ? sizeProp : 'sm';

    const { classes, cx } = PasswordInputStyles({ size });

    const customError = error ? <InputError message={error} /> : undefined;

    if (props.hasOwnProperty('value')) {
      props.value = props.value || '';
    }

    return (
      <MantinePasswordInput
        {...props}
        ref={ref}
        description={<InputDescription message={description} />}
        error={customError}
        label={label}
        classNames={classes}
      />
    );
  }
);

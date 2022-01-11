import React, { forwardRef, useMemo } from 'react';
import { PasswordInput as MantinePasswordInput } from '@mantine/core';
import { isNil } from 'lodash';
import { useId } from '@mantine/hooks';
import { InputWrapper, INPUT_WRAPPER_SIZES, INPUT_WRAPPER_ORIENTATIONS } from '../InputWrapper';
import { PasswordInputStyles } from './PasswordInput.styles';

export const PASSWORD_INPUT_SIZES = INPUT_WRAPPER_SIZES;
export const PASSWORD_INPUT_ORIENTATIONS = INPUT_WRAPPER_ORIENTATIONS;

const PasswordInput = forwardRef(
  (
    {
      radius, // Just to pick it up to not pass to props
      error,
      size,
      placeholder,
      ...props
    },
    ref
  ) => {
    const uuid = useId();

    const { classes, cx } = PasswordInputStyles({ size });

    return (
      <InputWrapper {...props} size={size} uuid={uuid} error={error}>
        <MantinePasswordInput
          ref={ref}
          id={uuid}
          size={size}
          placeholder={placeholder}
          classNames={classes}
          error={!isNil(error) && error != ''}
        />
      </InputWrapper>
    );
  }
);

export { PasswordInput };

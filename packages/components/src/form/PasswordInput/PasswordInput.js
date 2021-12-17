import React, { forwardRef } from 'react';
import { PasswordInput as MantinePasswordInput } from '@mantine/core';
import { isNil } from 'lodash';
import { INPUT_WRAPPER_ORIENTATION } from '../InputWrapper';
import { PasswordInputStyles } from './PasswordInput.styles';
import { InputDescription } from '../InputDescription';
import { InputError } from '../InputError';
import { INPUT_SIZES } from '../Input';

export const PASSWORD_INPUT_SIZES = INPUT_SIZES;
export const PASSWORD_INPUT_ORIENTATIONS = INPUT_WRAPPER_ORIENTATION;

const PasswordInput = forwardRef(
  (
    {
      radius,
      label,
      description,
      error,
      size: sizeProp = 'sm',
      orientation: orientationProp,
      ...props
    },
    ref
  ) => {
    const orientation = PASSWORD_INPUT_ORIENTATIONS.includes(orientationProp)
      ? orientationProp
      : 'vertical';
    const size = PASSWORD_INPUT_SIZES.includes(sizeProp) ? sizeProp : 'sm';

    if (props.hasOwnProperty('value')) {
      props.value = props.value || '';
    }

    const { classes, cx } = PasswordInputStyles({ size, orientation });

    return (
      <MantinePasswordInput
        {...props}
        ref={ref}
        description={!isNil(description) ? <InputDescription message={description} /> : null}
        error={!isNil(error) && error !== '' ? <InputError message={error} /> : null}
        label={label}
        classNames={classes}
      />
    );
  }
);

export { PasswordInput };

import React, { forwardRef } from 'react';
import { isNil } from 'lodash';
import { useId } from '@mantine/hooks';
import { Input } from '../Input';
import { InputWrapper, INPUT_WRAPPER_ORIENTATION, INPUT_WRAPPER_SIZES } from '../InputWrapper';

export const TEXT_INPUT_SIZES = INPUT_WRAPPER_SIZES;
export const TEXT_INPUT_ORIENTATION = INPUT_WRAPPER_ORIENTATION;

export const TextInput = forwardRef(
  ({ value, error, size, placeholder, rightSection, ...props }, ref) => {
    const uuid = useId();
    return (
      <InputWrapper {...props} uuid={uuid} size={size} error={error}>
        <Input
          id={uuid}
          ref={ref}
          size={size}
          value={value}
          placeholder={placeholder}
          rightSection={rightSection}
          invalid={!isNil(error) && error != ''}
        />
      </InputWrapper>
    );
  }
);

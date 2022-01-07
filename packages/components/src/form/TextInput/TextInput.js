import React, { forwardRef } from 'react';
import { isNil } from 'lodash';
import { useId } from '@mantine/hooks';
import { Input } from '../Input';
import { INPUT_WRAPPER_ORIENTATION, INPUT_WRAPPER_SIZES, InputWrapper } from '../InputWrapper';

export const TEXT_INPUT_SIZES = INPUT_WRAPPER_SIZES;
export const TEXT_INPUT_ORIENTATION = INPUT_WRAPPER_ORIENTATION;

export const TEXT_INPUT_DEFAULT_PROPS = {
  onChange: () => {},
};

export const TextInput = forwardRef(
  (
    {
      error,
      size,
      placeholder,
      rightSection,
      name,
      value,
      onBlur,
      onChange,
      defaultValue,
      disabled,
      ...props
    },
    ref
  ) => {
    const uuid = useId();
    return (
      <InputWrapper {...props} uuid={uuid} size={size} error={error}>
        <Input
          id={uuid}
          ref={ref}
          size={size}
          name={name}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          defaultValue={defaultValue || ''}
          value={value}
          placeholder={placeholder}
          rightSection={rightSection}
          invalid={!isNil(error) && error != ''}
        />
      </InputWrapper>
    );
  }
);

TextInput.defaultProps = TEXT_INPUT_DEFAULT_PROPS;

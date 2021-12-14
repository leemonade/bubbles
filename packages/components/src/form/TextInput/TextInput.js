import React, { forwardRef } from 'react';
import { InputWrapper, INPUT_WRAPPER_ORIENTATION, INPUT_WRAPPER_SIZES } from '../InputWrapper';

export const TEXT_INPUT_SIZES = INPUT_WRAPPER_SIZES;
export const TEXT_INPUT_ORIENTATION = INPUT_WRAPPER_ORIENTATION;

export const TextInput = forwardRef((props, ref) => {
  return <InputWrapper {...props} ref={ref} as="input" />;
});

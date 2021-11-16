import React, { forwardRef } from 'react'; 
import { InputWrapper } from '../InputWrapper/InputWrapper';

export const TINPUT_SIZES = ['xs', 'sm'];
export const TINPUT_ORIENTATION = ['horizontal', 'vertical'];

export const TextInput = forwardRef(
  (props, ref ) => {
    
    return <InputWrapper {...props} ref={ref} as="input" />;
  }
);


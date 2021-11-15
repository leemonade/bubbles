import React, { forwardRef } from 'react';
import { InputWrapper } from '../InputWrapper/InputWrapper';

export const TAINPUT_ORIENTATION = ['horizontal', 'vertical'];




export const Textarea = forwardRef(
  (props, ref ) => {
    
    return <InputWrapper {...props} ref={ref} as="textarea" />;
  }
);

import React from 'react';
import { InputWrapper, WINPUT_SIZES } from './InputWrapper';
import { Input } from './../Input/Input';
import mdx from './InputWrapper.mdx';
import { children } from 'min-document';

export default {
  title: 'Form/Input/InputWrapper',
  parameters: {
    component: InputWrapper,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: { options: WINPUT_SIZES, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return (
    <InputWrapper {...props}>  
     <Input></Input>
    </InputWrapper>
  );
};

export const DefaultInputWrapper = Template.bind({});

DefaultInputWrapper.args = { 
  label: 'Input wraper',
  description: 'Password must include at least one letter, number and special character',
  required: true, 
  error: 'Password must include at least one letter', 
};

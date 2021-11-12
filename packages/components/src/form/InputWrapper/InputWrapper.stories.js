import React from 'react';
import { InputWrapper, WINPUT_SIZES, WINPUT_ORIENTATION } from './InputWrapper';
import { Input } from './../Input/Input';
import mdx from './InputWrapper.mdx'; 

export default {
  title: 'Form/Input/InputWrapper',
  parameters: {
    component: InputWrapper,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    orientation: { options: WINPUT_ORIENTATION, control: { type: 'select' } },
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
  orientation: 'vertical',
  description: 'Password must include at least one letter, number and special character',
  required: true,
  error: 'Password must include at least one letter',
};

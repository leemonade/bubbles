import React from 'react';
import { InputWrapper, WINPUT_SIZES, WINPUT_ORIENTATION, WINPUT_AS } from './InputWrapper';
import { Input, INPUT_SIZES } from './../Input/Input';
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
    size: { options: INPUT_SIZES, control: { type: 'select' } },
    orientation: { options: WINPUT_ORIENTATION, control: { type: 'select' } },
    as: { options: WINPUT_AS, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return (
    <InputWrapper {...props} />
  );
};

export const DefaultInputWrapper = Template.bind({});

DefaultInputWrapper.args = {
  label: 'Input wraper',
  orientation: 'vertical',
  as: 'input',
  size:'sm',
  description: 'Password must include at least one letter, number and special character',
  required: true,
  error: 'Password must include at least one letter',
};

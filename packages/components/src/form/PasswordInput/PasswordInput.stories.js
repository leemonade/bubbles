import React from 'react';
import { PasswordInput, PINPUT_SIZES } from './PasswordInput';
import mdx from './PasswordInput.mdx';

export default {
  title: 'Form/Input/PasswordInput',
  parameters: {
    component: PasswordInput,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: { options: PINPUT_SIZES, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return <PasswordInput {...props}/>;
};

export const DefaultPasswordInput = Template.bind({});

DefaultPasswordInput.args = {
  size: 'sm',
  placeholder: 'Password',
  label: 'Password',
  description: 'Password must include at least one letter, number and special character',
  required: true, 
  error: 'Password must include at least one letter',
};

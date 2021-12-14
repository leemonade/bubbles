import React from 'react';
import { PasswordInput, PASSWORD_INPUT_SIZES } from './PasswordInput';
import mdx from './PasswordInput.mdx';

export default {
  title: 'Molecules/Form/PasswordInput',
  parameters: {
    component: PasswordInput,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: { options: PASSWORD_INPUT_SIZES, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return <PasswordInput {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  placeholder: 'Password',
  label: 'Password',
  description: 'Password must include at least one letter, number and special character',
  required: true,
  error: 'Password must include at least one letter',
};

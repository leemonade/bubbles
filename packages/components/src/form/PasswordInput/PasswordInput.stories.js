import React from 'react';
import { Box } from '../../layout';
import {
  PasswordInput,
  PASSWORD_INPUT_SIZES,
  PASSWORD_INPUT_ORIENTATIONS,
  PASSWORD_INPUT_DEFAULT_PROPS,
} from './PasswordInput';
import mdx from './PasswordInput.mdx';

export default {
  title: 'BB1/PasswordInput',
  parameters: {
    component: PasswordInput,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: { options: PASSWORD_INPUT_SIZES, control: { type: 'select' } },
    orientation: { options: PASSWORD_INPUT_ORIENTATIONS, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return <PasswordInput {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...PASSWORD_INPUT_DEFAULT_PROPS,
  placeholder: 'Password',
  label: 'Password',
  description: 'Password must include at least one letter, number and special character',
  required: true,
  error: 'Password must include at least one letter',
};

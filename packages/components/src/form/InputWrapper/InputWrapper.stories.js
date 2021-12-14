import React from 'react';
import {
  InputWrapper,
  INPUT_WRAPPER_SIZES,
  INPUT_WRAPPER_ORIENTATION,
  INPUT_WRAPPER_AS,
} from './InputWrapper';
import mdx from './InputWrapper.mdx';

export default {
  title: 'Molecules/Form/InputWrapper',
  parameters: {
    component: InputWrapper,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: { options: INPUT_WRAPPER_SIZES, control: { type: 'select' } },
    orientation: { options: INPUT_WRAPPER_ORIENTATION, control: { type: 'select' } },
    as: { options: INPUT_WRAPPER_AS, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return <InputWrapper {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Input wraper',
  orientation: 'vertical',
  as: 'input',
  size: 'sm',
  description: 'Password must include at least one letter, number and special character',
  required: true,
  error: 'Password must include at least one letter',
};

import React from 'react';
import { DoneCircleIcon } from '@bubbles/icons/outline';
import { Input, INPUT_SIZES } from './Input';
import mdx from './Input.mdx';

export default {
  title: 'Atoms/Form/Input',
  parameters: {
    component: Input,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: { options: INPUT_SIZES, control: { type: 'select' } },
  },
};

const Template = (props) => {
  return <Input {...props} placeholder="Placeholder" rightSection={<DoneCircleIcon />} />;
};
export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  invalid: false,
  disabled: false,
  showRightSection: false,
};

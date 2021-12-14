import React from 'react';
import { XCircleIcon } from '@heroicons/react/solid';
import { Group, Container, Divider, Box } from '@mantine/core';
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
  return (
    <Input
      {...props}
      placeholder="Placeholder"
      rightSection={<XCircleIcon style={{ height: '1.2rem' }} />}
    />
  );
};
export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  invalid: false,
  disabled: false,
  showRightSection: false,
};

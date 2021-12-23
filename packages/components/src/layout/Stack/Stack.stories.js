import React from 'react';
import { Box } from '@mantine/core';
import { Stack, DEFAULT_PROPS, STACK_DIRECTIONS } from './Stack';
import mdx from './Stack.mdx';

export default {
  title: 'Atoms/Layout/Stack',
  parameters: {
    component: Stack,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
    },
  },
  argTypes: {
    direction: { control: { type: 'select', options: STACK_DIRECTIONS } },
  },
};

const Template = ({ children, ...props }) => {
  return <Stack {...props}>{children}</Stack>;
};

export const Playground = Template.bind({});

Playground.args = {
  children: (
    <>
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
    </>
  ),
  ...DEFAULT_PROPS,
};

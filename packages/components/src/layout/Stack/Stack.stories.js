import React from 'react';
import { Box } from '@mantine/core';
import {
  Stack,
  DEFAULT_PROPS,
  STACK_DIRECTIONS,
  STACK_WRAP,
  STACK_ALIGN_CONTENT,
  STACK_JUSTIFY_CONTENT,
  STACK_ALIGN_ITEMS,
} from './Stack';
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
    direction: { control: { type: 'select' }, options: STACK_DIRECTIONS },
    wrap: { control: { type: 'select' }, options: STACK_WRAP },
    alignContent: { control: { type: 'select' }, options: STACK_ALIGN_CONTENT },
    justifyContent: { control: { type: 'select' }, options: STACK_JUSTIFY_CONTENT },
    alignItems: { control: { type: 'select' }, options: STACK_ALIGN_ITEMS },
    fullWidth: { control: 'boolean' },
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

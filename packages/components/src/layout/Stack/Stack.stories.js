import React from 'react';
import { Box } from '../Box';
import {
  Stack,
  STACK_ALIGN_CONTENT,
  STACK_ALIGN_ITEMS,
  STACK_DEFAULT_PROPS,
  STACK_DIRECTIONS,
  STACK_JUSTIFY_CONTENT,
  STACK_WRAP,
} from './Stack';
import mdx from './Stack.mdx';

export default {
  title: 'BB1/Stack',
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

const Template = ({ ...props }) => {
  return <Stack {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...STACK_DEFAULT_PROPS,
  children: [
    <Box style={{ padding: 5, background: 'red' }} noFlex>
      Element 1
    </Box>,
    <Box style={{ padding: 5, background: 'green' }}>Element 2</Box>,
    <Box style={{ padding: 5, background: 'yellow' }}>Element 3</Box>,
  ],
};

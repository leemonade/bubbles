import React from 'react';
import { Box } from '@mantine/core';
import { Anchor } from './Anchor';
import mdx from './Anchor.mdx';

export default {
  title: 'Atoms/Navigation/Anchor',
  parameters: {
    component: Anchor,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <Anchor {...props}>{children}</Anchor>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
};

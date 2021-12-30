import React from 'react';
import { Box } from '@mantine/core';
import { Divider, DIVIDER_DEFAULT_PROPS } from './Divider';
import mdx from './Divider.mdx';

export default {
  title: 'Atoms/Layout/Divider',
  parameters: {
    component: Divider,
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
  return <Divider {...props}>{children}</Divider>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...DIVIDER_DEFAULT_PROPS,
};

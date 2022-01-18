import React from 'react';
import { Box } from '@mantine/core';
import { Popover, POPOVER_DEFAULT_PROPS } from './Popover';
import mdx from './Popover.mdx';

export default {
  title: 'Atoms/Overlay/Popover',
  parameters: {
    component: Popover,
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
  return <Popover {...props}>{children}</Popover>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...POPOVER_DEFAULT_PROPS,
};

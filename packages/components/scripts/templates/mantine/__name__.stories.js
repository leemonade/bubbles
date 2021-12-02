import React from 'react';
import { Box } from '@mantine/core';
import { __name__ } from './__name__';
import mdx from './__name__.mdx';

export default {
  title: '__folder__(pascalCase)/__name__',
  parameters: {
    component: __name__,
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
  return <__name__ {...props}>{children}</__name__>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
};

import React from 'react';
import { Box } from '@mantine/core';
import { TagifyInput } from './TagifyInput';
import mdx from './TagifyInput.mdx';

export default {
  title: 'Form/TagifyInput',
  parameters: {
    component: TagifyInput,
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
  return <TagifyInput {...props}>{children}</TagifyInput>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
};

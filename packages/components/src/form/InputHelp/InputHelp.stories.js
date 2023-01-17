import React from 'react';
import { Box } from '@mantine/core';
import { InputHelp } from './InputHelp';
import mdx from './InputHelp.mdx';

export default {
  title: 'BB1/InputHelp',
  parameters: {
    component: InputHelp,
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

const Template = ({ ...props }) => {
  return <InputHelp {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  message: 'Some help',
};

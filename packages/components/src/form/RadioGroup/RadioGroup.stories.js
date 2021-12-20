import React from 'react';
import { Box } from '@mantine/core';
import { RadioGroup } from './RadioGroup';
import mdx from './RadioGroup.mdx';

export default {
  title: 'Molecules/Form/RadioGroup',
  parameters: {
    component: RadioGroup,
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
  return <RadioGroup {...props}>{children}</RadioGroup>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
};

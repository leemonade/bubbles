import React from 'react';
import { Box } from '@mantine/core';
import { TimeInput, TIME_INPUT_DEFAULT_PROPS } from './TimeInput';
import mdx from './TimeInput.mdx';

export default {
  title: 'Molecules/Form/TimeInput',
  parameters: {
    component: TimeInput,
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
  return <TimeInput {...props}>{children}</TimeInput>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...TIME_INPUT_DEFAULT_PROPS,
};

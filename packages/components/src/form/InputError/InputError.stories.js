import React from 'react';
import { Box } from '@mantine/core';
import { InputError } from './InputError';
import mdx from './InputError.mdx';

export default {
  title: 'Atoms/Form/InputError',
  parameters: {
    component: InputError,
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
  return <InputError {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  message: 'Some errors',
};

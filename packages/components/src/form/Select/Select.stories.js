import React from 'react';
import { Box } from '@mantine/core';
import { Select } from './Select';
import mdx from './Select.mdx';

export default {
  title: 'Molecules/Form/Select',
  parameters: {
    component: Select,
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
  return <Select {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Your favorite framework/library',
  description: 'Hola Mundo',
  placeholder: 'Pick one',
  data: [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
  ],
  error: 'Descriptive text for error ',
};

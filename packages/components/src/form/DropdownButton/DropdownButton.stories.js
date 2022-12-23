import React from 'react';
import { Box } from '@mantine/core';
import { DropdownButton } from './DropdownButton';
import { DROPDOWN_BUTTON_DEFAULT_PROPS } from './DropdownButton.constants';
import mdx from './DropdownButton.mdx';

export default {
  title: 'Atoms/Form/DropdownButton',
  parameters: {
    component: DropdownButton,
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
  return <DropdownButton {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...DROPDOWN_BUTTON_DEFAULT_PROPS,
  children: 'Click me',
  data: [
    { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
    { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
    { label: 'Item 3', onClick: () => console.log('Item 3 clicked') },
  ],
};

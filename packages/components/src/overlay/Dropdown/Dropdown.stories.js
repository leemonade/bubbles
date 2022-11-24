import React from 'react';
import { Box } from '@mantine/core';
import { Dropdown } from './Dropdown';
import { DROPDOWN_DEFAULT_PROPS } from './Dropdown.constants';
import mdx from './Dropdown.mdx';

export default {
  title: 'Molecules/Overlay/Dropdown',
  parameters: {
    component: Dropdown,
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
  return <Dropdown {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...DROPDOWN_DEFAULT_PROPS,
};

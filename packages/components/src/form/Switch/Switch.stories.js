import React from 'react';
import { Box } from '@mantine/core';
import { Switch, SWITCH_SIZES } from './Switch';
import mdx from './Switch.mdx';

export default {
  title: 'Molecules/Form/Switch',
  parameters: {
    component: Switch,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    size: { options: SWITCH_SIZES, control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <Switch {...props}>{children}</Switch>;
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'md',
  label: 'Hello world',
};

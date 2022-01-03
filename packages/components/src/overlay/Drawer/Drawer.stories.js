import React from 'react';
import { Drawer, DRAWER_DEFAULT_PROPS } from './Drawer';
import mdx from './Drawer.mdx';

export default {
  title: 'Molecules/Overlay/Drawer',
  parameters: {
    component: Drawer,
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
  return <Drawer {...props}>{children}</Drawer>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...DRAWER_DEFAULT_PROPS,
};

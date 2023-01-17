import React from 'react';
import { Anchor, ANCHOR_DEFAULT_PROPS } from './Anchor';
import mdx from './Anchor.mdx';

export default {
  title: 'BB1/Anchor',
  parameters: {
    component: Anchor,
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
  return <Anchor {...props}>{children}</Anchor>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...ANCHOR_DEFAULT_PROPS,
  children: 'Hello World',
};

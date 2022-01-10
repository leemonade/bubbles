import React from 'react';
import { Box } from '@mantine/core';
import { Pager, PAGER_DEFAULT_PROPS, PAGER_DIRECTIONS } from './Pager';
import mdx from './Pager.mdx';

export default {
  title: 'Molecules/Navigation/Pager',
  parameters: {
    component: Pager,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    direction: { control: { type: 'select' }, options: PAGER_DIRECTIONS },
    onChange: { action: 'onChange' },
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <Pager {...props}>{children}</Pager>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...PAGER_DEFAULT_PROPS,
};

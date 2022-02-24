import React from 'react';
import { Box } from '@mantine/core';
import { Pager, PAGER_DEFAULT_PROPS, PAGER_DIRECTIONS, PAGER_VARIANTS } from './Pager';
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
    direction: { options: PAGER_DIRECTIONS, control: { type: 'select' } },
    variant: { options: PAGER_VARIANTS, control: { type: 'select' } },
    onChange: { action: 'onChange' },
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

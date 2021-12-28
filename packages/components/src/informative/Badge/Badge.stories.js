import React from 'react';
import { Box } from '@mantine/core';
import { Badge, BADGE_DEFAULT_PROPS, BADGE_SIZES } from './Badge';
import mdx from './Badge.mdx';

export default {
  title: 'Molecules/Informative/Badge',
  parameters: {
    component: Badge,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    size: { control: { type: 'select' }, options: BADGE_SIZES },
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <Badge {...props}>{children}</Badge>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...BADGE_DEFAULT_PROPS,
};

import React from 'react';
import { Box } from '@mantine/core';
import { ContentLegible, CONTENT_LEGIBLE_DEFAULT_PROPS } from './ContentLegible';
import mdx from './ContentLegible.mdx';

export default {
  title: 'BB1/ContentLegible',
  parameters: {
    component: ContentLegible,
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
  return <ContentLegible {...props}>{children}</ContentLegible>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...CONTENT_LEGIBLE_DEFAULT_PROPS,
};

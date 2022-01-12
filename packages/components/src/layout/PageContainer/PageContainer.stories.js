import React from 'react';
import { Box } from '@mantine/core';
import { PageContainer, PAGE_CONTAINER_DEFAULT_PROPS } from './PageContainer';
import mdx from './PageContainer.mdx';

export default {
  title: 'Atoms/Layout/PageContainer',
  parameters: {
    component: PageContainer,
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
  return <PageContainer {...props}>{children}</PageContainer>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...PAGE_CONTAINER_DEFAULT_PROPS,
};

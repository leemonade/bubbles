import React from 'react';
import { Box } from '@mantine/core';
import { LoadingOverlay, LOADING_OVERLAY_DEFAULT_PROPS } from './LoadingOverlay';
import mdx from './LoadingOverlay.mdx';

export default {
  title: 'Molecules/Overlay/LoadingOverlay',
  parameters: {
    component: LoadingOverlay,
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
  return <LoadingOverlay {...props}>{children}</LoadingOverlay>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...LOADING_OVERLAY_DEFAULT_PROPS,
};

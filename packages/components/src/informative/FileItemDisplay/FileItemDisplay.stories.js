import React from 'react';
import { Box } from '@mantine/core';
import { FileItemDisplay, FILE_ITEM_DISPLAY_DEFAULT_PROPS } from './FileItemDisplay';
import mdx from './FileItemDisplay.mdx';

export default {
  title: 'Atoms/Informative/FileItemDisplay',
  parameters: {
    component: FileItemDisplay,
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
  return <FileItemDisplay {...props}>{children}</FileItemDisplay>;
};

export const Playground = Template.bind({});

Playground.args = {
  filename: 'filename',
  description: '',
  metadata: {},
  filetype: '.pdf',
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...FILE_ITEM_DISPLAY_DEFAULT_PROPS,
};

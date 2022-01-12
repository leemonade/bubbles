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
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2?node-id=3639%3A28963',
    },
  },
  argTypes: {},
};

const Template = ({ children, ...props }) => {
  return <FileItemDisplay {...props}>{children}</FileItemDisplay>;
};

export const Playground = Template.bind({});

Playground.args = {
  filename: 'filename.pdf',
  description: '',
  metadata: {},
  ...FILE_ITEM_DISPLAY_DEFAULT_PROPS,
};

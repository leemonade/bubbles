import React from 'react';
import { Box } from '@mantine/core';
import { FileUpload } from './FileUpload';
import mdx from './FileUpload.mdx';
import { CloudUploadIcon } from '@bubbles-ui/icons/outline/';
import { MIME_TYPES } from '@mantine/dropzone';

export default {
  title: 'Molecules/Form/FileUpload',
  parameters: {
    component: FileUpload,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3639%3A28963',
    },
  },
  argTypes: {
    onDrop: { action: 'File dropped' },
    accept: { options: MIME_TYPES, control: { type: 'multi-select' } },
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <FileUpload {...props}>{children}</FileUpload>;
};

export const Playground = Template.bind({});

Playground.args = {
  icon: <CloudUploadIcon height={32} width={32}></CloudUploadIcon>,
  title: 'Click to browse your file',
  subtitle: 'or drop here a file from your computer',
  disabled: false,
  loading: false,
  multiple: true,
};

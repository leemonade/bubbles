import React from 'react';
import { Box } from '@mantine/core';
import { FileUpload, FILE_UPLOAD_DEFAULT_PROPS } from './FileUpload';
import mdx from './FileUpload.mdx';
import { MIME_TYPES } from '@mantine/dropzone';
import { CloudUploadIcon } from '@bubbles-ui/icons/outline';

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
    onChange: { action: 'File dropped' },
    accept: { options: MIME_TYPES, control: { type: 'multi-select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <FileUpload {...props}>{children}</FileUpload>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...FILE_UPLOAD_DEFAULT_PROPS,
  icon: <CloudUploadIcon height={32} width={32} />,
  title: 'Click to browse your file',
  subtitle: 'or drop here a file from your computer',
  errorMessage: { title: 'Error', message: 'File was rejected' },
};

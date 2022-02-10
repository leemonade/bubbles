import React from 'react';
import { FileIcon, FILE_ICON_DEFAULT_PROPS, FileTypeIcon } from './FileIcon';
import mdx from './FileIcon.mdx';

export default {
  title: 'Atoms/Misc/FileIcon',
  parameters: {
    component: FileIcon,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    fileType: { options: ['audio', 'video', 'image', 'noicon'], control: 'select' },
  },
};

const Template = ({ children, ...props }) => {
  return <FileIcon {...props}>{children}</FileIcon>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...FILE_ICON_DEFAULT_PROPS,
  size: 64,
  fileType: 'audio',
  color: '#fabada',
  label: 'Audio',
  fileExtension: 'mp3',
};

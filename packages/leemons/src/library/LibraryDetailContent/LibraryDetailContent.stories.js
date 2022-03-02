import React from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryDetailContent } from './LibraryDetailContent';
import { LIBRARY_DETAIL_CONTENT_DEFAULT_PROPS } from './LibraryDetailContent.constants';
import mdx from './LibraryDetailContent.mdx';

export default {
  title: 'leemons/Library/LibraryDetailContent',
  parameters: {
    component: LibraryDetailContent,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ children, ...props }) => {
  return <LibraryDetailContent {...props}>{children}</LibraryDetailContent>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_DETAIL_CONTENT_DEFAULT_PROPS,
  fileType: 'video',
  description:
    'We’ve always been told that the brain contains billions of neurons, which, of course, have an essential role in all the processes we do. But what is the role of the neurons in the brain?',
  metadata: [
    { label: 'Quality', value: '128kb' },
    { label: 'Format', value: 'mp3' },
    { label: 'Duration', value: '10 min' },
    { label: 'Transcript', value: 'Not available' },
  ],
  tags: ['Rome', 'Docu'],
};

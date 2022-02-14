import React from 'react';
import { Box, COLORS, FileIcon } from '@bubbles-ui/components';
import { LibraryDetail, LIBRARY_DETAIL_DEFAULT_PROPS } from './LibraryDetail';
import mdx from './LibraryDetail.mdx';

export default {
  title: 'leemons/Library/LibraryDetail',
  parameters: {
    component: LibraryDetail,
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
  return (
    <Box style={{ width: 360 }}>
      <LibraryDetail {...props}>{children}</LibraryDetail>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_DETAIL_DEFAULT_PROPS,
  fileType: 'video',
  description:
    'We’ve always been told that the brain contains billions of neurons, which, of course, have an essential role in all the processes…',
  metadata: [
    { label: 'Quality', value: '128kb' },
    { label: 'Format', value: 'mp3' },
    { label: 'Duration', value: '10 min' },
    { label: 'Transcript', value: 'Not available' },
  ],
  tags: ['Rome', 'Docu'],
  fileIcon: <FileIcon fileType={'audio'} size={64} color={COLORS.text06} />,
  cover:
    'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
  color: '#DC5571',
};

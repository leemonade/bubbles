import React from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryNavbar, LIBRARY_NAVBAR_DEFAULT_PROPS } from './LibraryNavbar';
import mdx from './LibraryNavbar.mdx';

export default {
  title: 'leemons/Library/LibraryNavbar',
  parameters: {
    component: LibraryNavbar,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2?node-id=6696%3A72630',
    },
  },
  argTypes: {},
};

const Template = ({ children, ...props }) => {
  return <LibraryNavbar {...props}>{children}</LibraryNavbar>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_NAVBAR_DEFAULT_PROPS,
  labels: {
    uploadButton: 'Upload or create',
  },
};

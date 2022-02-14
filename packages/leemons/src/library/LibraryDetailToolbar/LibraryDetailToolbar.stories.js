import React from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryDetailToolbar, LIBRARY_DETAIL_TOOLBAR_DEFAULT_PROPS } from './LibraryDetailToolbar';
import mdx from './LibraryDetailToolbar.mdx';

export default {
  title: 'leemons/Library/LibraryDetailToolbar',
  parameters: {
    component: LibraryDetailToolbar,
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
  return <LibraryDetailToolbar {...props}>{children}</LibraryDetailToolbar>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...LIBRARY_DETAIL_TOOLBAR_DEFAULT_PROPS,
};

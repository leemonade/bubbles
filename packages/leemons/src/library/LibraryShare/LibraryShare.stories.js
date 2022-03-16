import React from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryShare } from './LibraryShare';
import { LIBRARY_SHARE_DEFAULT_PROPS } from './LibraryShare.constants';
import mdx from './LibraryShare.mdx';

export default {
  title: 'Leemons/Library/LibraryShare',
  parameters: {
    component: LibraryShare,
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

const Template = ({ ...props }) => {
  return <LibraryShare {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...LIBRARY_SHARE_DEFAULT_PROPS,
};

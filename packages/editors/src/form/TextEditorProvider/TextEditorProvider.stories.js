import React, { useEffect, useState } from 'react';
import { TextEditorProvider } from './TextEditorProvider';
// import mdx from './TextEditor.mdx';

export default {
  title: 'Atom/Form/TextEditorProvider',
  parameters: {
    component: TextEditorProvider,
    docs: {
      // page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ children, ...props }) => {
  return <TextEditorProvider>{children}</TextEditorProvider>;
};

export const Playground = Template.bind({});

Playground.args = {};

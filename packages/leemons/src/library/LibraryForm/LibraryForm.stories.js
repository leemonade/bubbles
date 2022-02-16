import React from 'react';
import { Box } from '@bubbles-ui/components';
import { LibraryForm, LIBRARY_FORM_DEFAULT_PROPS } from './LibraryForm';
import mdx from './LibraryForm.mdx';

export default {
  title: 'Organisms/Library/LibraryForm',
  parameters: {
    component: LibraryForm,
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

const Template = ({ children, ...props }) => {
  return <LibraryForm {...props}>{children}</LibraryForm>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...LIBRARY_FORM_DEFAULT_PROPS,
};

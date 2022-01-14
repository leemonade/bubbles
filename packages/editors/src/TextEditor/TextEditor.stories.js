import React from 'react';
import { Box } from '@bubbles-ui/components';
import { TextEditor, TEXT_EDITOR_DEFAULT_PROPS } from './TextEditor';
import mdx from './TextEditor.mdx';

export default {
  title: 'Molecules/Form/TextEditor',
  parameters: {
    component: TextEditor,
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
    onChange: { action: 'Content changed' },
  },
};

const Template = ({ ...props }) => {
  return <TextEditor {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...TEXT_EDITOR_DEFAULT_PROPS,
};

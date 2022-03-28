import React from 'react';
import { Box } from '@bubbles-ui/components';
import { TextEditorInput } from './TextEditorInput';
import { TEXT_EDITOR_INPUT_DEFAULT_PROPS } from './TextEditorInput.constants';
import mdx from './TextEditorInput.mdx';

export default {
  title: 'Molecules/Form/TextEditorInput',
  parameters: {
    component: TextEditorInput,
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
    onChange: { action: 'onChange' },
  },
};

const Template = ({ ...props }) => {
  return <TextEditorInput {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TEXT_EDITOR_INPUT_DEFAULT_PROPS,
  label: 'Label for text editor',
  description: 'Optional descriptive text for this text editor ',
  placeholder: 'Placeholder',
  help: 'Help text for text editor',
  error: 'Descriptive text for error ',
};

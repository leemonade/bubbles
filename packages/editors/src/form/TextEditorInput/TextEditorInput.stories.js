import React, { useState } from 'react';
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
    onChange: { action: 'onChange' },
  },
};

const Template = ({ ...props }) => {
  const [value, setValue] = useState('<p><strong>Hola Mundo</strong></p>');

  return (
    <TextEditorInput
      {...props}
      value={value}
      onChange={(v) => {
        props.onChange(v);
        setValue(v);
      }}
    />
  );
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

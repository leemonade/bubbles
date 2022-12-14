import React, { useState } from 'react';
import { ContentEditorInput } from './ContentEditorInput';
import { CONTENT_EDITOR_INPUT_DEFAULT_PROPS } from './ContentEditorInput.constants';
import { TEXT_EDITOR_DEFAULT_TOOLBARS } from '../TextEditorInput/TextEditorInput.constants';
import mdx from './ContentEditorInput.mdx';

export default {
  title: 'Organism/Form/ContentEditorInput',
  parameters: {
    component: ContentEditorInput,
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
  const [value, setValue] = useState(`
  <h1>Esto es un título</h1>
  <p>Y esto es un párrafaco</p>
  <h2>Esto es un subtítulo</h2>
  <p>Y esto es otro párrafaco</p>
`);

  return (
    <ContentEditorInput
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
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...CONTENT_EDITOR_INPUT_DEFAULT_PROPS,
  placeholder: 'Esto es un placeholder',
  error: 'Descriptive text for error ',
  useJSON: true,
  toolbars: { ...TEXT_EDITOR_DEFAULT_TOOLBARS },
};

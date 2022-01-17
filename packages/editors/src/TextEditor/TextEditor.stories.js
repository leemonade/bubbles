import React, { useState } from 'react';
import { TextEditor, TEXT_EDITOR_DEFAULT_PROPS, TEXT_EDITOR_FORMATS } from './TextEditor';
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
    onChange: { action: 'Content changed' },
    input: { options: TEXT_EDITOR_FORMATS, control: { type: 'select' } },
    output: { options: TEXT_EDITOR_FORMATS, control: { type: 'select' } },
  },
};

const Template = ({ value, ...props }) => {
  const [data, setData] = useState(value);
  return <TextEditor value={data} onChange={setData} output="html" input="html" {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TEXT_EDITOR_DEFAULT_PROPS,
  placeholder: 'Type here ...',
  value: '<h3>Hello World</h3><p>This is a test</p>',
};

import React, { useEffect, useState } from 'react';
import { TEXT_EDITOR_DEFAULT_PROPS, TextEditor } from './TextEditor';
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
  },
};

const Template = ({ value, ...props }) => {
  const [data, setData] = useState(value);
  useEffect(() => {
    setData(value);
  }, [value]);
  return <TextEditor value={data} onChange={setData} output="html" input="html" {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TEXT_EDITOR_DEFAULT_PROPS,
  placeholder: 'Type here ...',
  value: '<h3>Hello World</h3><p>This is a test</p>',
};

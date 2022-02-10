import React, { useEffect, useState } from 'react';
import { Stack } from '@bubbles-ui/components';
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
  return (
    <Stack direction="column" spacing={5} fullWidth>
      <TextEditor value={data} onChange={setData} {...props} />
      <TextEditor {...props} />
    </Stack>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...TEXT_EDITOR_DEFAULT_PROPS,
  placeholder: 'Type here ...',
  value: '<h3>Hello World</h3><p>This is a test</p>',
  label: 'Label for text editor',
  description: 'Optional descriptive text for this text editor ',
  help: 'Help text for text editor',
  error: 'Descriptive text for error ',
};

import React from 'react';
import { TagsInput, TAGS_INPUT_DEFAULT_PROPS } from './TagsInput';
import mdx from './TagsInput.mdx';

export default {
  title: 'Organisms/Form/TagsInput',
  parameters: {
    component: TagsInput,
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

const Template = ({ children, ...props }) => {
  return <TagsInput {...props}>{children}</TagsInput>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TAGS_INPUT_DEFAULT_PROPS,
  labels: {
    addButton: 'Add tag',
  },
  label: 'Tags',
  placeholder: 'Name of tag',
  suggestions: ['Cat', 'Dog', 'Horse', 'Bird', 'Fish'],
  value: ['Fish', 'Dog'],
  error: 'Please enter a tag',
};

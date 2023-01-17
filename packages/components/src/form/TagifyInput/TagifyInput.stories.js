import React from 'react';
import { TAGIFY_DEFAULT_PROPS, TAGIFY_SIZES, TagifyInput } from './TagifyInput';
import mdx from './TagifyInput.mdx';

export default {
  title: 'BB1/TagifyInput',
  parameters: {
    component: TagifyInput,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=5200%3A51116',
    },
  },
  argTypes: {
    size: { options: TAGIFY_SIZES, control: { type: 'select' } },
    onChange: { action: 'Input changed' },
  },
};

const Template = ({ ...props }) => {
  return <TagifyInput {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TAGIFY_DEFAULT_PROPS,
  label: 'Tag input',
  description: 'Include some tags in your text',
  error: '',
  help: 'To add a tag, type @ and a character to show the tag list',
  value: '',
  settings: {
    mode: 'mix',
    pattern: /@/, // <- must define "patten" in mixed mode
    dropdown: {
      enabled: 1,
      position: 'text',
    },
    whitelist: [
      { id: 100, value: 'Subject:Numering', title: 'Subject:Numering' },
      { id: 101, value: 'Subject:Code', title: 'Subject:Code' },
      { id: 102, value: 'Block:Numering', title: 'Block:Numering' },
      { id: 103, value: 'Block:Code', title: 'Block:Code' },
      { id: 104, value: 'Stage:Numering', title: 'Stage:Numering' },
      { id: 105, value: 'Stage:Code', title: 'Stage:Code' },
      { id: 105, value: '01, 02, ..', title: '01, 02, ..' },
    ],
  },
  withSuggestions: true,
};

import React from 'react';
import { CheckBoxGroup, DEFAULT_PROPS } from './CheckBoxGroup';
import mdx from './CheckBoxGroup.mdx';

export default {
  title: 'Molecules/Form/CheckBoxGroup',
  parameters: {
    component: CheckBoxGroup,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2?node-id=3642%3A26594',
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
    direction: { options: ['column', 'row'], control: { type: 'select' } },
    variant: { options: ['default', 'boxed'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <CheckBoxGroup {...props}>{children}</CheckBoxGroup>;
};

export const Playground = Template.bind({});

Playground.args = {
  data: [
    { label: 'Option 1', value: 'one'},
    { label: 'Option 2', value: 'two', help: 'Help text', helpPosition: 'bottom' },
    { label: 'Option 3', value: 'tree', help: 'Help text', helpPosition: 'right' },
  ],
  direction: 'column',
  variant: 'default',
  ...DEFAULT_PROPS,
};

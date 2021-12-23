import React from 'react';
import { CheckboxGroup, DEFAULT_PROPS } from './CheckboxGroup';
import mdx from './CheckboxGroup.mdx';

export default {
  title: 'Molecules/Form/CheckboxGroup',
  parameters: {
    component: CheckboxGroup,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2?node-id=3642%3A26594',
    },
  },
  argTypes: {
    direction: { options: ['column', 'row'], control: { type: 'select' } },
    variant: { options: ['default', 'boxed'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <CheckboxGroup {...props}>{children}</CheckboxGroup>;
};

export const Playground = Template.bind({});

Playground.args = {
  data: [
    { label: 'Option 1' },
    { label: 'Option 2', help: 'Help text', helpPosition: 'bottom' },
    { label: 'Option 3', help: 'Help text', helpPosition: 'right' },
  ],
  direction: 'column',
  variant: 'default',
  ...DEFAULT_PROPS,
};

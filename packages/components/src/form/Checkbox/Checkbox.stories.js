import React from 'react';
import { Checkbox } from './Checkbox';
import mdx from './Checkbox.mdx';
import { HELP_POSITIONS, CHECKBOX_VARIANTS } from './Checkbox';

export default {
  title: 'Atoms/Form/Checkbox',
  parameters: {
    component: Checkbox,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3642%3A26594',
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
    variant: { options: CHECKBOX_VARIANTS, control: { type: 'select' } },
    helpPosition: { options: HELP_POSITIONS, control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <Checkbox {...props}>{children}</Checkbox>;
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Checkbox label',
  help: '',
  helpPosition: 'right',
  variant: 'default',
  indeterminate: false,
  disabled: false,
};

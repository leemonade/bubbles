import React from 'react';
import { CheckBoxGroup, CHECKBOX_GROUP_DEFAULT_PROPS } from './CheckBoxGroup';
import { CHECKBOX_VARIANTS } from '../../form';
import { STACK_DIRECTIONS } from '../../layout';
import { INPUT_WRAPPER_SIZES, INPUT_WRAPPER_ORIENTATIONS } from '../InputWrapper';
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
    variant: { options: CHECKBOX_VARIANTS, control: { type: 'select' } },
    direction: { options: STACK_DIRECTIONS, control: { type: 'select' } },
    orientation: { options: INPUT_WRAPPER_ORIENTATIONS, control: { type: 'select' } },
    size: { options: INPUT_WRAPPER_SIZES, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <CheckBoxGroup {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...CHECKBOX_GROUP_DEFAULT_PROPS,
  label: 'Label for checkbox group',
  description: 'Optional descriptive text for this checkbox group',
  help: 'Help text for checkbox group',
  error: 'Descriptive text for error',
  data: [
    { label: 'Option 1', value: 'one' },
    { label: 'Option 2', value: 'two', help: 'Help text', helpPosition: 'bottom' },
    { label: 'Option 3', value: 'tree', help: 'Help text', helpPosition: 'right' },
  ],
};

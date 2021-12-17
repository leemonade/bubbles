import React from 'react';
import { Textarea, TEXTAREA_ORIENTATIONS, TEXTAREA_SIZES } from './Textarea';
import mdx from './Textarea.mdx';

export default {
  title: 'Molecules/Form/Textarea',
  parameters: {
    component: Textarea,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    size: { options: TEXTAREA_SIZES, control: { type: 'select' } },
    orientation: { options: TEXTAREA_ORIENTATIONS, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <Textarea {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  size: 'sm',
  orientation: 'vertical',
  placeholder: 'Placeholder',
  disabled: false,
  required: true,
  autosize: true,
  minRows: 2,
  label: 'Label for textarea',
  help: 'Help text for textarea',
  description: 'Optional descriptive text for this textarea ',
  error: 'Descriptive text for error ',
};

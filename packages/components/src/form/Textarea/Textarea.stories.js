import React from 'react';
import {
  Textarea,
  TEXTAREA_ORIENTATIONS,
  TEXTAREA_SIZES,
  TEXTAREA_DEFAULT_PROPS,
} from './Textarea';
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
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3639%3A28645',
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
  ...TEXTAREA_DEFAULT_PROPS,
  placeholder: 'Placeholder',
  label: 'Label for textarea',
  help: 'Help text for textarea',
  description: 'Optional descriptive text for this textarea ',
  error: 'Descriptive text for error ',
};

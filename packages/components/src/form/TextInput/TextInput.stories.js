import React from 'react';
import { RemoveIcon } from '@bubbles-ui/icons/outline';
import {
  TextInput,
  TEXT_INPUT_SIZES,
  TEXT_INPUT_ORIENTATION,
  TEXT_INPUT_DEFAULT_PROPS,
} from './TextInput';
import mdx from './TextInput.mdx';

export default {
  title: 'BB1/TextInput',
  parameters: {
    component: TextInput,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3639%3A28645',
    },
  },
  argTypes: {
    size: { options: TEXT_INPUT_SIZES, control: { type: 'select' } },
    orientation: { options: TEXT_INPUT_ORIENTATION, control: { type: 'select' } },
  },
};

const Template = ({ test_showRightSection, ...props }) => {
  return <TextInput {...props} rightSection={test_showRightSection ? <RemoveIcon /> : null} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TEXT_INPUT_DEFAULT_PROPS,
  label: 'Label for text field',
  description: 'Optional descriptive text for this text field ',
  placeholder: 'Placeholder',
  help: 'Help text for text field',
  error: 'Descriptive text for error ',
  defaultValue: 'Text field default Value',
  test_showRightSection: false,
};

import React from 'react';
import { Box } from '@mantine/core';
import {
  BooleanInput,
  BOOLEAN_INPUT_DEFAULT_PROPS,
  BOOLEAN_INPUT_HELP_POSITIONS,
  BOOLEAN_INPUT_VARIANTS,
  BOOLEAN_INPUT_DISPLAYS,
  BOOLEAN_INPUT_LABEL_POSITIONS,
  BOOLEAN_INPUT_SIZES,
} from './BooleanInput';
import mdx from './BooleanInput.mdx';

export default {
  title: 'BB1/BooleanInput',
  parameters: {
    component: BooleanInput,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=3642%3A26594',
    },
  },
  argTypes: {
    onChange: { action: 'Value changed' },
    helpPosition: { options: BOOLEAN_INPUT_HELP_POSITIONS, control: { type: 'select' } },
    variant: { options: BOOLEAN_INPUT_VARIANTS, control: { type: 'select' } },
    display: { options: BOOLEAN_INPUT_DISPLAYS, control: { type: 'select' } },
    labelPosition: { options: BOOLEAN_INPUT_LABEL_POSITIONS, control: { type: 'select' } },
    size: { options: BOOLEAN_INPUT_SIZES, control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <BooleanInput {...props}>{children}</BooleanInput>;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...BOOLEAN_INPUT_DEFAULT_PROPS,
  label: 'Boolean input',
};

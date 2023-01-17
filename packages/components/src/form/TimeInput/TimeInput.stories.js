import React from 'react';
import { TimeInput, TIME_INPUT_DEFAULT_PROPS } from './TimeInput';
import mdx from './TimeInput.mdx';
import { INPUT_WRAPPER_SIZES } from '../InputWrapper';

export default {
  title: 'BB1/TimeInput',
  parameters: {
    component: TimeInput,
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
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
    size: { options: INPUT_WRAPPER_SIZES, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <TimeInput {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...TIME_INPUT_DEFAULT_PROPS,
};

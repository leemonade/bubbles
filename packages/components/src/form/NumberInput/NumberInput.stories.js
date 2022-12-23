import React from 'react';
import { Box } from '../../layout';
import { NumberInput, NUMBER_INPUT_DEFAULT_PROPS } from './NumberInput';
import mdx from './NumberInput.mdx';

export default {
  title: 'Molecules/Form/NumberInput',
  parameters: {
    component: NumberInput,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <NumberInput {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...NUMBER_INPUT_DEFAULT_PROPS,
  label: 'Label for Number input',
  description: 'Optional descriptive text for this number input',
  placeholder: 'Set a number',
  help: 'Help text for number input',
  error: 'Descriptive text for error ',
  readOnly: false,
};

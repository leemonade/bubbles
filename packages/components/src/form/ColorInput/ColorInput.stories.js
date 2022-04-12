import React from 'react';
import { INPUT_WRAPPER_ORIENTATIONS, INPUT_WRAPPER_SIZES } from '../InputWrapper';
import { ColorInput, COLOR_INPUT_DEFAULT_PROPS } from './ColorInput';
import mdx from './ColorInput.mdx';

export default {
  title: 'Molecules/Form/ColorInput',
  parameters: {
    component: ColorInput,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    size: { options: INPUT_WRAPPER_SIZES, control: { type: 'select' } },
    orientation: { options: INPUT_WRAPPER_ORIENTATIONS, control: { type: 'select' } },
    onChange: { action: 'Color Changed' },
  },
};

const Template = ({ ...props }) => {
  return <ColorInput {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...COLOR_INPUT_DEFAULT_PROPS,
  label: 'Label for color input',
  description: 'Optional descriptive text for this color input',
  placeholder: 'Pick a color',
  help: 'Help text for color input',
  error: 'Descriptive text for error ',
};

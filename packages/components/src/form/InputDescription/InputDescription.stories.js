import React from 'react';
import { InputDescription } from './InputDescription';
import { INPUT_DESCRIPTION_DEFAULT_PROPS } from './InputDescription.constants';
import mdx from './InputDescription.mdx';

export default {
  title: 'Atoms/Form/InputDescription',
  parameters: {
    component: InputDescription,
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
  return <InputDescription {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...INPUT_DESCRIPTION_DEFAULT_PROPS,
  message: 'Description',
};

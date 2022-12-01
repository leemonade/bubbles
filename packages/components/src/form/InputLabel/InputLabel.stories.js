import React from 'react';
import { InputLabel } from './InputLabel';
import { INPUT_LABEL_DEFAULT_PROPS } from './InputLabel.constants';
import mdx from './InputLabel.mdx';

export default {
  title: 'Atoms/Form/InputLabel',
  parameters: {
    component: InputLabel,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return <InputLabel {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...INPUT_LABEL_DEFAULT_PROPS,
  label: 'Input label',
  description: 'Input description',
};

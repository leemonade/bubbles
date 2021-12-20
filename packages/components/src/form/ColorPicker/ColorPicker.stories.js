import React from 'react';
import { ColorPicker, COLOR_PICKER_VARIANT } from './ColorPicker';
import mdx from './ColorPicker.mdx';

export default {
  title: 'Atoms/Form/ColorPicker',
  parameters: {
    component: ColorPicker,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
  },
};

const Template = ({ ...props }) => {
  return <ColorPicker {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  compact: false,
  useHsl: false,
  spacing: 10
};

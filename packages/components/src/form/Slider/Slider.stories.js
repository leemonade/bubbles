import React from 'react';
import { Box } from '@mantine/core';
import { Slider } from './Slider';
import { SLIDER_DEFAULT_PROPS } from './Slider.constants';
import mdx from './Slider.mdx';

export default {
  title: 'Atoms/Form/Slider',
  parameters: {
    component: Slider,
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

const Template = ({ ...props }) => (
  <Box sx={() => ({ padding: 40 })}>
    <Slider {...props} />
  </Box>
);

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...SLIDER_DEFAULT_PROPS,
};

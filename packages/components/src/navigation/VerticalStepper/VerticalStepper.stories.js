import React from 'react';
import { Box } from '@mantine/core';
import { VerticalStepper } from './VerticalStepper';
import { VERTICAL_STEPPER_DEFAULT_PROPS } from './VerticalStepper.constants';
import mdx from './VerticalStepper.mdx';

export default {
  title: 'Organisms/Navigation/VerticalStepper',
  parameters: {
    component: VerticalStepper,
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
  return <VerticalStepper {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...VERTICAL_STEPPER_DEFAULT_PROPS,
};

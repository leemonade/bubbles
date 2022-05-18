import React from 'react';
import { Box } from '../../layout';
import { HorizontalStepper } from './HorizontalStepper';
import { HORIZONTAL_STEPPER_DEFAULT_PROPS } from './HorizontalStepper.constants';
import { DATA } from './mock/data';
import mdx from './HorizontalStepper.mdx';

export default {
  title: 'Organisms/Navigation/HorizontalStepper',
  parameters: {
    component: HorizontalStepper,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onStepClick: { action: 'onStepClick' },
  },
};

const Template = ({ ...props }) => {
  return <HorizontalStepper {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...HORIZONTAL_STEPPER_DEFAULT_PROPS,
  data: DATA,
};

import React from 'react';
import { Box } from '../../layout';
import { HorizontalStepper } from './HorizontalStepper';
import { HORIZONTAL_STEPPER_DEFAULT_PROPS } from './HorizontalStepper.constants';
import { DATA } from './mock/data';
import mdx from './HorizontalStepper.mdx';

export default {
  title: 'BB1/HorizontalStepper',
  parameters: {
    component: HorizontalStepper,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=7664%3A82230',
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

import React from 'react';
import { VerticalStepper } from './VerticalStepper';
import { VERTICAL_STEPPER_DEFAULT_PROPS } from './VerticalStepper.constants';
import { DATA } from './mock/data';
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
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=8215%3A104591',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => <VerticalStepper {...props} />;

export const Playground = Template.bind({});

Playground.args = {
  ...VERTICAL_STEPPER_DEFAULT_PROPS,
  data: DATA,
  currentStep: 6,
  completedSteps: [0, 1, 2, 3, 4, 5],
  calificationProps: {
    label: 'Por los pelos',
    grade: 5,
    minimumGrade: 5,
  },
};

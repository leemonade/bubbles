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
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return <VerticalStepper {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...VERTICAL_STEPPER_DEFAULT_PROPS,
  data: DATA,
  calificationProps: {
    label: 'Por los pelos',
    grade: 5,
    minimumGrade: 5,
  },
};

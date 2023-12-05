import React from 'react';
import { TotalLayoutStepper } from './TotalLayoutStepper';
import { TOTAL_LAYOUT_STEPPER_DEFAULT_PROPS } from './TotalLayoutStepper.constants';
import mdx from './TotalLayoutStepper.mdx';

export default {
  title: 'Molecules/Layout/TotalLayout/TotalLayoutStepper',
  parameters: {
    component: TotalLayoutStepper,
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

const mockData = [
  { label: 'Basic Data Step', badge: null, status: 'completed' },
  { label: 'Content Step', badge: null, status: 'completed' },
  { label: 'Other Step', badge: null, status: null },
  { label: 'This is a very, very, very long name. Is not it?', badge: null, status: null },
];

const Template = (props) => <TotalLayoutStepper {...props} />;

export const Playground = Template.bind({});

Playground.args = {
  // myBooleanProp: false,
  // mySelectProp: 'Hello'
  ...TOTAL_LAYOUT_STEPPER_DEFAULT_PROPS,
  autoCompleteOnNext: true,
  data: mockData,
  currentStep: 2,
  completedSteps: [0, 1],
};

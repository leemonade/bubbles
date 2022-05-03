import React from 'react';
import {
  VERTICAL_STEPPER_CONTAINER_DEFAULT_PROPS,
  VerticalStepperContainer,
} from './VerticalStepperContainer';
import mdx from './VerticalStepperContainer.mdx';

export default {
  title: 'Atoms/Layout/VerticalStepperContainer',
  parameters: {
    component: VerticalStepperContainer,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
    },
  },
  argTypes: {},
};

const Template = ({ children, ...props }) => {
  return <VerticalStepperContainer {...props}>{children}</VerticalStepperContainer>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...VERTICAL_STEPPER_CONTAINER_DEFAULT_PROPS,
};

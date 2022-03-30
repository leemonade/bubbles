import React from 'react';
import { Box } from '@mantine/core';
import { StepperButton } from './StepperButton';
import { STEPPER_BUTTON_DEFAULT_PROPS } from './StepperButton.constants';
import mdx from './StepperButton.mdx';

export default {
  title: 'Atoms/Navigation/StepperButton',
  parameters: {
    component: StepperButton,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

const Template = ({ ...props }) => {
  return (
    <Box>
      <Box>
        <StepperButton {...props} state={'completed'} position={'start'} />
        <StepperButton {...props} state={'completed'} />
        <StepperButton {...props} state={'completed'} position={'end'} />
      </Box>
      <Box>
        <StepperButton {...props} state={'inProgress'} position={'start'} />
        <StepperButton {...props} state={'inProgress'} />
        <StepperButton {...props} state={'inProgress'} position={'end'} />
      </Box>
      <Box>
        <StepperButton {...props} state={'OK'} position={'start'} />
        <StepperButton {...props} state={'OK'} />
        <StepperButton {...props} state={'OK'} position={'end'} />
      </Box>
      <Box>
        <StepperButton {...props} position={'start'} />
        <StepperButton {...props} />
        <StepperButton {...props} position={'end'} />
      </Box>
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...STEPPER_BUTTON_DEFAULT_PROPS,
  label: 'Label',
  active: true,
};

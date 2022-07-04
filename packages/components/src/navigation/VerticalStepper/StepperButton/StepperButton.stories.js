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
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=8215%3A104591',
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
        <StepperButton {...props} state={'current'} position={'start'} />
        <StepperButton {...props} state={'current'} />
        <StepperButton {...props} state={'current'} position={'end'} />
      </Box>
      <Box>
        <StepperButton {...props} state={'OK'} position={'start'} />
        <StepperButton {...props} state={'OK'} />
        <StepperButton {...props} state={'OK'} position={'end'} />
      </Box>
      <Box>
        <StepperButton {...props} state={'KO'} position={'start'} />
        <StepperButton {...props} state={'KO'} />
        <StepperButton {...props} state={'KO'} position={'end'} />
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

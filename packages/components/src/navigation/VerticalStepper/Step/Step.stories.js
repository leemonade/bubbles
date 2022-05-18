import React from 'react';
import { Box } from '@mantine/core';
import { Step } from './Step';
import { STEP_DEFAULT_PROPS } from './Step.constants';
import mdx from './Step.mdx';
import { PROGRESS_STATES } from '../Progress';

export default {
  title: 'Atoms/Navigation/Step',
  parameters: {
    component: Step,
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
    state: { control: { type: 'select' }, options: PROGRESS_STATES },
  },
};

const Template = ({ isButton, withChilds, ...props }) => {
  if (!isButton) delete props.onClick;
  return (
    <Box>
      <Step {...props} position={'start'} />
      <Step {...props} />
      <Step {...props} position={'end'} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  isButton: false,
  withChilds: false,
  ...STEP_DEFAULT_PROPS,
  label: 'Step label',
  badge: 'Step badge',
  state: 'pending',
};

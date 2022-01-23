import React from 'react';
import { Box } from '../../layout';
import { Text } from '../../typography';
import { Stepper, STEPPER_DEFAULT_PROPS } from './Stepper';
import mdx from './Stepper.mdx';

export default {
  title: 'Organisms/Navigation/Stepper',
  parameters: {
    component: Stepper,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
    },
  },
  argTypes: {
    onNext: { action: 'next' },
    onPrev: { action: 'previous' },
  },
};

const Template = ({ ...props }) => {
  return <Stepper {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...STEPPER_DEFAULT_PROPS,
  data: [
    {
      label: 'Basic data',
      content: (
        <Box>
          <Text>Basic Data</Text>
        </Box>
      ),
    },
    {
      label: 'Courses',
      content: (
        <Box>
          <Text>Courses</Text>
        </Box>
      ),
    },
    {
      label: 'Subjects',
      content: (
        <Box>
          <Text>Subjects</Text>
        </Box>
      ),
    },
  ],
};

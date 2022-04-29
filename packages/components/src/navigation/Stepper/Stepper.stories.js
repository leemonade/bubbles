import React from 'react';
import { Box, PageContainer, Paper } from '../../layout';
import { Text, Paragraph } from '../../typography';
import { Stepper, STEPPER_DEFAULT_PROPS, STEPPER_ORIENTATIONS } from './Stepper';
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
    orientation: { control: { type: 'select', options: STEPPER_ORIENTATIONS } },
    stickyAt: { control: { type: 'number' } },
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
          {[...Array(10)].map((_, i) => (
            <Paragraph key={`p-${i}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
          ))}
        </Box>
      ),
    },
    {
      label: 'Courses',
      content: (
        <Box>
          {[...Array(10)].map((_, i) => (
            <Paragraph key={`p-${i}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
          ))}
        </Box>
      ),
    },
    {
      label: 'Subjects',
      content: (
        <Box>
          {[...Array(10)].map((_, i) => (
            <Paragraph key={`p-${i}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Paragraph>
          ))}
        </Box>
      ),
    },
  ],
};

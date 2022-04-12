import React from 'react';
import { Box } from '../../../layout';
import { Progress } from './Progress';
import { PROGRESS_DEFAULT_PROPS, PROGRESS_STATES, PROGRESS_POSITIONS } from './Progress.constants';
import mdx from './Progress.mdx';

export default {
  title: 'Atoms/Navigation/Progress',
  parameters: {
    component: Progress,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    state: { control: { type: 'select' }, options: PROGRESS_STATES },
    position: { control: { type: 'select' }, options: PROGRESS_POSITIONS },
  },
};

const Template = ({ ...props }) => {
  return (
    <Box style={{ padding: 10 }}>
      <Progress {...props} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...PROGRESS_DEFAULT_PROPS,
};

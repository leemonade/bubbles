import React from 'react';
import { Box } from '@bubbles-ui/components';
import { TaskOngoing } from './TaskOngoing';
import { TASK_ONGOING_DEFAULT_PROPS } from './TaskOngoing.constants';
import mdx from './TaskOngoing.mdx';

export default {
  title: 'leemons/Pages/TaskOngoing',
  parameters: {
    component: TaskOngoing,
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
  return <TaskOngoing {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TASK_ONGOING_DEFAULT_PROPS,
};

import React from 'react';
import { Box } from '@bubbles-ui/components';
import { TaskHeader } from './TaskHeader';
import { TASK_HEADER_DEFAULT_PROPS } from './TaskHeader.constants';
import mdx from './TaskHeader.mdx';

export default {
  title: 'leemons/Common/TaskHeader',
  parameters: {
    component: TaskHeader,
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
  return <TaskHeader {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TASK_HEADER_DEFAULT_PROPS,
  title: 'Los romanos',
  subtitle: 'Historia - G01',
  icon: 'https://static.thenounproject.com/png/447685-200.png',
  color: '#FABADA',
};

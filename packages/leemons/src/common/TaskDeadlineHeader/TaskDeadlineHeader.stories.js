import React from 'react';
import { Box } from '@bubbles-ui/components';
import { TaskDeadlineHeader } from './TaskDeadlineHeader';
import { TASK_DEADLINE_HEADER_DEFAULT_PROPS } from './TaskDeadlineHeader.constants';
import mdx from './TaskDeadlineHeader.mdx';

export default {
  title: 'leemons/Common/TaskDeadlineHeader',
  parameters: {
    component: TaskDeadlineHeader,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onDeadlineChange: { action: 'onDeadlineChange' },
    onCloseTask: { action: 'onCloseTask' },
  },
};

const Template = ({ ...props }) => {
  return <TaskDeadlineHeader {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TASK_DEADLINE_HEADER_DEFAULT_PROPS,
  title: 'Los romanos',
  subtitle: 'Historia - G01',
  icon: 'https://static.thenounproject.com/png/447685-200.png',
  color: '#FABADA',
  deadline: new Date('2022-05-20 18:00:00'),
  locale: 'es-ES',
  labels: {
    deadline: 'Deadline',
    deadlineExtraTime: 'Add extra time',
    closeTask: 'Close task',
    save: 'Save',
    cancel: 'Cancel',
  },
};
1;

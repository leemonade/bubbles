import React from 'react';
import { Box } from '@bubbles-ui/components';
import { TaskHeader } from './TaskHeader';
import { TASK_HEADER_DEFAULT_PROPS, TASK_HEADER_SIZES } from './TaskHeader.constants';
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
  argTypes: {
    size: { options: TASK_HEADER_SIZES, control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <TaskHeader {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...TASK_HEADER_DEFAULT_PROPS,
  title: 'Los romanos',
  icon: 'https://static.thenounproject.com/png/447685-200.png',
  color: '#FABADA',
  items: [
    {
      name: 'Historia - G01',
      icon: 'https://static.thenounproject.com/png/447685-200.png',
      color: '#FABADA',
    },
    {
      name: 'Geografia - G01',
      icon: 'https://static.thenounproject.com/png/447685-200.png',
      color: 'green',
    },
    {
      name: 'Matematicas - G01',
      icon: 'https://static.thenounproject.com/png/447685-200.png',
      color: 'red',
    },
  ],
  activityType: {
    icon: 'https://static.thenounproject.com/png/447685-200.png',
    type: 'Tarea',
  },
  activityEvaluation: 'Puntuable',
  activityDates: {
    startLabel: 'Desde',
    endLabel: 'Hasta',
    hourLabel: 'Hora',
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 30)),
  },
  alertDays: 29,
};

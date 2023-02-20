import React from 'react';
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
    locale: { options: ['en', 'es', 'fr'], control: { type: 'select' } },
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
  isStarted: false,
  title: 'Los romanos',
  subtitle: 'Historia - G01',
  icon: 'https://static.thenounproject.com/png/447685-200.png',
  color: '#FABADA',
  startDate: new Date('2022-12-10 18:00:00'),
  deadline: new Date('2022-12-10 22:00:00'),
  locale: 'en',
  labels: {
    noDeadline: 'No deadline',
    deadline: 'Deadline',
    deadlineExtraTime: 'Add extra time',
    closeTask: 'Close task',
    archiveTask: 'Archive task',
    save: 'Update',
    cancel: 'Cancel',
    period: 'Tipo de periodo',
    startDate: 'Fecha de inicio',
    startHour: 'Hora de inicio',
    endDate: 'Fecha de fin',
    endHour: 'Hora de fin',
    closedPeriod: 'Periodo cerrado',
    liveSession: 'Session en directo',
    openPeriod: 'Periodo abierto',
    liveSessionDate: 'Fecha',
  },
};
1;

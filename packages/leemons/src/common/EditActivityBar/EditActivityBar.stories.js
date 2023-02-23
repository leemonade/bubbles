import React from 'react';
import { EditActivityBar } from './EditActivityBar';
import { EDIT_ACTIVITY_BAR_DEFAULT_PROPS } from './EditActivityBar.constants';
import mdx from './EditActivityBar.mdx';

export default {
  title: 'leemons/Common/EditActivityBar',
  parameters: {
    component: EditActivityBar,
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

const Template = ({ noDeadline, deadline, ...props }) => {
  return <EditActivityBar {...props} deadline={noDeadline ? null : deadline} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...EDIT_ACTIVITY_BAR_DEFAULT_PROPS,
  noDeadline: false,
  isStarted: false,
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
    addOneDay: '+1d',
    addSevenDays: '+7d',
  },
};
1;

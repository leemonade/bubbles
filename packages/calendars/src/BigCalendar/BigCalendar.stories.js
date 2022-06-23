import React from 'react';
import { BigCalendar, BIGCALENDAR_VIEWS } from './BigCalendar';
import mdx from './BigCalendar.mdx';
import EVENTS from './mocks/events';

export default {
  title: 'Organisms/Calendar/BigCalendar',
  parameters: {
    component: BigCalendar,
    docs: {
      page: mdx,
    },
    // design: {
    //  type: 'figma',
    //  url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    // },
  },
  argTypes: {
    currentView: { options: BIGCALENDAR_VIEWS, control: { type: 'select' } },
    locale: { options: ['es-ES', 'en-GB'], control: { type: 'select' } },
    eventClick: { action: 'Event pressed' },
    dateClick: { action: 'Date clicked' },
    onSelectDay: { action: 'Day selected' },
    onRangeChange: { action: 'Range changed' },
    onSelectEvent: { action: 'Event selected' },
    addEventClick: { action: 'Add Event clicked' },
  },
};

const Template = (props) => {
  let messages = undefined;
  if (props.locale === 'es-ES') {
    messages = {
      month: 'Mensual',
      week: 'Semanal',
      day: 'Diario',
      agenda: 'Agenda',
      today: 'Hoy',
      previous: 'Anterior',
      next: 'siguiente',
      showWeekends: 'Mostrar fines de semana',
    };
  }
  return <BigCalendar {...props} messages={messages} style={{ height: 'calc(100vh - 40px)' }} />;
};

export const Playground = Template.bind({});

Playground.args = {
  events: EVENTS,
  currentView: BIGCALENDAR_VIEWS[1],
  locale: 'es-ES',
  minWeekDay: 0,
  maxWeekDay: 3,
  timeslots: 1,
  hideToolbar: true,
  timeslotHeight: 100,
  forceBgColorToEvents: true,
  hideAllDayCells: true,
  minHour: '12:15',
  maxHour: '13:15',
  defaultDate: EVENTS[1].start,
};

const MonthRangeTemplate = (props) => {
  return <BigCalendar {...props} style={{ height: 'calc(100vh - 40px)' }} />;
};

export const MonthRangeView = MonthRangeTemplate.bind({});

MonthRangeView.args = {
  events: EVENTS,
  currentView: BIGCALENDAR_VIEWS[4],
  locale: 'es-ES',
  defaultDate: EVENTS[1].start,
  monthRange: {
    startYear: 2020,
    startMonth: 9,
    endYear: 2021,
    endMonth: 7,
  },
};

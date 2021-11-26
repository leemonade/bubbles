import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import { CalendarIcon, ExternalLinkIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Group, Title, Text, Box } from '@mantine/core';
import { DateTime } from 'luxon';
import { BigCalendar, BIGCALENDAR_VIEWS } from './BigCalendar';
import mdx from './BigCalendar.mdx';
import EVENTS from './mocks/events';

export default {
  title: 'Dates/BigCalendar',
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
    language: { options: ['es-ES', 'en-GB'], control: { type: 'select' } },
  },
};

const Template = (props) => {
  let messages = undefined;
  if (props.language === 'es-ES') {
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
  currentView: BIGCALENDAR_VIEWS[0],
  language: 'es-ES',
  defaultDate: EVENTS[1].start,
};

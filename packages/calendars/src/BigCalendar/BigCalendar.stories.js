/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Button, ColorInput, DatePicker, Select, TextInput } from '@bubbles-ui/components';
import { BigCalendar } from './BigCalendar';
import { BIGCALENDAR_VIEWS } from './BigCalendar.constants';
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

const heightValue = 'calc(100vh - 40px)';

const Template = (props) => {
  let messages;
  const { locale } = props;
  if (locale === 'es-ES') {
    messages = {
      month: 'Mes',
      week: 'Semana',
      day: 'Día',
      agenda: 'Agenda',
      today: 'Hoy',
      previous: 'Anterior',
      next: 'siguiente',
      showWeekends: 'Fines de semana',
      display: 'Mostrar',
      entirePeriod: 'Periodo completo',
      onlyInitAndEnd: 'Solo mostrar inicio y final',
      onlyEnd: 'Solo mostrar fecha límite',
    };
  }
  return <BigCalendar {...props} messages={messages} style={{ height: heightValue }} />;
};

export const Playground = Template.bind({});

Playground.args = {
  events: EVENTS,
  currentView: BIGCALENDAR_VIEWS[0],
  locale: 'es-ES',
  defaultDate: EVENTS[0].start,
};

const MonthRangeTemplate = (props) => <BigCalendar {...props} style={{ height: heightValue }} />;

export const MonthRangeView = MonthRangeTemplate.bind({});

MonthRangeView.args = {
  events: EVENTS,
  currentView: BIGCALENDAR_VIEWS[4],
  locale: 'es-ES',
  defaultDate: EVENTS[0].start,
  monthRange: {
    startYear: 2022,
    startMonth: 8,
    endYear: 2022,
    endMonth: 11,
  },
  printMode: false,
};

const EventCreationTemplate = (props) => {
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState('');
  const [borderStyle, setBorderStyle] = useState('');
  const [eventColor, setEventColor] = useState('#000000');
  const [borderColor, setBorderColor] = useState('#000000');
  const [eventStart, setEventStart] = useState(null);
  const [eventEnd, setEventEnd] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const newEvent = {
      title: eventTitle,
      allDay: true,
      start: eventStart,
      end: eventEnd,
      originalEvent: {
        calendar: { bgColor: eventColor, borderStyle, borderColor },
      },
    };

    setEvents([...events, newEvent]);
    setEventTitle('');
    setBorderStyle('');
    setBorderColor('#000000');
    setEventColor('#000000');
    setEventStart(null);
    setEventEnd(null);
  };

  return (
    <Box style={{ height: heightValue, display: 'flex' }}>
      <Box style={{ maxWidth: 620, overflow: 'scroll' }}>
        <BigCalendar events={events} {...props} style={{ height: '100%' }} />
      </Box>
      <Box style={{ flex: 1, backgroundColor: 'whitesmoke', height: '100%', padding: 48 }}>
        <form
          onSubmit={submitHandler}
          style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
        >
          <TextInput label="Event title" value={eventTitle} onChange={setEventTitle} />
          <Select
            label="Border style"
            data={['solid', 'dashed', 'dotted']}
            value={borderStyle}
            onChange={setBorderStyle}
          />
          <Box style={{ display: 'flex', gap: 8 }}>
            <ColorInput label="Event color" value={eventColor} onChange={setEventColor} />
            <ColorInput label="Border color" value={borderColor} onChange={setBorderColor} />
          </Box>
          <DatePicker label="Event start" value={eventStart} onChange={setEventStart} />
          <DatePicker label="Event end" value={eventEnd} onChange={setEventEnd} />
          <Button type="submit" rounded>
            Añadir evento
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export const EventCreationForm = EventCreationTemplate.bind({});

EventCreationForm.args = {
  currentView: BIGCALENDAR_VIEWS[4],
  locale: 'es-ES',
  defaultDate: EVENTS[0].start,
  monthRange: { startYear: 2022, endYear: 2022, startMonth: 0, endMonth: 11 },
};

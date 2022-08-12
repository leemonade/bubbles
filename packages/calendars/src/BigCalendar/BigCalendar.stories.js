import React from 'react';
import { Box, Button, ColorInput, DatePicker, Select, TextInput } from '@bubbles-ui/components';
import { BigCalendar, BIGCALENDAR_VIEWS } from './BigCalendar';
import mdx from './BigCalendar.mdx';
import EVENTS from './mocks/events';

export default {
  title: 'Organisms/Calendar/BigCalendar',
  parameters: {
    component: BigCalendar,
    docs: {
      page: mdx
    }
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
    addEventClick: { action: 'Add Event clicked' }
  }
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
      showWeekends: 'Mostrar fines de semana'
    };
  }
  return <BigCalendar {...props} messages={messages} style={{ height: 'calc(100vh - 40px)' }} />;
};

export const Playground = Template.bind({});

Playground.args = {
  events: EVENTS,
  currentView: BIGCALENDAR_VIEWS[0],
  locale: 'es-ES',
  /*
  minWeekDay: 0,
  maxWeekDay: 3,
  timeslots: 1,
  hideToolbar: true,
  timeslotHeight: 100,
  forceBgColorToEvents: true,
  hideAllDayCells: true,
  minHour: '12:15',
  maxHour: '13:15',

   */
  defaultDate: EVENTS[0].start
};

const MonthRangeTemplate = (props) => {
  return <BigCalendar {...props} style={{ height: 'calc(100vh - 40px)' }} />;
};

export const MonthRangeView = MonthRangeTemplate.bind({});

MonthRangeView.args = {
  events: EVENTS,
  currentView: BIGCALENDAR_VIEWS[4],
  locale: 'es-ES',
  defaultDate: EVENTS[0].start,
  monthRange: {
    startYear: 2022,
    startMonth: 4,
    endYear: 2022,
    endMonth: 6
  }
};

const EventCreationTemplate = (props) => {
  const [events, setEvents] = React.useState([]);
  const [eventTitle, setEventTitle] = React.useState('');
  const [borderStyle, setBorderStyle] = React.useState('');
  const [eventColor, setEventColor] = React.useState('#000000');
  const [borderColor, setBorderColor] = React.useState('#000000');
  const [eventRange, setEventRange] = React.useState([undefined, undefined]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newEvent = {
      title: eventTitle,
      allDay: true,
      start: eventRange[0],
      end: eventRange[1] || eventRange[0],
      originalEvent: {
        calendar: { bgColor: eventColor, borderStyle: borderStyle, borderColor: borderColor }
      }
    };

    setEvents([...events, newEvent]);
    setEventTitle('');
    setBorderStyle('');
    setBorderColor('#000000');
    setEventColor('#000000');
    setEventRange([undefined, undefined]);
  };

  return (
    <Box style={{ height: 'calc(100vh - 40px)', display: 'flex' }}>
      <Box style={{ maxWidth: 620, overflow: 'scroll' }}>
        <BigCalendar events={events} {...props} style={{ height: '100%' }} />
      </Box>
      <Box style={{ flex: 1, backgroundColor: 'whitesmoke', height: '100%', padding: 48 }}>
        <form
          onSubmit={submitHandler}
          style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
        >
          <TextInput label='Event title' value={eventTitle} onChange={setEventTitle} />
          <Select
            label='Border style'
            data={['solid', 'dashed', 'dotted']}
            value={borderStyle}
            onChange={setBorderStyle}
          />
          <ColorInput label='Event color' value={eventColor} onChange={setEventColor} />
          <ColorInput label='Border color' value={borderColor} onChange={setBorderColor} />
          <DatePicker label='Event range' value={eventRange} range onChange={setEventRange} />
          <Button type='submit' rounded>
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
  monthRange: { startYear: 2022, endYear: 2022, startMonth: 0, endMonth: 11 }
};

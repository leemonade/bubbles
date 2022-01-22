import { DateTime } from 'luxon';

export default [
  {
    title: 'Evento de Biología',
    allDay: true,
    start: DateTime.fromISO('2021-11-25T00:00:00.000Z').toJSDate(),
    end: DateTime.fromISO('2021-11-25T23:59:59.000Z').toJSDate(),
    originalEvent: {
      id: '04814d2b-172a-46a7-b2ad-fc678b20661d',
      title: 'Evento de Biología',
      calendar: {
        id: '061bf3c4-4351-4330-8ac7-adf82bffc57d',
        key: 'plugins.mvp-template.calendar-test',
        name: 'Biologia',
        icon:
          'https://s3.eu-west-1.amazonaws.com/global-assets.leemons.io/biology_icon_3f80619648.svg',
        bgColor: '#96D47F',
        borderColor: '#96D47F',
        section: 'plugins.mvp-template.Testing',
        created_at: DateTime.fromISO('2021-11-25T19:35:54.000Z').toJSDate(),
        updated_at: DateTime.fromISO('2021-11-25T19:35:54.000Z').toJSDate(),
        showEvents: true,
      },
      startDate: DateTime.fromISO('2021-11-25T00:00:00.000Z').toJSDate(),
      endDate: DateTime.fromISO('2021-11-25T23:59:59.000Z').toJSDate(),
      isAllDay: 1,
      repeat: null,
      type: 'plugins.calendar.event',
      status: 'active',
      data: null,
      created_at: DateTime.fromISO('2021-11-25T19:35:54.000Z').toJSDate(),
      updated_at: DateTime.fromISO('2021-11-25T19:35:54.000Z').toJSDate(),
    },
  },
  {
    title: 'Tarea de Computación',
    allDay: false,
    start: DateTime.fromISO('2021-11-25T11:00:00.000Z').toJSDate(),
    end: DateTime.fromISO('2021-11-25T13:00:00.000Z').toJSDate(),
    originalEvent: {
      id: '1b61226d-b659-4f73-aa40-c621ad87c44a',
      title: 'Tarea Leemons',
      calendar: {
        id: '061bf3c4-4351-4330-8ac7-adf82bffc57d',
        key: 'plugins.mvp-template.calendar-test',
        name: 'Computación',
        icon:
          'https://s3.eu-west-1.amazonaws.com/global-assets.leemons.io/computer_icon_56ca0c26bc.svg',
        bgColor: '#7449F4',
        borderColor: '#7449F4',
        section: 'plugins.mvp-template.Testing',
        created_at: DateTime.fromISO('2021-11-25T19:35:54.000Z').toJSDate(),
        updated_at: DateTime.fromISO('2021-11-25T19:35:54.000Z').toJSDate(),
        showEvents: true,
      },
      startDate: DateTime.fromISO('2021-11-25T11:00:00.000Z').toJSDate(),
      endDate: DateTime.fromISO('2021-11-25T13:00:00.000Z').toJSDate(),
      isAllDay: 0,
      repeat: null,
      type: 'plugins.calendar.task',
      status: 'active',
      data: null,
      created_at: DateTime.fromISO('2021-11-25T19:35:54.000Z').toJSDate(),
      updated_at: DateTime.fromISO('2021-11-25T19:35:54.000Z').toJSDate(),
    },
  },
  {
    title: 'Refuerzo de Piano',
    allDay: false,
    start: DateTime.fromISO('2021-11-30T12:00:00.000Z').toJSDate(),
    end: DateTime.fromISO('2021-11-30T13:00:00.000Z').toJSDate(),
    originalEvent: {
      id: 'b22855d2-ae28-42d6-b349-073ab66d3ad3',
      title: 'Refuerzo de Piano',
      calendar: {
        id: '3c57941f-85af-4d47-be6e-153dd43d5c70',
        key: 'plugins.users.calendar.agent.3960807b-dbf5-47b7-9e18-213d94193e67',
        name: '3960807b-dbf5-47b7-9e18-213d94193e67',
        icon:
          'https://s3.eu-west-1.amazonaws.com/global-assets.leemons.io/music_icon_525d4e994a.svg',
        bgColor: '#DC5571',
        borderColor: '#DC5571',
        section: 'plugins.users.calendar.user_section',
        created_at: DateTime.fromISO('2021-11-25T19:35:54.000Z').toJSDate(),
        updated_at: DateTime.fromISO('2021-11-25T19:35:54.000Z').toJSDate(),
        showEvents: true,
      },
      startDate: DateTime.fromISO('2021-11-30T12:00:00.000Z').toJSDate(),
      endDate: DateTime.fromISO('2021-11-30T13:00:00.000Z').toJSDate(),
      isAllDay: 0,
      repeat: 'every_week',
      type: 'plugins.calendar.event',
      status: 'active',
      data: { place: '', videoLink: '', description: '' },
      created_at: DateTime.fromISO('2021-11-26T10:53:50.000Z').toJSDate(),
      updated_at: DateTime.fromISO('2021-11-26T10:53:50.000Z').toJSDate(),
    },
    rrule: { freq: 2, byweekday: [1] },
  },
];
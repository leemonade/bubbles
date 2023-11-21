import { DateTime } from 'luxon';

export default {
  events: [
    {
      allDay: true,
      title: 'Navidad',
      start: DateTime.fromISO('2022-12-22T23:00:00.000Z').toJSDate(),
      end: DateTime.fromISO('2023-01-08T23:00:00.000Z').toJSDate(),
      originalEvent: {
        noCanOpen: true,
        calendar: {
          bgColor: ['#DEEDE4', '#D5E4DB'],
          borderStyle: 'solid',
          desaturateColor: false,
          borderColor: '#DEEDE4',
          leftArrow: false,
          rightArrow: false,
          oneDayStyle: true,
          zIndex: -10,
        },
      },
    },
  ],
  currentView: 'monthRange',
  locale: 'es',
  defaultDate: DateTime.fromISO('2023-06-19T10:50:09.687Z').toJSDate(),
  monthRange: { startYear: 2022, startMonth: 8, endYear: 2023, endMonth: 5 },
};

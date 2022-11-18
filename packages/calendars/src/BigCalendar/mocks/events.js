import { DateTime } from 'luxon';

/*
export default [
  {
    id: '425989f9-4716-4519-b9ea-4b67bb725897-0',
    title: 'Geografía e Historia (2ºA)',
    allDay: false,
    start: DateTime.fromISO('2022-06-26T10:15:00.040Z').toJSDate(),
    end: DateTime.fromISO('2022-06-26T11:15:59.040Z').toJSDate(),
    originalEvent: {
      title: 'Geografía e Historia (2ºA)',
      bgColor: '#1BB184',
      borderColor: '#1BB184',
      icon: 'http://localhost:8080/api/leebrary/img/bd0bfe67-1380-4e7c-a094-e6e6fd7d53f6@1.0.0?authorization=%5B%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uQ29uZmlnIjp7InByb2dyYW0iOiI2NGJmM2ZmZi1iZWQ3LTRlOTktYWMwOS0yYzA0YzRlZjcwOTkifSwidXNlckFnZW50IjoiYmMzOWMwNWEtYTEwOS00MzgwLWE5NTgtMWU5Njk5MmVhMmYxIiwiaWF0IjoxNjU1OTExNjc3LCJleHAiOjE2NTU5OTgwNzd9.gN-3t36dte2sFxN13z87R6B4p7AzRjqOuTbUOTptNAg%22%5D',
      calendar: {
        bgColor: '#1BB184',
        borderColor: '#1BB184',
        icon: 'http://localhost:8080/api/leebrary/img/bd0bfe67-1380-4e7c-a094-e6e6fd7d53f6@1.0.0?authorization=%5B%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uQ29uZmlnIjp7InByb2dyYW0iOiI2NGJmM2ZmZi1iZWQ3LTRlOTktYWMwOS0yYzA0YzRlZjcwOTkifSwidXNlckFnZW50IjoiYmMzOWMwNWEtYTEwOS00MzgwLWE5NTgtMWU5Njk5MmVhMmYxIiwiaWF0IjoxNjU1OTExNjc3LCJleHAiOjE2NTU5OTgwNzd9.gN-3t36dte2sFxN13z87R6B4p7AzRjqOuTbUOTptNAg%22%5D',
      },
    },
  },
  {
    id: '425989f9-4716-4519-b9ea-4b67bb725897-1',
    title: 'Geografía e Historia (2ºA)',
    allDay: false,
    start: DateTime.fromISO('2022-06-22T10:15:00.040Z').toJSDate(),
    end: DateTime.fromISO('2022-06-22T11:15:59.040Z').toJSDate(),
    originalEvent: {
      title: 'Geografía e Historia (2ºA)',
      bgColor: '#1BB184',
      borderColor: '#1BB184',
      icon: 'http://localhost:8080/api/leebrary/img/bd0bfe67-1380-4e7c-a094-e6e6fd7d53f6@1.0.0?authorization=%5B%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uQ29uZmlnIjp7InByb2dyYW0iOiI2NGJmM2ZmZi1iZWQ3LTRlOTktYWMwOS0yYzA0YzRlZjcwOTkifSwidXNlckFnZW50IjoiYmMzOWMwNWEtYTEwOS00MzgwLWE5NTgtMWU5Njk5MmVhMmYxIiwiaWF0IjoxNjU1OTExNjc3LCJleHAiOjE2NTU5OTgwNzd9.gN-3t36dte2sFxN13z87R6B4p7AzRjqOuTbUOTptNAg%22%5D',
      calendar: {
        bgColor: '#1BB184',
        borderColor: '#1BB184',
        icon: 'http://localhost:8080/api/leebrary/img/bd0bfe67-1380-4e7c-a094-e6e6fd7d53f6@1.0.0?authorization=%5B%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uQ29uZmlnIjp7InByb2dyYW0iOiI2NGJmM2ZmZi1iZWQ3LTRlOTktYWMwOS0yYzA0YzRlZjcwOTkifSwidXNlckFnZW50IjoiYmMzOWMwNWEtYTEwOS00MzgwLWE5NTgtMWU5Njk5MmVhMmYxIiwiaWF0IjoxNjU1OTExNjc3LCJleHAiOjE2NTU5OTgwNzd9.gN-3t36dte2sFxN13z87R6B4p7AzRjqOuTbUOTptNAg%22%5D',
      },
    },
  },
];

 */

export default [
  {
    allDay: true,
    title: 'Event 1',
    start: DateTime.fromISO('2022-12-08').toJSDate(),
    end: DateTime.fromISO('2022-12-08').toJSDate(),
    originalEvent: {
      calendar: {
        bgColor: ['#E4DDF7', '#DBD4ED'],
        borderStyle: 'solid',
        borderColor: '#E4DDF7',
        leftArrow: false,
        rightArrow: false,
        rotate: 90,
        oneDayStyle: true,
        zIndex: -3,
      },
    },
  },
  {
    allDay: true,
    title: 'Event 2',
    start: DateTime.fromISO('2022-12-05').toJSDate(),
    end: DateTime.fromISO('2022-12-08').toJSDate(),
    originalEvent: {
      calendar: {
        bgColor: ['#DEEDE4', '#D5E4DB'],
        borderStyle: 'solid',
        borderColor: '#DEEDE4',
        leftArrow: false,
        rightArrow: false,
        oneDayStyle: true,
        zIndex: -6,
      },
    },
  },
];

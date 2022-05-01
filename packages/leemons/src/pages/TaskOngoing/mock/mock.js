export const mock = {
  headerBackground: {
    withGradient: true,
    withBlur: true,
    image:
      'https://images.unsplash.com/photo-1650559014175-af7c0303898b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTI0NDQzOA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  taskDeadlineHeader: {
    title: 'La historia detrás del cuadro',
    subtitle: 'Geografía e historia - 3002',
    icon: 'https://static.thenounproject.com/png/447685-200.png',
    color: '#FABADA',
    deadline: new Date('2022-06-20 18:00:00'),
    locale: 'es-ES',
    labels: {
      deadline: 'Deadline',
      deadlineExtraTime: 'Add extra time',
      closeTask: 'Close task',
      save: 'Save',
      cancel: 'Cancel',
    },
  },
  horizontalTimeline: {
    data: [
      {
        label: 'Asignada',
        date: new Date('2022-04-28').toISOString(),
      },
      {
        label: 'En curso',
        date: new Date('2022-05-25'),
      },
      {
        label: 'Entrega',
        date: '2022-06-10T00:00:00.000Z',
      },
      {
        label: 'Corrección',
        date: new Date('2022-06-20'),
      },
    ],
  },
};

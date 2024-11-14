export const DATA = [
  {
    label: 'Resumen',
    badge: 'Badge',
    status: 'OK',
  },
  { text: 'Main tasks' },
  {
    label: 'Tarea previa',
    status: 'OK',
    childSteps: [
      {
        label: 'Child 1',
        badge: 'Badge of child 1',
      },
      { label: 'Child 2' },
      { label: 'Child 3' },
    ],
  },
  {
    label: 'Enunciado',
    status: 'KO',
    completion: {
      current: 3,
      total: 4,
    },
  },
  {
    label: 'Desarrollo',
    completion: {
      current: 4,
      total: 4,
    },
  },
  { text: 'Enunciado previo' },
  {
    label: 'Pruebas',
    onClick: () => {
      console.log('Click on pruebas');
    },
  },
  {
    label: 'Pruebas 2',
    onClick: () => {
      console.log('Click on pruebas 2');
    },
    status: 'KO',
  },
  {
    label: 'Paso bloqueado',
    onClick: () => {
      console.log('Click on paso bloqueado');
    },
    isBlocked: true,
  },
];

export const SIMPLE_DATA = [
  {
    label: 'Resumen',
    badge: 'Badge',
    status: 'OK',
  },
  {
    label: 'Tarea previa',
  },
  {
    label: 'Enunciado',
    status: 'KO',
  },
  {
    label: 'Desarrollo',
  },
  {
    label: 'Pruebas',
    onClick: () => {
      console.log('Click on pruebas');
    },
  },
  {
    label: 'Pruebas 2',
    onClick: () => {
      console.log('Click on pruebas 2');
    },
    status: 'KO',
  },
  {
    label: 'Paso bloqueado',
    onClick: () => {
      console.log('Click on paso bloqueado');
    },
    isBlocked: true,
  },
];

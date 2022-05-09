export const DATA = [
  {
    label: 'Resumen',
    badge: 'Badge',
    status: 'OK',
  },
  {
    label: 'Tarea previa',
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
];
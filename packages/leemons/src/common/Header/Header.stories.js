import React from 'react';
import { Box } from '@bubbles-ui/components';
import { Header } from './Header';
import { HEADER_DEFAULT_PROPS, HEADER_SIZES } from './Header.constants';
import mdx from './Header.mdx';

export default {
  title: 'leemons/Common/Header',
  parameters: {
    component: Header,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onBack: { action: 'onBack' },
    size: { options: HEADER_SIZES, control: { type: 'select' } },
  },
};

const Template = ({ showImage, image, ...props }) => {
  return <Header {...props} image={showImage ? image : ''} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...HEADER_DEFAULT_PROPS,
  showImage: true,
  image:
    'https://images.unsplash.com/photo-1650120060263-61dc78365ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
  back: 'Volver',
  activity: {
    title: 'Los romanos',
    isStarted: false,
    startDate: new Date('2022-12-10 18:00:00'),
    deadline: new Date('2022-12-10 22:00:00'),
    locale: 'en',
    labels: {
      noDeadline: 'No deadline',
      deadline: 'Deadline',
      deadlineExtraTime: 'Add extra time',
      closeTask: 'Close task',
      archiveTask: 'Archive task',
      save: 'Update',
      cancel: 'Cancel',
      period: 'Tipo de periodo',
      startDate: 'Fecha de inicio',
      startHour: 'Hora de inicio',
      endDate: 'Fecha de fin',
      endHour: 'Hora de fin',
      closedPeriod: 'Periodo cerrado',
      liveSession: 'Session en directo',
      openPeriod: 'Periodo abierto',
      liveSessionDate: 'Fecha',
      addOneDay: '+1d',
      addSevenDays: '+7d',
    },
    icon: 'https://static.thenounproject.com/png/447685-200.png',
    color: '#FABADA',
    items: [
      {
        name: 'Historia - G01',
        icon: 'https://static.thenounproject.com/png/447685-200.png',
        color: '#FABADA',
      },
      {
        name: 'Geografia - G01',
        icon: 'https://static.thenounproject.com/png/447685-200.png',
        color: 'green',
      },
      {
        name: 'Matematicas - G01',
        icon: 'https://static.thenounproject.com/png/447685-200.png',
        color: 'red',
      },
    ],
    activityType: {
      icon: 'https://static.thenounproject.com/png/447685-200.png',
      type: 'Tarea',
    },
    activityEvaluation: 'Puntuable',
    activityDates: {
      startLabel: 'Desde',
      endLabel: 'Hasta',
      hourLabel: 'Hora',
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 30)),
    },
    alertDays: 30,
  },
  classRoom: {
    labels: {
      virtualClassroom: 'Clase virtual',
      schedule: 'Horario',
      calendar: 'Calendario del curso',
    },
    classRoom: {
      calendar: {},
      schedule: [
        {
          id: '28bfe616-6bd4-4b07-b2ca-edc3303b9cb7',
          day: 'monday',
          dayWeek: 0,
          duration: 120,
          end: '09:00',
          start: '07:00',
        },
        {
          id: '8bfe6162-bd46-b074-2cab-dc3303b9cb7e',
          day: 'wednesday',
          dayWeek: 2,
          duration: 60,
          end: '12:00',
          start: '11:00',
        },
        {
          id: 'bfe61628-d46b-074b-cab2-c3303b9cb7ed',
          day: 'friday',
          dayWeek: 4,
          duration: 60,
          end: '11:00',
          start: '10:00',
        },
      ],
      address: 'Aula B01. Edificio Norte.',
      virtual_classroom: 'https://www.leemons.io/es',
      teacher: {
        name: 'Willy',
        surnames: 'Teacher',
        avatar:
          'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
      },
    },
    onChat: () => console.log('onChat'),
    showChat: true,
  },
  dropdown: {
    placeholder: 'Search',
    data: [
      {
        id: '1',
        color: '#4F96FF',
        label: 'Bases para el análisis y el tratamiento del Cáncer',
        description: 'CFP594-22/001',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      },
      {
        id: '2',
        color: '#FABADA',
        label: 'Titulo muy largo del item numero 2',
        description: 'Descripcion de item 2',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        showIcon: true,

        image:
          'https://images.unsplash.com/photo-1631931413024-38ed4229d10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80',
      },
      {
        id: '3',
        color: '#345',
        label: 'Titulo del item numero 3',
        description: 'Descripcion de item 3',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
      },
      {
        id: '4',
        color: '#271',
        label: 'Cómo montar una mesa',
        description: 'Descripcion de item 4',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80',
      },
      {
        id: '1',
        color: '#4F96FF',
        label: 'Bases para el análisis y el tratamiento del Cáncer',
        description: 'CFP594-22/001',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      },
      {
        id: '2',
        color: '#FABADA',
        label: 'Titulo muy largo del item numero 2',
        description: 'Descripcion de item 2',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1631931413024-38ed4229d10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80',
      },
      {
        id: '3',
        color: '#345',
        label: 'Titulo del item numero 3',
        description: 'Descripcion de item 3',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
      },
      {
        id: '4',
        color: '#271',
        label: 'Cómo montar una mesa',
        description: 'Descripcion de item 4',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80',
      },
      {
        id: '1',
        color: '#4F96FF',
        label: 'Bases para el análisis y el tratamiento del Cáncer',
        description: 'CFP594-22/001',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      },
      {
        id: '2',
        color: '#FABADA',
        label: 'Titulo muy largo del item numero 2',
        description: 'Descripcion de item 2',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1631931413024-38ed4229d10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80',
      },
      {
        id: '3',
        color: '#345',
        label: 'Titulo del item numero 3',
        description: 'Descripcion de item 3',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
      },
      {
        id: '4',
        color: '#271',
        label: 'Cómo montar una mesa',
        description: 'Descripcion de item 4',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80',
      },
      {
        id: '1',
        color: '#4F96FF',
        label: 'Bases para el análisis y el tratamiento del Cáncer',
        description: 'CFP594-22/001',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      },
      {
        id: '2',
        color: '#FABADA',
        label: 'Titulo muy largo del item numero 2',
        description: 'Descripcion de item 2',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1631931413024-38ed4229d10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80',
      },
      {
        id: '3',
        color: '#345',
        label: 'Titulo del item numero 3',
        description: 'Descripcion de item 3',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
      },
      {
        id: '4',
        color: '#271',
        label: 'Cómo montar una mesa',
        description: 'Descripcion de item 4',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80',
      },
      {
        id: '1',
        color: '#4F96FF',
        label: 'Bases para el análisis y el tratamiento del Cáncer',
        description: 'CFP594-22/001',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      },
      {
        id: '2',
        color: '#FABADA',
        label: 'Titulo muy largo del item numero 2',
        description: 'Descripcion de item 2',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1631931413024-38ed4229d10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80',
      },
      {
        id: '3',
        color: '#345',
        label: 'Titulo del item numero 3',
        description: 'Descripcion de item 3',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
      },
      {
        id: '4',
        color: '#271',
        label: 'Cómo montar una mesa',
        description: 'Descripcion de item 4',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80',
      },
      {
        id: '1',
        color: '#4F96FF',
        label: 'Bases para el análisis y el tratamiento del Cáncer',
        description: 'CFP594-22/001',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      },
      {
        id: '2',
        color: '#FABADA',
        label: 'Titulo muy largo del item numero 2',
        description: 'Descripcion de item 2',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1631931413024-38ed4229d10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80',
      },
      {
        id: '3',
        color: '#345',
        label: 'Titulo del item numero 3',
        description: 'Descripcion de item 3',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
      },
      {
        id: '4',
        color: '#271',
        label: 'Cómo montar una mesa',
        description: 'Descripcion de item 4',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80',
      },
      {
        id: '1',
        color: '#4F96FF',
        label: 'Bases para el análisis y el tratamiento del Cáncer',
        description: 'CFP594-22/001',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
      },
      {
        id: '2',
        color: '#FABADA',
        label: 'Titulo muy largo del item numero 2',
        description: 'Descripcion de item 2',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1631931413024-38ed4229d10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80',
      },
      {
        id: '3',
        color: '#345',
        label: 'Titulo del item numero 3',
        description: 'Descripcion de item 3',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
      },
      {
        id: '4',
        color: '#271',
        label: 'Cómo montar una mesa',
        description: 'Descripcion de item 4',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg',
        image:
          'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80',
      },
    ],
    value: {
      id: '',
    },
  },
  timeline: {
    data: [
      { label: 'Visualization', date: new Date('2022-05-01') },
      { label: 'Start', date: new Date('2022-05-09') },
      { label: 'Deadline', date: '2022-06-10T00:00:00.000Z' },
      { label: 'Evaluation', date: new Date('2022-06-11') },
      { label: 'Results', date: new Date('2022-06-15') },
    ],
    rootStyles: {
      padding: 24,
    },
  },
};

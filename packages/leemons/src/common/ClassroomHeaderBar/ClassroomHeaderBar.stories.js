import React from 'react';
import { ClassroomHeaderBar } from './ClassroomHeaderBar';
import { CLASSROOM_HEADER_BAR_DEFAULT_PROPS } from './ClassroomHeaderBar.constants';
import mdx from './ClassroomHeaderBar.mdx';

export default {
  title: 'leemons/Common/ClassroomHeaderBar',
  parameters: {
    component: ClassroomHeaderBar,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
    },
  },
  argTypes: {
    locale: { options: ['en', 'es', 'fr'], control: { type: 'select' } },
  },
};

const Template = ({ ...props }) => {
  return <s {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...CLASSROOM_HEADER_BAR_DEFAULT_PROPS,
  locale: 'en',
  labels: {
    virtualClassroom: 'Clase virtual',
  },
  classRoom: {
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
};

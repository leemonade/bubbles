import React from 'react';
import { HorizontalTimeline } from './HorizontalTimeline';
import {
  HORIZONTAL_TIMELINE_DEFAULT_PROPS,
  HORIZONTAL_TIMELINE_COLORS,
} from './HorizontalTimeline.constants';
import mdx from './HorizontalTimeline.mdx';

export default {
  title: 'Molecules/Informative/HorizontalTimeline',
  parameters: {
    component: HorizontalTimeline,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    locale: {
      options: ['en-gb', 'en-us', 'fr', 'fr-ca', 'es-es', 'es-pr'],
      control: { type: 'select' },
    },
    color: {
      options: HORIZONTAL_TIMELINE_COLORS,
      control: { type: 'select' },
    },
  },
};

const Template = ({ ...props }) => {
  return <HorizontalTimeline {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...HORIZONTAL_TIMELINE_DEFAULT_PROPS,
  data: [
    {
      label: 'Asignada',
      date: new Date('2022-04-01').toISOString(),
    },
    {
      label: 'Iniciada',
      date: new Date('2022-04-07'),
    },
    {
      label: 'En curso',
      date: new Date('2022-04-14'),
    },
    {
      label: 'Entrega',
      date: '2022-04-20T00:00:00.000Z',
    },
    {
      label: 'Corrección',
      date: new Date('2022-04-30'),
    },
  ],
  dotColor: '#FABADA',
};

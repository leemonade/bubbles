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
    { label: 'Visualization', date: new Date('2022-05-01') },
    { label: 'Start', date: new Date('2022-05-09') },
    { label: 'Deadline', date: '2022-06-10T00:00:00.000Z' },
    { label: 'Evaluation', date: new Date('2022-06-11') },
    { label: 'Results', date: new Date('2022-06-15') },
  ],
  rootStyles: {
    padding: 24,
  },
};

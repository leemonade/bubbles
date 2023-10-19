import React from 'react';
import { ScoreFronstage } from './ScoreFronstage';
import { SCORE_FRONSTAGE_DEFAULT_PROPS } from './ScoreFronstage.constants';
import mdx from './ScoreFronstage.mdx';

export default {
  title: 'Organisms/Feedback/ScoreFronstage',
  parameters: {
    component: ScoreFronstage,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => <ScoreFronstage {...props} />;

export const Playground = Template.bind({});

Playground.args = {
  ...SCORE_FRONSTAGE_DEFAULT_PROPS,
  label: 'Average score',
  title: 'Title',
  subtitle: '1001',
  icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/White_flag_icon.svg',
  image:
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
  values: [
    {
      title: 'Title 1',
      date: new Date(new Date() - Math.random() * 1e12),
      percentage: '20',
      score: { number: Math.floor(Math.random() * 11) },
    },
    {
      title: 'Title 2',
      date: new Date(new Date() - Math.random() * 1e12),
      percentage: '20',
      score: { number: Math.floor(Math.random() * 11) },
    },
    {
      title: 'Title 3',
      date: new Date(new Date() - Math.random() * 1e12),
      percentage: '20',
      score: { letter: 'B+', number: 7 },
    },
    {
      title: 'Title 4',
      date: new Date(new Date() - Math.random() * 1e12),
      percentage: '20',
      score: { number: Math.floor(Math.random() * 11) },
    },
  ],
};

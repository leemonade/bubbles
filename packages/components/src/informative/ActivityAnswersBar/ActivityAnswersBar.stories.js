import React from 'react';
import { ActivityAnswersBar } from './ActivityAnswersBar';
import { ACTIVITY_ANSWERS_BAR_DEFAULT_PROPS } from './ActivityAnswersBar.constants';
import mdx from './ActivityAnswersBar.mdx';
import { DATA, SELECTABLES } from './mock/data';

export default {
  title: 'Organisms/Informative/ActivityAnswersBar',
  parameters: {
    component: ActivityAnswersBar,
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

const Template = ({ ...props }) => {
  return <ActivityAnswersBar {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...ACTIVITY_ANSWERS_BAR_DEFAULT_PROPS,
  data: DATA,
  selectables: SELECTABLES,
  showBarIcon: false,
  labels: {
    OK: 'Acertada',
    KO: 'Errónea',
    null: 'NS/NC',
  },
};

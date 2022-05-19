import React from 'react';
import { Box } from '../../layout';
import { ActivityCountdown } from './ActivityCountdown';
import { ACTIVITY_COUNTDOWN_DEFAULT_PROPS } from './ActivityCountdown.constants';
import mdx from './ActivityCountdown.mdx';

export default {
  title: 'Atoms/Informative/ActivityCountdown',
  parameters: {
    component: ActivityCountdown,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => {
  return <ActivityCountdown {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...ACTIVITY_COUNTDOWN_DEFAULT_PROPS,
  //adds to hours to current date
  finish: new Date(Date.now() + 7200000),
};

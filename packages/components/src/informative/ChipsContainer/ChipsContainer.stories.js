import React from 'react';
import { ChipsContainer } from './ChipsContainer';
import mdx from './ChipsContainer.mdx';
import { CHIPS_CONTAINER_DEFAULT_PROPS } from './ChipsContainer.constants';

export default {
  title: 'Atoms/Informative/ChipsContainer',
  parameters: {
    component: ChipsContainer,
    docs: {
      page: mdx,
    },
  },
  argTypes: {},
};

const Template = ({ ...props }) => <ChipsContainer {...props} />;

export const Playground = Template.bind({});

Playground.args = {
  ...CHIPS_CONTAINER_DEFAULT_PROPS,
  subjects: [
    'Mo, 10:30-11:30',
    'Tu, 10:30-11:30',
    'We, 10:30-11:30',
    'Th, 10:30-11:30',
    'Fr, 10:30-11:30',
    'Tu, 9:00-10:00',
    'We, 10:00-11:00',
    'Mo, 11:30-12:30',
    'Th - Fr, 12:30-13:30',
  ],
  chipsToShow: 2,
  isCollisionDetected: false,
  labels: {
    and: 'And',
    more: 'more',
  },
};

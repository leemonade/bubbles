import React from 'react';
import { Box } from '@mantine/core';
import { ScoresBar } from './ScoresBar';
import { SCORES_BAR_DEFAULT_PROPS, SCORES_BAR_VARIANTS } from './ScoresBar.constants';
import mdx from './ScoresBar.mdx';

export default {
  title: 'Organisms/Informative/ScoresBar',
  parameters: {
    component: ScoresBar,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    variant: { options: SCORES_BAR_VARIANTS, control: { type: 'select' } },
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ wrapperHeight, ...props }) => {
  return (
    <Box style={{ height: wrapperHeight }}>
      <ScoresBar {...props} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...SCORES_BAR_DEFAULT_PROPS,
  wrapperHeight: 270,
  data: [
    {
      score: '0',
      scoreValue: 2,
    },
    {
      score: '1',
      scoreValue: 1,
    },
    {
      score: '2',
      scoreValue: 3,
    },
    {
      score: '3',
      scoreValue: Math.round(Math.random() * 10),
    },
    {
      score: '4',
      scoreValue: Math.round(Math.random() * 10),
    },
    {
      score: '5',
      scoreValue: Math.round(Math.random() * 10),
    },
    {
      score: '6',
      scoreValue: Math.round(Math.random() * 10),
    },
    {
      score: '7',
      scoreValue: Math.round(Math.random() * 10),
    },
    {
      score: '8',
      scoreValue: Math.round(Math.random() * 10),
    },
    {
      score: '9',
      scoreValue: Math.round(Math.random() * 10),
    },
    {
      score: '10',
      scoreValue: 6,
    },
  ],
};

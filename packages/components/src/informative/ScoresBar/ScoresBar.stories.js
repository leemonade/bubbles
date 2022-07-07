import React from 'react';
import { Box } from '@mantine/core';
import { ScoresBar } from './ScoresBar';
import { SCORES_BAR_DEFAULT_PROPS, SCORES_BAR_VARIANTS } from './ScoresBar.constants';
import { FULL_SCORES, GRADES } from './mock/data';
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
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=8393%3A94628',
    },
  },
  argTypes: {
    variant: { options: SCORES_BAR_VARIANTS, control: { type: 'select' } },
  },
};

const Template = ({ wrapperHeight, useLetter, ...props }) => {
  const gradesArray = props.grades.map(({ number, letter }) => {
    if (useLetter) return { number, letter };
    else return { number };
  });

  return (
    <Box style={{ height: wrapperHeight }}>
      <ScoresBar {...props} grades={gradesArray} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...SCORES_BAR_DEFAULT_PROPS,
  wrapperHeight: 270,
  useLetter: true,
  scores: FULL_SCORES,
  grades: GRADES,
  markerLegend: 'Pass level',
};

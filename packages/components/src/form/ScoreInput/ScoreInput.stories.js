import React from 'react';
import { Box } from '@mantine/core';
import { ScoreInput } from './ScoreInput';
import { SCORE_INPUT_DEFAULT_PROPS } from './ScoreInput.constants';
import mdx from './ScoreInput.mdx';

export default {
  title: 'Molecules/Form/ScoreInput',
  parameters: {
    component: ScoreInput,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    acceptCustom: { control: { type: 'select' }, options: ['text', 'number', 'none'] },
  },
};

const Template = ({ useLetter, acceptCustom, ...props }) => {
  const gradesArray = props.grades.map(({ score, letter }) => {
    if (useLetter) return { score, letter };
    else return { score };
  });

  return (
    // <Box style={{ width: 610 }}>
    <ScoreInput
      {...props}
      grades={gradesArray}
      acceptCustom={acceptCustom !== 'none' ? acceptCustom : undefined}
    />
    // </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  useLetter: false,
  acceptCustom: 'none',
  ...SCORE_INPUT_DEFAULT_PROPS,
  grades: [
    { score: 0, letter: 'F' },
    { score: 1, letter: 'E' },
    { score: 2, letter: 'E+' },
    { score: 3, letter: 'D' },
    { score: 4, letter: 'D+' },
    { score: 5, letter: 'C' },
    { score: 6, letter: 'C+' },
    { score: 7, letter: 'B' },
    { score: 8, letter: 'B+' },
    { score: 9, letter: 'A' },
    { score: 10, letter: 'A+' },
    { score: 11, letter: 'A++' },
    { score: 12, letter: 'A+++' },
    { score: 13, letter: 'A++++' },
    { score: 14, letter: 'A+++++' },
    { score: 15, letter: 'A++++++' },
    { score: 16, letter: 'A+++++++' },
    { score: 17, letter: 'A++++++++' },
    { score: 18, letter: 'A+++++++++' },
    { score: 19, letter: 'A++++++++++' },
    { score: 20, letter: 'A+++++++++++' },
  ],
  label: 'Score input',
  description: 'This is a score input',
  value: {
    score: 11,
  },
};

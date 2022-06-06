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
  },
};

const FULL_SCORES = [
  { student: 'Albert', score: 10 },
  { student: 'Bert', score: 9 },
  { student: 'Manolo', score: 9 },
  { student: 'Bertrand', score: 8 },
  { student: 'Bertrand 2', score: 8 },
  { student: 'Bertrand 3', score: 8 },
  { student: 'Bertrand 4', score: 8 },
  { student: 'Bertrand 5', score: 8 },
  { student: 'Céline', score: 7 },
  { student: 'Céline 2', score: 7 },
  { student: 'Dora', score: 6 },
  { student: 'Dora 2', score: 6 },
  { student: 'Edouard', score: 5 },
  { student: 'Edouard 2', score: 5 },
  { student: 'Edouard 3', score: 5 },
  { student: 'Céline 3', score: 7 },
  { student: 'Céline 4', score: 7 },
  { student: 'Dora 3', score: 6 },
  { student: 'Dora 4', score: 6 },
  { student: 'Céline 5', score: 7 },
  { student: 'Céline 6', score: 7 },
  { student: 'Dora 5', score: 6 },
  { student: 'Dora 6', score: 6 },
  { student: 'Edouard 4', score: 5 },
  { student: 'Edouard 5', score: 5 },
  { student: 'Edouard 6', score: 5 },
  { student: 'Félix', score: 4 },
  { student: 'Henri', score: 2 },
  { student: 'Ida', score: 1 },
  { student: 'Henri', score: 2 },
  { student: 'Ida', score: 1 },
  { student: 'Henri', score: 2 },
  { student: 'Ida', score: 1 },
  { student: 'Henri', score: 2 },
  { student: 'Ida', score: 1 },
  { student: 'Henri', score: 2 },
  { student: 'Olivia', score: 3 },
  { student: 'Olivia', score: 3 },
  { student: 'Olivia', score: 3 },
  { student: 'Olivia', score: 3 },
  { student: 'Jean-Claude', score: 0 },
  { student: 'Kévin', score: 7 },
  { student: 'Léa', score: 6 },
  { student: 'Olivia', score: 3 },
  { student: 'Philippe', score: 6 },
  { student: 'Quentin', score: 5 },
  { student: 'Rémi', score: 4 },
  { student: 'Sylvie', score: 5 },
  { student: 'Théo', score: 4 },
  { student: 'Théo', score: 4 },
  { student: 'Théo', score: 4 },
  { student: 'Théo', score: 4 },
  { student: 'Ursule', score: 3 },
  { student: 'Vincent', score: 5 },
];

const MIN_SCORES = [{ student: 'Albert', score: 10 }];

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
  grades: [
    { number: 0, letter: 'F' },
    { number: 1, letter: 'E' },
    { number: 2, letter: 'E+' },
    { number: 3, letter: 'D' },
    { number: 4, letter: 'D+' },
    { number: 5, letter: 'C' },
    { number: 6, letter: 'C+' },
    { number: 7, letter: 'B' },
    { number: 8, letter: 'B+' },
    { number: 9, letter: 'A' },
    { number: 10, letter: 'A+' },
  ],
  markerLegend: 'Pass level',
};

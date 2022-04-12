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
    { student: 'Albert', grade: 10 },
    { student: 'Bert', grade: 9 },
    { student: 'Manolo', grade: 9 },
    { student: 'Bertrand', grade: 8 },
    { student: 'Bertrand 2', grade: 8 },
    { student: 'Bertrand 3', grade: 8 },
    { student: 'Bertrand 4', grade: 8 },
    { student: 'Bertrand 5', grade: 8 },
    { student: 'Céline', grade: 7 },
    { student: 'Céline 2', grade: 7 },
    { student: 'Dora', grade: 6 },
    { student: 'Dora 2', grade: 6 },
    { student: 'Edouard', grade: 5 },
    { student: 'Edouard 2', grade: 5 },
    { student: 'Edouard 3', grade: 5 },
    { student: 'Céline 3', grade: 7 },
    { student: 'Céline 4', grade: 7 },
    { student: 'Dora 3', grade: 6 },
    { student: 'Dora 4', grade: 6 },
    { student: 'Céline 5', grade: 7 },
    { student: 'Céline 6', grade: 7 },
    { student: 'Dora 5', grade: 6 },
    { student: 'Dora 6', grade: 6 },
    { student: 'Edouard 4', grade: 5 },
    { student: 'Edouard 5', grade: 5 },
    { student: 'Edouard 6', grade: 5 },
    { student: 'Félix', grade: 4 },
    { student: 'Henri', grade: 2 },
    { student: 'Ida', grade: 1 },
    { student: 'Henri', grade: 2 },
    { student: 'Ida', grade: 1 },
    { student: 'Henri', grade: 2 },
    { student: 'Ida', grade: 1 },
    { student: 'Henri', grade: 2 },
    { student: 'Ida', grade: 1 },
    { student: 'Henri', grade: 2 },
    { student: 'Olivia', grade: 3 },
    { student: 'Olivia', grade: 3 },
    { student: 'Olivia', grade: 3 },
    { student: 'Olivia', grade: 3 },
    { student: 'Jean-Claude', grade: 0 },
    { student: 'Kévin', grade: 7 },
    { student: 'Léa', grade: 6 },
    { student: 'Olivia', grade: 3 },
    { student: 'Philippe', grade: 6 },
    { student: 'Quentin', grade: 5 },
    { student: 'Rémi', grade: 4 },
    { student: 'Sylvie', grade: 5 },
    { student: 'Théo', grade: 4 },
    { student: 'Théo', grade: 4 },
    { student: 'Théo', grade: 4 },
    { student: 'Théo', grade: 4 },
    { student: 'Ursule', grade: 3 },
    { student: 'Vincent', grade: 5 },
  ],
};

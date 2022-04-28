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
    onChange: { action: 'onChange' },
  },
};

const Template = ({ acceptCustom, onChange, ...props }) => {
  const [value, setValue] = React.useState({ score: 5 });

  const onChangeHandler = (value) => {
    setValue(value);
    onChange(value);
  };

  return (
    <ScoreInput
      {...props}
      value={value}
      onChange={onChangeHandler}
      acceptCustom={acceptCustom !== 'none' ? acceptCustom : undefined}
    />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  showLetters: false,
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
    { score: 11, letter: 'A+' },
    { score: 12, letter: '-S' },
    { score: 13, letter: 'S' },
    { score: 14, letter: 'S+' },
    { score: 15, letter: '-T' },
    { score: 16, letter: 'T' },
    { score: 17, letter: 'T+' },
    { score: 18, letter: '-U' },
    { score: 19, letter: 'U' },
    { score: 20, letter: 'U+' },
  ],
  label: 'Score input',
  description: 'This is a score input',
  value: {},
};

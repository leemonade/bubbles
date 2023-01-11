import React from 'react';
import { ScoreInput } from './ScoreInput';
import {
  SCORE_INPUT_DEFAULT_PROPS,
  SCORE_INPUT_DIRECTION,
  SCORE_INPUT_SEPARATORS,
} from './ScoreInput.constants';
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
      url: 'https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/%F0%9F%8D%8B%F0%9F%92%A7-Bubbles-SD-v2?node-id=8393%3A94628',
    },
  },
  argTypes: {
    acceptCustom: { control: { type: 'select' }, options: ['text', 'number', 'none'] },
    direction: { control: { type: 'select' }, options: SCORE_INPUT_DIRECTION },
    decimalSeparator: { control: { type: 'select' }, options: SCORE_INPUT_SEPARATORS },
    onChange: { action: 'onChange' },
  },
};

const Template = ({ acceptCustom, onChange, grades, letterGrades, ...props }) => {
  const [value, setValue] = React.useState(props.value || { score: 0 });

  const onChangeHandler = (value) => {
    setValue(value);
    onChange(value);
  };

  return (
    <ScoreInput
      {...props}
      grades={props.showLetters ? letterGrades : grades}
      value={value}
      onChange={onChangeHandler}
      acceptCustom={acceptCustom !== 'none' ? acceptCustom : undefined}
    />
  );
};

export const Playground = Template.bind({});

Playground.args = {
  decimalPrecision: 0,
  decimalSeparator: 'dot',
  direction: 'ltr',
  showLetters: false,
  acceptCustom: 'none',
  ...SCORE_INPUT_DEFAULT_PROPS,
  letterGrades: [
    {
      score: 0,
      letter: 'F',
    },
    {
      score: 0.667,
      letter: 'D-',
    },
    {
      score: 1,
      letter: 'D',
    },
    {
      score: 1.333,
      letter: 'D+',
    },
    {
      score: 1.667,
      letter: 'C-',
    },
    {
      score: 2,
      letter: 'C',
    },
    {
      score: 2.333,
      letter: 'C+',
    },
    {
      score: 2.667,
      letter: 'B-',
    },
    {
      score: 3,
      letter: 'B',
    },
    {
      score: 3.333,
      letter: 'B+',
    },
    {
      score: 3.667,
      letter: 'A-',
    },
    {
      score: 4,
      letter: 'A',
    },
  ],
  grades: [
    {
      score: 0,
    },
    {
      score: 1,
    },
    {
      score: 2,
    },
    {
      score: 3,
    },
    {
      score: 4,
    },
    {
      score: 5,
    },
    {
      score: 6,
    },
    {
      score: 7,
    },
    {
      score: 8,
    },
    {
      score: 9,
    },
    {
      score: 10,
    },
    {
      score: 11,
    },
    {
      score: 12,
    },
    {
      score: 13,
    },
    {
      score: 14,
    },
  ],
  label: 'Score input',
  description: 'This is a score input',
  value: {},
  placeholder: 'Other tags',
  tags: [
    { letter: '-S', score: 9 },
    { letter: 'S', score: 10 },
    { letter: 'NP', score: 0 },
    { letter: 'CNV', score: 5 },
  ],
};

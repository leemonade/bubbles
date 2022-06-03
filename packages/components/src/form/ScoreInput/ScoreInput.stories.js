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
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    acceptCustom: { control: { type: 'select' }, options: ['text', 'number', 'none'] },
    direction: { control: { type: 'select' }, options: SCORE_INPUT_DIRECTION },
    decimalSeparator: { control: { type: 'select' }, options: SCORE_INPUT_SEPARATORS },
    onChange: { action: 'onChange' },
  },
};

const Template = ({ acceptCustom, onChange, ...props }) => {
  const [value, setValue] = React.useState(props.value || { score: 0 });

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
  decimalPrecision: 0,
  decimalSeparator: 'dot',
  direction: 'ltr',
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
  placeholder: 'Other tags',
  tags: [
    { letter: '-S', score: 9 },
    { letter: 'S', score: 10 },
    { letter: 'NP', score: 0 },
    { letter: 'CNV', score: 5 },
  ],
};

import React from 'react';
import { Box } from '@bubbles-ui/components';
import {
  EvaluationPeriodsForm,
  EVALUATION_PERIODS_FORM_DEFAULT_PROPS,
} from './EvaluationPeriodsForm';
import mdx from './EvaluationPeriodsForm.mdx';

export default {
  title: 'leemons/Scores/EvaluationPeriodsForm',
  parameters: {
    component: EvaluationPeriodsForm,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {},
};

const Template = ({ children, ...props }) => {
  return <EvaluationPeriodsForm {...props}>{children}</EvaluationPeriodsForm>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...EVALUATION_PERIODS_FORM_DEFAULT_PROPS,
  labels: {
    periodName: 'Name of period',
    periodRange: 'Range of period',
    addPeriod: 'Add period',
    subPeriodTitle: 'Evaluaciones parciales (opcional)',
    addSubPeriod: 'Add sub-period',
  },
  placeholders: {
    periodName: 'Name of period',
    periodRange: 'Range of period',
  },
  errorMessages: {
    periodName: 'Name is required',
    periodRange: 'Range is required',
  },
  value: [
    {
      name: 'Primero de la ESO',
      start: new Date('2022-02-01'),
      end: new Date('2022-03-31'),
      periods: [
        {
          name: 'Primera evaluación',
          start: new Date('2022-02-01'),
          end: new Date('2022-02-28'),
          periods: [],
        },
        {
          name: 'Segunda evaluación',
          start: new Date('2022-03-01'),
          end: new Date('2022-03-31'),
          periods: [],
        },
      ],
    },
    // {
    //   name: 'Segundoo de la ESO',
    //   start: new Date('2022-04-01'),
    //   end: new Date('2022-05-31'),
    //   periods: [],
    // },
  ],
};

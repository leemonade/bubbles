import React from 'react';
import { Box } from '@bubbles-ui/components';
import { ScoresPeriodForm } from './ScoresPeriodForm';
import { SCORES_PERIOD_FORM_DEFAULT_PROPS } from './ScoresPeriodForm.constants';
import mdx from './ScoresPeriodForm.mdx';

export default {
  title: 'leemons/Scores/ScoresPeriodForm',
  parameters: {
    component: ScoresPeriodForm,
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

const Template = ({ ...props }) => {
  return <ScoresPeriodForm {...props} />;
};

export const Playground = Template.bind({});

Playground.args = {
  ...SCORES_PERIOD_FORM_DEFAULT_PROPS,
  fields: [
    { name: 'program', placeholder: 'Program', data: [], required: 'Required field' },
    { name: 'course', placeholder: 'All program', data: [], required: 'Required field' },
    { name: 'subject', placeholder: 'Select subject', data: [] },
  ],
  value: {
    program: null,
    course: null,
    subject: null,
    startDate: null,
    endDate: null,
  },
  labels: {
    startDate: 'Start date',
    endDate: 'End date',
    submit: 'Search',
  },
  errorMessages: {
    startDate: 'Required start date',
    endDate: 'Required end date',
  },
};

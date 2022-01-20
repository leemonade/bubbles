import React from 'react';
import { Box } from '@mantine/core';
import { SetupSubjects, SETUP_SUBJECTS_DEFAULT_PROPS } from './SetupSubjects';
import mdx from './SetupSubjects.mdx';

export default {
  title: 'leemons/AcademicPortfolio/Setup/Subjects',
  parameters: {
    component: SetupSubjects,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onNext: { action: 'onNext' },
    onPrevious: { action: 'onPrevious' },
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <SetupSubjects {...props}>{children}</SetupSubjects>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...SETUP_SUBJECTS_DEFAULT_PROPS,
  labels: {
    title: 'Subjects',
    standardDuration: 'Standard duration of the subjects',
    allSubjectsSameDuration: 'All subjects have the same duraction as the evaluation substage',
    numberOfSemesters: 'Number of semesters',
    periodName: 'Period name',
    knowledgeAreas: 'Knowledge areas abbreviation',
    maxKnowledgeAbbreviation: 'Max abbreviation length for areas:',
    maxKnowledgeAbbreviationIsOnlyNumbers: 'Only numbers',
    subjectsIDConfig: 'Subjects ID configuration',
    subjectsFirstDigit: 'First digit',
    subjectsDigits: 'Digits',
    buttonNext: 'Next',
    buttonPrev: 'Previous',
  },
  helps: {
    maxKnowledgeAbbreviation: '(i.e: MKTG, MATH, HIST…)',
  },
};

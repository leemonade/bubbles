import React from 'react';
import { Box } from '@mantine/core';
import { SetupBasicData, SETUP_BASIC_DATA_DEFAULT_PROPS } from './SetupBasicData';
import mdx from './SetupBasicData.mdx';

export default {
  title: 'leemons/AcademicPortfolio/Setup/BasicData',
  parameters: {
    component: SetupBasicData,
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
    // myBooleanProp: { control: { type: 'boolean' } },
    // mySelectProp: { options: ['Hello', 'World'], control: { type: 'select' } },
  },
};

const Template = ({ children, ...props }) => {
  return <SetupBasicData {...props}>{children}</SetupBasicData>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...SETUP_BASIC_DATA_DEFAULT_PROPS,
  labels: {
    creditSystem: 'No need for credit system',
    onlyOneGroup: 'This program has only one group of students',
    totalCredits: 'Total credits',
    groupsIDAbbrev: 'Groups ID Abbreviation',
    programAbbrev: 'Program abbreviation/acronym:',
    maxAbbrevGroups: 'Max abbreviation length for groups:',
    onlyNumbers: 'Only numbers',
    buttonNext: 'Next',
    buttonPrev: 'Previous',
  },
  descriptions: {
    totalCredits: 'Total credits',
    groupsIDAbbrev:
      'If you need to create more than one group of students (classrooms) per subject, this configuration allow you to define the alphanumeric ID format.',
  },
  placeholders: {
    programName: 'Program name',
    programAbbrev: 'HIGSxxxx',
  },
  helps: {
    programAbbrev: '(8 char. max)',
    maxAbbrevGroups: '(i.e: G01, G02, G03…)',
  },
  errorMessages: {
    programAbbrev: 'Program abbreviation is required',
    totalCredits: 'Total credits is required',
    programName: 'Program name is required',
  },
};

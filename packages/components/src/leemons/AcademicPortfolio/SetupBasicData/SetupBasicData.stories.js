import React from 'react';
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
    },
  },
  argTypes: {
    onNext: { action: 'onNext' },
  },
};

const Template = ({ children, ...props }) => {
  return <SetupBasicData {...props}>{children}</SetupBasicData>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...SETUP_BASIC_DATA_DEFAULT_PROPS,
  labels: {
    abbreviation: 'Program abbreviation/acronym:',
    creditSystem: 'No need for credit system',
    credits: 'Total credits',
    oneStudentGroup: 'This program has only one group of students',
    groupsIDAbbrev: 'Groups ID Abbreviation',
    maxGroupAbbreviation: 'Max abbreviation length for groups:',
    maxGroupAbbreviationIsOnlyNumbers: 'Only numbers',
    buttonNext: 'Next',
  },
  descriptions: {
    maxGroupAbbreviation:
      'If you need to create more than one group of students (classrooms) per subject, this configuration allow you to define the alphanumeric ID format.',
  },
  placeholders: {
    name: 'Program name',
    abbreviation: 'HIGSxxxx',
  },
  helps: {
    abbreviation: '(8 char. max)',
    maxGroupAbbreviation: '(i.e: G01, G02, G03…)',
  },
  errorMessages: {
    name: 'Program name is required',
    abbreviation: 'Program abbreviation is required',
    maxGroupAbbreviation: 'Max group abbreviation is required',
  },
};

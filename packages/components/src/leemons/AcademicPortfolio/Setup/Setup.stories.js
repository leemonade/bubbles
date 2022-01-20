import React from 'react';
import { Box } from '@mantine/core';
import { Setup, SETUP_DEFAULT_PROPS } from './Setup';
import mdx from './Setup.mdx';
import { SetupBasicData, SetupSubjects, SetupCourses } from '../';

export default {
  title: 'leemons/AcademicPortfolio',
  parameters: {
    component: Setup,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
    },
  },
  argTypes: {
    onNext: { action: 'next' },
    onPrev: { action: 'previous' },
    onSave: { action: 'save' },
  },
};

const Template = ({ children, ...props }) => {
  return <Setup {...props}>{children}</Setup>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...SETUP_DEFAULT_PROPS,
  title: 'Setup',
  buttonLabel: 'Save changes',
  data: [
    {
      label: 'Basic data',
      content: (
        <SetupBasicData
          labels={{
            abbreviation: 'Program abbreviation/acronym:',
            creditSystem: 'No need for credit system',
            credits: 'Total credits',
            oneStudentGroup: 'This program has only one group of students',
            groupsIDAbbrev: 'Groups ID Abbreviation',
            maxGroupAbbreviation: 'Max abbreviation length for groups:',
            maxGroupAbbreviationIsOnlyNumbers: 'Only numbers',
            buttonNext: 'Next',
          }}
          descriptions={{
            maxGroupAbbreviation:
              'If you need to create more than one group of students (classrooms) per subject, this configuration allow you to define the alphanumeric ID format.',
          }}
          placeholders={{
            name: 'Program name',
            abbreviation: 'HIGSxxxx',
          }}
          helps={{
            abbreviation: '(8 char. max)',
            maxGroupAbbreviation: '(i.e: G01, G02, G03…)',
          }}
          errorMessages={{
            name: 'Program name is required',
            abbreviation: 'Program abbreviation is required',
            maxGroupAbbreviation: 'Max group abbreviation is required',
          }}
        />
      ),
    },
    {
      label: 'Courses',
      content: (
        <SetupCourses
          labels={{
            title: 'Courses',
            oneCourseOnly: 'This program takes one course only',
            hideCoursesInTree: 'Hidden courses in the tree (not nested subjects behind courses)',
            moreThanOneAcademicYear:
              'The same subject may be offered in more than one academic year',
            maxNumberOfCourses: 'Number of courses',
            courseCredits: 'Credits per course',
            courseSubstage: 'Course substages',
            haveSubstagesPerCourse: 'No substages per course',
            numberOfSubstages: 'Number of substages',
            subtagesNames: 'Name the substages',
            useDefaultSubstagesName: 'Use the default name and abbreviation',
            maxSubstageAbbreviation: 'Max abbrevation length',
            maxSubstageAbbreviationIsOnlyNumbers: 'Only numbers',
            buttonNext: 'Next',
            buttonPrev: 'Previous',
          }}
          placeholders={{
            substagesFrequency: 'Select frequency...',
          }}
          errorMessages={{
            maxNumberOfCourses: 'Field required',
            courseCredits: 'Field required',
            substagesFrequency: 'Field required',
            numberOfSubstages: 'Field required',
            maxSubstageAbbreviation: 'Field required',
          }}
        />
      ),
    },
    {
      label: 'Subjects',
      content: (
        <SetupSubjects
          labels={{
            title: 'Subjects',
            standardDuration: 'Standard duration of the subjects',
            allSubjectsSameDuration:
              'All subjects have the same duraction as the evaluation substage',
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
          }}
          helps={{
            maxKnowledgeAbbreviation: '(i.e: MKTG, MATH, HIST…)',
          }}
        />
      ),
    },
  ],
};

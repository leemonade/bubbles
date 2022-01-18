import React from 'react';
import { Box } from '@mantine/core';
import { Stepper, STEPPER_DEFAULT_PROPS } from './Stepper';
import mdx from './Stepper.mdx';
import { SetupBasicData, SetupSubjects, SetupCourses } from '../../leemons/AcademicPortfolio/';

export default {
  title: 'Organisms/Navigation/Stepper',
  parameters: {
    component: Stepper,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onNext: { action: 'next' },
    onPrev: { action: 'previous' },
    onSave: { action: 'save' },
  },
};

const Template = ({ children, ...props }) => {
  return <Stepper {...props}>{children}</Stepper>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...STEPPER_DEFAULT_PROPS,
  title: 'Setup',
  buttonLabel: 'Save changes',
  data: [
    {
      label: 'Basic data',
      content: (
        <SetupBasicData
          labels={{
            creditSystem: 'No need for credit system',
            onlyOneGroup: 'This program has only one group of students',
            totalCredits: 'Total credits',
            groupsIDAbbrev: 'Groups ID Abbreviation',
            programAbbrev: 'Program abbreviation/acronym:',
            maxAbbrevGroups: 'Max abbreviation length for groups:',
            onlyNumbers: 'Only numbers',
            buttonNext: 'Next',
            buttonPrev: 'Previous',
          }}
          descriptions={{
            totalCredits: 'Total credits',
            groupsIDAbbrev:
              'If you need to create more than one group of students (classrooms) per subject, this configuration allow you to define the alphanumeric ID format.',
          }}
          placeholders={{
            programName: 'Program name',
            programAbbrev: 'HIGSxxxx',
          }}
          helps={{
            programAbbrev: '(8 char. max)',
            maxAbbrevGroups: '(i.e: G01, G02, G03…)',
          }}
          errorMessages={{
            programAbbrev: 'Program abbreviation is required',
            programName: 'Program name is required',
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
            hiddenCourse: 'Hidden courses in the three (not nested subjects behind courses)',
            moreThanOneAcademicYear:
              'The same subject may be offered in more than one academic year',
            numberOfCourses: 'Number of courses',
            creditsperCourse: 'Credits per course',
            courseSubstage: 'Course substages',
            noSubstage: 'No substages per course',
            numberOfSubstages: 'Number of substages',
            buttonNext: 'Next',
            buttonPrev: 'Previous',
            subtagesNames: 'Name the substages',
            nameAndAbbrev: 'Use the default name and abbreviation',
            maxAbbrevLength: 'Max abbrevation length',
            onlyNumbers: 'Only numbers',
          }}
          placeholders={{
            frequency: 'Select frequency...',
          }}
          errorMessages={{
            numberOfCourses: 'Field required',
            creditsperCourse: 'Field required',
            frequency: 'Field required',
            numberOfSubstages: 'Field required',
            maxAbbrevLength: 'Field required',
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
            maxAbbrevLength: 'Max abbreviation length for areas:',
            onlyNumbers: 'Only numbers',
            subjectsIDConfig: 'Subjects ID configuration',
            firstDigit: 'First digit',
            digits: 'Digits',
            buttonNext: 'Next',
            buttonPrev: 'Previous',
          }}
          helps={{
            maxAbbrevLength: '(i.e: MKTG, MATH, HIST…)',
          }}
          numberOfCourses={4}
        />
      ),
    },
  ],
};

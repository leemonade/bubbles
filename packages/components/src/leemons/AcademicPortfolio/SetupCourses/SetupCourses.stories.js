import React from 'react';
import { Box } from '@mantine/core';
import { SetupCourses, SETUP_COURSES_DEFAULT_PROPS } from './SetupCourses';
import mdx from './SetupCourses.mdx';

export default {
  title: 'leemons/AcademicPortfolio/Setup/Courses',
  parameters: {
    component: SetupCourses,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      //url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onPrevious: { action: 'onPrevious' },
    onNext: { action: 'onNext' },
  },
};

const Template = ({ children, ...props }) => {
  return <SetupCourses {...props}>{children}</SetupCourses>;
};

export const Playground = Template.bind({});

Playground.args = {
  ...SETUP_COURSES_DEFAULT_PROPS,
  labels: {
    title: 'Courses',
    oneCourseOnly: 'This program takes one course only',
    hiddenCourse: 'Hidden courses in the three (not nested subjects behind courses)',
    moreThanOneAcademicYear: 'The same subject may be offered in more than one academic year',
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
  },
  placeholders: {
    frequency: 'Select frequency...',
  },
  errorMessages: {
    numberOfCourses: 'Field required',
    creditsperCourse: 'Field required',
    frequency: 'Field required',
    numberOfSubstages: 'Field required',
    maxAbbrevLength: 'Field required',
  },
};

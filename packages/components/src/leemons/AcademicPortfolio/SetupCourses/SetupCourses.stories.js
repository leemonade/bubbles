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
    hideCoursesInTree: 'Hidden courses in the tree (not nested subjects behind courses)',
    moreThanOneAcademicYear: 'The same subject may be offered in more than one academic year',
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
  },
  placeholders: {
    substagesFrequency: 'Select frequency...',
  },
  errorMessages: {
    maxNumberOfCourses: 'Field required',
    courseCredits: 'Field required',
    substagesFrequency: 'Field required',
    numberOfSubstages: 'Field required',
    maxSubstageAbbreviation: 'Field required',
  },
};

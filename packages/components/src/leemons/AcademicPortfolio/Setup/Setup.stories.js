import React from 'react';
import { Box } from '../../../layout';
import { Setup, SETUP_DEFAULT_PROPS } from './Setup';
import mdx from './Setup.mdx';
import { SetupBasicData, SetupSubjects, SetupCourses } from '../';
import { BASIC_DATA, COURSES_DATA, SUBJECTS_DATA } from '../mocks/data';

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

const Template = ({ ...props }) => {
  return (
    <Box style={{ width: 560 }}>
      <Setup {...props} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...SETUP_DEFAULT_PROPS,
  labels: { title: 'Setup', buttonSave: 'Save changes' },
  data: [
    {
      label: 'Basic data',
      content: <SetupBasicData {...BASIC_DATA} />,
    },
    {
      label: 'Courses',
      content: <SetupCourses {...COURSES_DATA} />,
    },
    {
      label: 'Subjects',
      content: <SetupSubjects {...SUBJECTS_DATA} />,
    },
  ],
};

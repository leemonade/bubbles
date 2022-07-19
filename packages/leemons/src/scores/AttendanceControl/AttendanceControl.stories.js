import React from 'react';
import { Box } from '@bubbles-ui/components';
import { AttendanceControl } from './AttendanceControl';
import { ATTENDANCE_CONTROL_DEFAULT_PROPS } from './AttendanceControl.constants';
import mdx from './AttendanceControl.mdx';
import { DATA } from './mock/data';

export default {
  title: 'Molecules/Scores/AttendanceControl',
  parameters: {
    component: AttendanceControl,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onSave: { action: 'onSave' },
    onChange: { action: 'onChange' },
  },
};

const Template = ({ ...props }) => {
  return (
    <Box style={{ height: 'calc(100vh - 32px)' }}>
      <AttendanceControl {...props} />
    </Box>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...ATTENDANCE_CONTROL_DEFAULT_PROPS,
  labels: {
    backButton: 'Back',
    saveButton: 'Save report',
    attendanceControl: 'Control of attendance',
    allPresentSwitch: 'Set all as present',
  },
  classTitle: 'Biology - 3002 - 3ºB  (Session 17)',
  ...DATA,
};

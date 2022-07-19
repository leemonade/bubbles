import React from 'react';
import { Box, Button, Stack } from '@bubbles-ui/components';
import { AttendanceControlDrawer } from './AttendanceControlDrawer';
import { ATTENDANCE_CONTROL_DRAWER_DEFAULT_PROPS } from './AttendanceControlDrawer.constants';
import mdx from './AttendanceControlDrawer.mdx';
import { DATA } from '../AttendanceControl/mock/data';

export default {
  title: 'Molecules/Scores/AttendanceControlDrawer',
  parameters: {
    component: AttendanceControlDrawer,
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      // url: 'https://www.figma.com/file/kcSXz3QZFByFDTumNgzPpV/?node-id=2962%3A31342',
    },
  },
  argTypes: {
    onClose: { action: 'onClose' },
    onBack: { action: 'onBack' },
    onSave: { action: 'onSave' },
    onChange: { action: 'onChange' },
  },
};

const Template = ({ onClose, onBack, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <AttendanceControlDrawer
        {...props}
        opened={isOpen}
        onClose={() => {
          setIsOpen(false);
          onClose();
        }}
        onBack={() => {
          setIsOpen(false);
          onBack();
        }}
      />
      <Stack fullWidth justifyContent="center">
        <Box>
          <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
        </Box>
      </Stack>
    </>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  ...ATTENDANCE_CONTROL_DRAWER_DEFAULT_PROPS,
  labels: {
    backButton: 'Back',
    saveButton: 'Save report',
    attendanceControl: 'Control of attendance',
    allPresentSwitch: 'Set all as present',
  },
  classTitle: 'Biology - 3002 - 3ºB  (Session 17)',
  ...DATA,
};

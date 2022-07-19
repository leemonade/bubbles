import React from 'react';
import { Box, Drawer } from '@bubbles-ui/components';
import { AttendanceControlDrawerStyles } from './AttendanceControlDrawer.styles';
import {
  ATTENDANCE_CONTROL_DRAWER_DEFAULT_PROPS,
  ATTENDANCE_CONTROL_DRAWER_PROP_TYPES,
} from './AttendanceControlDrawer.constants';
import { AttendanceControl } from '../';
import { isFunction } from 'lodash';

const AttendanceControlDrawer = ({
  opened,
  onClose,
  onBack,
  labels,
  classTitle,
  students,
  value,
  onSave,
  onChange,
  ...props
}) => {
  const handleOnClose = () => {
    isFunction(onClose) && onClose();
  };

  const handleOnBack = () => {
    isFunction(onBack) && onBack();
  };

  const { classes, cx } = AttendanceControlDrawerStyles({}, { name: 'AttendanceControlDrawer' });
  return (
    <Drawer
      opened={opened}
      onClose={handleOnClose}
      className={classes.root}
      size={500}
      contentPadding={0}
      back={labels.backButton}
      onBack={handleOnBack}
    >
      <AttendanceControl
        fixedFooter={true}
        {...props}
        {...{ labels, classTitle, students, value, onSave, onChange }}
      />
    </Drawer>
  );
};

AttendanceControlDrawer.defaultProps = ATTENDANCE_CONTROL_DRAWER_DEFAULT_PROPS;
AttendanceControlDrawer.propTypes = ATTENDANCE_CONTROL_DRAWER_PROP_TYPES;

export { AttendanceControlDrawer };

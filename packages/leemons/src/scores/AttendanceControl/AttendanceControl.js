import React, { useEffect, useRef, useState } from 'react';
import { Box, Text, Switch, UserDisplayItem, Radio, Button } from '@bubbles-ui/components';
import { AttendanceControlStyles } from './AttendanceControl.styles';
import {
  ATTENDANCE_CONTROL_DEFAULT_PROPS,
  ATTENDANCE_CONTROL_PROP_TYPES,
} from './AttendanceControl.constants';
import {
  CheckCircleIcon,
  CommonFileSearchIcon,
  RemoveCircleIcon,
  TimeClockCircleIcon,
} from '@bubbles-ui/icons/outline';
import { isFunction } from 'lodash';

const AttendanceControl = ({
  labels,
  classTitle,
  students,
  value,
  fixedFooter,
  onSave,
  onChange,
  ...props
}) => {
  const [attendanceControl, setAttendanceControl] = useState(value);
  const [allPresent, setAllPresent] = useState(false);
  const [isFullScrolled, setIsFullScrolled] = useState(false);
  const controlWrapperRef = useRef();

  const checkAttendance = (attendance) => {
    return attendance.every(
      (val, index) =>
        val.studentId === attendanceControl[index].studentId &&
        val.status === attendanceControl[index].status
    );
  };

  const onChangeHandler = (status, studentIndex) => {
    const newAttendanceControl = [...attendanceControl];
    newAttendanceControl[studentIndex].status = status;
    setAttendanceControl(newAttendanceControl);
    isFunction(onChange) && onChange(newAttendanceControl);
  };

  const onSaveHandler = () => {
    isFunction(onSave) && onSave(attendanceControl);
  };

  const onScrollHandler = () => {
    const element = controlWrapperRef.current;
    const isScrolledToBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
    if (isFullScrolled !== isScrolledToBottom) setIsFullScrolled(isScrolledToBottom);
  };

  useEffect(() => {
    if (checkAttendance(value)) return;
    setAttendanceControl(value);
  }, [value]);

  const { classes, cx } = AttendanceControlStyles(
    { isFullScrolled, fixedFooter },
    { name: 'AttendanceControl' }
  );
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Text size="lg" color="primary" strong>
          {classTitle}
        </Text>
        <Text role="productive" color="quartiary" strong>
          {labels.attendanceControl}
        </Text>
      </Box>
      <Box ref={controlWrapperRef} className={classes.controlWrapper} onScroll={onScrollHandler}>
        <Box className={classes.stickyRow} style={{ paddingRight: 8 }}>
          <Box className={classes.leftSide} style={{ padding: 8 }}>
            <Switch
              label={labels.allPresentSwitch}
              labelPosition="start"
              size="md"
              value={allPresent}
              onChange={(value) => {
                setAllPresent(value);
                value &&
                  setAttendanceControl(
                    attendanceControl.map(({ studentId }) => ({ studentId, status: 1 }))
                  );
              }}
            />
          </Box>
          <Box className={classes.rightSide}>
            <CheckCircleIcon className={classes.presentIcon} />
            <CommonFileSearchIcon className={classes.excusedIcon} />
            <RemoveCircleIcon className={classes.absentIcon} />
            <TimeClockCircleIcon className={classes.lateIcon} />
          </Box>
        </Box>
        {students.map(({ name, avatar, id }, index) => {
          const studentAttendance = attendanceControl.find(({ studentId }) => studentId === id);
          return (
            <Box className={classes.controlRow} key={id}>
              <Box className={classes.leftSide} style={{ paddingLeft: 16 }}>
                <UserDisplayItem name={name} avatar={avatar} size="xs" />
              </Box>
              <Box className={classes.rightSide}>
                <Radio
                  name={id}
                  onChange={() => onChangeHandler(1, index)}
                  checked={studentAttendance?.status === 1}
                  disabled={allPresent}
                />
                <Radio
                  name={id}
                  onChange={() => onChangeHandler(2, index)}
                  checked={studentAttendance?.status === 2}
                  disabled={allPresent}
                />
                <Radio
                  name={id}
                  onChange={() => onChangeHandler(0, index)}
                  checked={studentAttendance?.status === 0}
                  disabled={allPresent}
                />
                <Radio
                  name={id}
                  onChange={() => onChangeHandler(3, index)}
                  checked={studentAttendance?.status === 3}
                  disabled={allPresent}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box className={classes.saveButtonWrapper}>
        <Button onClick={onSaveHandler}>{labels.saveButton}</Button>
      </Box>
    </Box>
  );
};

AttendanceControl.defaultProps = ATTENDANCE_CONTROL_DEFAULT_PROPS;
AttendanceControl.propTypes = ATTENDANCE_CONTROL_PROP_TYPES;

export { AttendanceControl };

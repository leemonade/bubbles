import React, { useEffect, useState } from 'react';
import { Box, Text, Button, Switch, DatePicker } from '@bubbles-ui/components';
import { EditActivityBarStyles } from './EditActivityBar.styles';
import {
  EDIT_ACTIVITY_BAR_DEFAULT_PROPS,
  EDIT_ACTIVITY_BAR_PROP_TYPES,
} from './EditActivityBar.constants';
import { EditWriteIcon } from '@bubbles-ui/icons/solid';
import { isFunction } from 'lodash';
import { EditDeadline } from './EditDeadline';
import * as dayjs from 'dayjs';

const EditActivityBar = ({
  labels,
  startDate,
  deadline,
  locale,
  closed,
  archived,
  disableClose,
  disableArchive,
  hideClose,
  hideArchive,
  onStartDateChange,
  onDeadlineChange,
  onCloseTask,
  onArchiveTask,
  isStarted,
  styles,
  className,
  ...props
}) => {
  const [startDateValue, setStartDateValue] = useState(startDate ? new Date(startDate) : null);
  const [deadlineValue, setDeadlineValue] = useState(deadline ? new Date(deadline) : null);
  const [deadlineExpanded, setDeadlineExpanded] = useState(false);

  const onDateChange = (type, date) => {
    if (type === 'start') {
      setStartDateValue(date);
      return;
    }
    if (type === 'deadline') {
      setDeadlineValue(date);
      return;
    }
  };

  const onHourChange = (type, { hours, minutes }) => {
    if (type === 'start') {
      const newDate = startDateValue;
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      setStartDateValue(newDate);
      return;
    }
    if (type === 'deadline') {
      const newDate = deadlineValue;
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      setDeadlineValue(newDate);
      return;
    }
  };

  const saveDates = () => {
    if (startDateValue?.toISOString() !== new Date(startDate).toISOString()) {
      isFunction(onStartDateChange) && onStartDateChange(startDateValue ? startDateValue : null);
    }
    if (deadlineValue?.toISOString() !== new Date(deadline).toISOString()) {
      isFunction(onDeadlineChange) && onDeadlineChange(deadlineValue ? deadlineValue : null);
    }
    setDeadlineExpanded(false);
  };

  const onCloseTaskHandler = (value) => {
    isFunction(onCloseTask) && onCloseTask(value);
  };

  const onArchiveTaskHandler = (value) => {
    isFunction(onArchiveTask) && onArchiveTask(value);
  };

  const addDays = (days) => {
    const newDate = new Date(deadlineValue);
    newDate.setDate(newDate.getDate() + days);
    isFunction(onDeadlineChange) && onDeadlineChange(newDate);
  };

  useEffect(() => {
    if (deadline === null && !dayjs(deadlineValue).isSame(deadline)) {
      setDeadlineValue(null);
    } else if (!dayjs(deadlineValue).isSame(deadline)) {
      setDeadlineValue(new Date(deadline));
    }
  }, [new Date(deadline).toISOString()]);

  useEffect(() => {
    if (startDate === null && !dayjs(startDateValue).isSame(startDate)) {
      setStartDateValue(null);
    } else if (!dayjs(startDateValue).isSame(startDate)) {
      setStartDateValue(new Date(startDate));
    }
  }, [new Date(startDate).toISOString()]);

  const { classes, cx } = EditActivityBarStyles({ styles }, { name: 'TaskDeadlineHeader' });
  return (
    <Box className={cx(classes.root, className)}>
      <Box className={classes.deadlineWrapper}>
        <Box className={classes.deadline}>
          {deadline ? (
            <Text className={classes.label}>{labels.deadline}</Text>
          ) : (
            <Text>{labels?.noDeadline}</Text>
          )}
          {deadline && (
            <Text className={classes.deadlineDate}>{deadline?.toLocaleDateString(locale)}</Text>
          )}
          <EditDeadline
            opened={deadlineExpanded}
            target={
              <Box style={{ height: 20, width: 20 }}>
                <EditWriteIcon
                  className={classes.deadlineIcon}
                  height={20}
                  width={20}
                  onClick={() => setDeadlineExpanded(!deadlineExpanded)}
                />
              </Box>
            }
            labels={labels}
            startDate={startDateValue}
            endDate={deadlineValue}
            originalStart={startDate}
            originalEnd={deadline}
            onDateChange={onDateChange}
            onHourChange={onHourChange}
            cancelSave={() => setDeadlineExpanded(false)}
            saveDates={saveDates}
            onClose={() => setDeadlineExpanded(false)}
            isStarted={isStarted}
            locale={locale}
          />
        </Box>
        {deadline && (
          <Box className={classes.deadlineExtraTime}>
            <Text className={classes.label}>{labels.deadlineExtraTime}</Text>
            <Button variant="outline" size="sm" onClick={() => addDays(1)}>
              {labels.addOneDay}
            </Button>
            <Button variant="outline" size="sm" onClick={() => addDays(7)}>
              {labels.addSevenDays}
            </Button>
          </Box>
        )}

        <Box className={classes.deadlineSwitch}>
          {!hideClose && (
            <Switch
              size="md"
              label={labels.closeTask}
              onChange={onCloseTaskHandler}
              disabled={disableClose}
              checked={closed}
            />
          )}

          {!hideArchive && (
            <Switch
              size="md"
              label={labels.archiveTask}
              onChange={onArchiveTaskHandler}
              disabled={disableArchive}
              checked={archived}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

EditActivityBar.defaultProps = EDIT_ACTIVITY_BAR_DEFAULT_PROPS;
EditActivityBar.propTypes = EDIT_ACTIVITY_BAR_PROP_TYPES;

export { EditActivityBar };

import React, { useEffect, useState } from 'react';
import { Box, Text, Button, Switch, DatePicker } from '@bubbles-ui/components';
import { TaskDeadlineHeaderStyles } from './TaskDeadlineHeader.styles';
import {
  TASK_DEADLINE_HEADER_DEFAULT_PROPS,
  TASK_DEADLINE_HEADER_PROP_TYPES,
} from './TaskDeadlineHeader.constants';
import { EditWriteIcon } from '@bubbles-ui/icons/solid';
import { isFunction } from 'lodash';
import { TaskHeader } from '../TaskHeader/TaskHeader';
import { EditDeadline } from './EditDeadline';
import * as dayjs from 'dayjs';

const TaskDeadlineHeader = ({
  labels,
  title,
  subtitle,
  icon,
  color,
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

  const { classes, cx } = TaskDeadlineHeaderStyles(
    { color, styles },
    { name: 'TaskDeadlineHeader' }
  );
  return (
    <Box className={cx(classes.root, className)}>
      <TaskHeader title={title} subtitle={subtitle} icon={icon} color={color} />
      <Box className={classes.deadlineWrapper}>
        {deadline ? (
          <>
            <Box className={classes.deadline}>
              <Text className={classes.textColor}>{labels.deadline}</Text>
              <Text className={classes.deadlineDate}>{deadline?.toLocaleDateString(locale)}</Text>
              <EditDeadline
                opened={deadlineExpanded}
                target={
                  <Box>
                    <EditWriteIcon
                      className={classes.deadlineIcon}
                      height={16}
                      width={16}
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
            <Box className={classes.deadlineExtraTime}>
              <Text className={classes.textColor}>{labels.deadlineExtraTime}</Text>
              <Button variant="outline" size="sm" onClick={() => addDays(1)}>
                +1d
              </Button>
              <Button variant="outline" size="sm" onClick={() => addDays(7)}>
                +7d
              </Button>
            </Box>
          </>
        ) : (
          <Box className={classes.deadline}>
            <Text>{labels?.noDeadline}</Text>
            <EditDeadline
              opened={deadlineExpanded}
              target={
                <Box>
                  <EditWriteIcon
                    className={classes.deadlineIcon}
                    height={16}
                    width={16}
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

TaskDeadlineHeader.defaultProps = TASK_DEADLINE_HEADER_DEFAULT_PROPS;
TaskDeadlineHeader.propTypes = TASK_DEADLINE_HEADER_PROP_TYPES;

export { TaskDeadlineHeader };

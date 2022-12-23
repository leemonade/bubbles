import React from 'react';
import { Box, Popover, Select, DatePicker, TimeInput, Button } from '@bubbles-ui/components';
import { EditDeadlineStyles } from './EditDeadline.styles';
import { EDIT_DEADLINE_DEFAULT_PROPS, EDIT_DEADLINE_PROP_TYPES } from './EditDeadline.constants';
import { TimeClockCircleIcon } from '@bubbles-ui/icons/outline';

const EditDeadline = ({
  opened,
  target,
  labels,
  startDate,
  endDate,
  onDateChange,
  onHourChange,
  cancelSave,
  saveDates,
  isStarted,
  ...props
}) => {
  const { classes, cx } = EditDeadlineStyles({}, { name: 'EditDeadline' });

  const getHoursAndMinutes = (date) => {
    return { hours: date.getHours(), minutes: date.getMinutes() };
  };

  const today = new Date();
  const endDateMin = isStarted ? (today > startDate ? today : startDate) : startDate;

  return (
    <Popover opened={opened} target={target} offset={21} position={'bottom'} {...props}>
      <Box className={classes.root}>
        <Box className={classes.formWrapper}>
          <Select label={labels.period} />
          <Box className={classes.inputRow}>
            <DatePicker
              size="sm"
              label={labels.startDate}
              value={startDate}
              onChange={(date) => onDateChange('start', date)}
              minDate={today}
              disabled={isStarted}
            />
            <TimeInput
              size="sm"
              icon={<TimeClockCircleIcon />}
              label={labels.startHour}
              value={startDate}
              onChange={(date) => onHourChange('start', getHoursAndMinutes(date))}
              disabled={isStarted}
            />
          </Box>
          <Box className={classes.inputRow}>
            <DatePicker
              size="sm"
              label={labels.endDate}
              value={endDate}
              onChange={(date) => onDateChange('deadline', date)}
              minDate={endDateMin}
            />
            <TimeInput
              size="sm"
              icon={<TimeClockCircleIcon />}
              label={labels.endHour}
              value={endDate}
              onChange={(date) => onHourChange('deadline', getHoursAndMinutes(date))}
            />
          </Box>
        </Box>
        <Box className={classes.buttonWrapper}>
          <Button variant="light" onClick={cancelSave}>
            {labels.cancel}
          </Button>
          <Button onClick={saveDates}>{labels.save}</Button>
        </Box>
      </Box>
    </Popover>
  );
};

EditDeadline.defaultProps = EDIT_DEADLINE_DEFAULT_PROPS;
EditDeadline.propTypes = EDIT_DEADLINE_PROP_TYPES;

export { EditDeadline };

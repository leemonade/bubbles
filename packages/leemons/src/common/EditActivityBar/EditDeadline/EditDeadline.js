import React, { useEffect, useMemo, useState } from 'react';
import { Box, Popover, Select, DatePicker, TimeInput, Button } from '@bubbles-ui/components';
import { EditDeadlineStyles } from './EditDeadline.styles';
import { EDIT_DEADLINE_DEFAULT_PROPS, EDIT_DEADLINE_PROP_TYPES } from './EditDeadline.constants';
import { TimeClockCircleIcon } from '@bubbles-ui/icons/outline';
import * as dayjs from 'dayjs';

const usePeriodValue = (startDate, endDate, originalStart, originalEnd) => {
  const isSameDay = dayjs(startDate).isSame(endDate, 'day');
  const [periodValue, setPeriodValue] = useState(
    !endDate ? 'openPeriod' : isSameDay ? 'liveSession' : 'closedPeriod'
  );

  useEffect(() => {
    const isSameDay = dayjs(originalStart).isSame(originalEnd, 'day');
    const newValue = !originalEnd ? 'openPeriod' : isSameDay ? 'liveSession' : 'closedPeriod';
    setPeriodValue(newValue);
  }, [originalStart?.toISOString(), originalEnd?.toISOString()]);

  return [periodValue, setPeriodValue];
};

const EditDeadline = ({
  opened,
  target,
  labels,
  startDate,
  endDate,
  originalStart,
  originalEnd,
  onDateChange,
  onHourChange,
  cancelSave,
  saveDates,
  isStarted,
  locale,
  ...props
}) => {
  const [periodValue, setPeriodValue] = usePeriodValue(
    startDate,
    endDate,
    originalStart,
    originalEnd
  );
  const isClosedPeriodSelected = periodValue === 'closedPeriod';
  const isOpenPeriodSelected = periodValue === 'openPeriod';

  const today = new Date();
  const endDateMin = isStarted ? (today > startDate ? today : startDate) : startDate;

  const getHoursAndMinutes = (date) => {
    return { hours: date.getHours(), minutes: date.getMinutes() };
  };

  const handlePeriodChange = (value) => {
    if (value === 'openPeriod') {
      onDateChange('start', null);
      onDateChange('deadline', null);
    }
    if (value === 'liveSession') {
      const newStart = originalStart ? originalStart : startDate ? startDate : new Date();
      const newDeadline = new Date(newStart);
      newDeadline.setHours(23);
      newDeadline.setMinutes(59);
      onDateChange('start', newStart);
      onDateChange('deadline', newDeadline);
    }
    if (value === 'closedPeriod') {
      onDateChange('start', originalStart ? originalStart : startDate ? startDate : new Date());
      const newDeadline = originalEnd ? originalEnd : endDate ? endDate : new Date();
      if (!originalEnd) newDeadline.setDate(newDeadline.getDate() + 1);
      onDateChange('deadline', newDeadline);
    }
    setPeriodValue(value);
  };

  const { classes, cx } = EditDeadlineStyles({}, { name: 'EditDeadline' });
  return (
    <Popover opened={opened} target={target} offset={21} position={'bottom'} {...props}>
      <Box className={classes.root}>
        <Box className={classes.formWrapper}>
          <Select
            data={[
              { label: labels.openPeriod, value: 'openPeriod' },
              { label: labels.closedPeriod, value: 'closedPeriod' },
              { label: labels.liveSession, value: 'liveSession' },
            ]}
            label={isClosedPeriodSelected ? labels.period : labels.liveSessionDate}
            value={periodValue}
            onChange={handlePeriodChange}
          />
          {!isOpenPeriodSelected && (
            <Box className={classes.inputRow}>
              <DatePicker
                size="sm"
                label={labels.startDate}
                value={startDate}
                onChange={(date) => onDateChange('start', date)}
                minDate={today}
                disabled={isStarted}
                locale={locale}
                contentClassName={isClosedPeriodSelected ? classes.inputHeader : ''}
              />
              {isClosedPeriodSelected && (
                <TimeInput
                  size="sm"
                  icon={<TimeClockCircleIcon />}
                  label={labels.startHour}
                  value={startDate}
                  onChange={(date) => onHourChange('start', getHoursAndMinutes(date))}
                  disabled={isStarted}
                  locale={locale}
                />
              )}
            </Box>
          )}
          {!isOpenPeriodSelected && (
            <Box className={classes.inputRow}>
              {isClosedPeriodSelected && (
                <DatePicker
                  size="sm"
                  label={labels.endDate}
                  value={endDate}
                  onChange={(date) => onDateChange('deadline', date)}
                  minDate={endDateMin}
                  locale={locale}
                  contentClassName={classes.inputHeader}
                />
              )}
              {!isClosedPeriodSelected && (
                <TimeInput
                  size="sm"
                  icon={<TimeClockCircleIcon />}
                  label={labels.startHour}
                  value={startDate}
                  onChange={(date) => onHourChange('start', getHoursAndMinutes(date))}
                  disabled={isStarted}
                  locale={locale}
                />
              )}
              <TimeInput
                size="sm"
                icon={<TimeClockCircleIcon />}
                label={labels.endHour}
                value={endDate}
                onChange={(date) => onHourChange('deadline', getHoursAndMinutes(date))}
                locale={locale}
              />
            </Box>
          )}
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

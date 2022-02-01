import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ScheduleFormStyles } from './ScheduleForm.styles';
import {
  Box,
  Stack,
  CheckBoxGroup,
  TimeInput,
  Checkbox,
  Button,
  Text,
  Switch,
  DatePicker,
} from '@bubbles-ui/components';
import { isFunction } from 'lodash';
import { useEffect } from 'react';

export const SCHEDULE_FORM_DEFAULT_PROPS = {};
export const SCHEDULE_FORM_PROP_TYPES = {};

const ScheduleForm = ({
  labels,
  placeholders,
  errorMessages,
  localeWeekdays,
  setOpenForm,
  onChange,
  savedSchedule,
  oneScheduleOnly,
  setOneScheduleOnly,
  oneDayOnlyValue,
  setOneDayOnlyValue,
  ...props
}) => {
  const { classes, cx } = ScheduleFormStyles({});

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  const [selectedDays, setSelectedDays] = useState([]);
  const [useCustomDates, setUseCustomDates] = useState(savedSchedule.useCustomDates || false);
  const [startDate, setStartDate] = useState(savedSchedule.startDate || null);
  const [endDate, setEndDate] = useState(savedSchedule.endDate || null);
  const [invalidDates, setInvalidDates] = useState(false);
  const [schedule, setSchedule] = useState({ days: [] });

  const dateToHoursAndMinutes = (date) => {
    return date.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const dayToSchedule = (mapDay, day) => ({
    start: dateToHoursAndMinutes(day.start),
    end: dateToHoursAndMinutes(day.end),
    duration: Math.floor((day.end - day.start) / 60000),
    day: days[mapDay.index],
    dayWeek: mapDay.index,
  });

  const compareWeekdays = (a, b) => {
    if (a.index < b.index) return -1;
    if (a.index > b.index) return 1;
    return 0;
  };

  const validateSchedule = () => {
    let isValid = true;
    const errorPositions = [];
    schedule.days.forEach((day, index) => {
      if (day.duration <= 0) {
        isValid = false;
        if (oneScheduleOnly) {
          oneDayOnlyValue.error = true;
        } else {
          errorPositions.push(index);
        }
      }
    });
    for (const position of errorPositions) {
      selectedDays[position].error = true;
    }
    if (useCustomDates) {
      if (startDate > endDate || startDate === endDate || !startDate || !endDate) {
        isValid = false;
        setInvalidDates(true);
      }
    }
    setSelectedDays([...selectedDays]);
    return isValid;
  };

  const handleOnChange = (sendEmpty) => {
    if (sendEmpty) {
      isFunction(onChange) && onChange({ days: [] });
      setOneDayOnlyValue({
        start: new Date(),
        end: new Date(),
        error: false,
      });
      setOpenForm(false);
    } else {
      if (!validateSchedule()) return;
      isFunction(onChange) && onChange(schedule);
      setOpenForm(false);
    }
  };

  useEffect(() => {
    setSelectedDays(
      selectedDays.map((day) => ({
        ...day,
        start: day.start || oneDayOnlyValue.start,
        end: day.end || oneDayOnlyValue.end,
      }))
    );
  }, [oneScheduleOnly]);

  useEffect(() => {
    oneScheduleOnly
      ? setSchedule({
          days: selectedDays.map((day) => dayToSchedule(day, oneDayOnlyValue)),
          startDate,
          endDate,
          useCustomDates,
        })
      : setSchedule({
          days: selectedDays.map((day) => dayToSchedule(day, day)),
          startDate,
          endDate,
          useCustomDates,
        });
  }, [selectedDays, oneDayOnlyValue, startDate, endDate, useCustomDates]);

  useEffect(() => {
    setSelectedDays(
      savedSchedule.days.map((day) => ({
        start: new Date(`01/01/1970 ${day.start}`),
        end: new Date(`01/01/1970 ${day.end}`),
        error: false,
        index: day.dayWeek,
      }))
    );
  }, [savedSchedule]);

  return (
    <Box>
      <Stack direction={'column'} spacing={2} className={classes.root}>
        <CheckBoxGroup
          label={labels.groupLabel}
          orientation={'horizontal'}
          variant={'boxed'}
          data={localeWeekdays.map((day, index) => ({
            ...day,
            checked: savedSchedule.days.some((savedDay) => savedDay.dayWeek === index),
          }))}
          onChange={(e) => {
            const orderedDays = e.map((day) => {
              return {
                ...day,
                start:
                  selectedDays.find((selectedDay) => selectedDay.index === day.index)?.start ||
                  oneDayOnlyValue.start,
                end:
                  selectedDays.find((selectedDay) => selectedDay.index === day.index)?.end ||
                  oneDayOnlyValue.end,
                error: false,
              };
            });
            orderedDays.sort(compareWeekdays);
            setSelectedDays([...orderedDays]);
          }}
          headerStyle={{ minWidth: 120 }}
        />
        <Checkbox
          label={labels.checkboxLabel}
          checked={oneScheduleOnly}
          onChange={setOneScheduleOnly}
          style={{ marginLeft: 120 }}
        />
        {oneScheduleOnly ? (
          <Box className={classes.scheduleRow}>
            <TimeInput
              label={labels.schedule}
              orientation={'horizontal'}
              headerStyle={{ width: 120 }}
              contentStyle={{ width: 75, flex: 'none' }}
              value={oneDayOnlyValue.start}
              onChange={(e) => {
                setOneDayOnlyValue({
                  ...oneDayOnlyValue,
                  start: e,
                });
              }}
            />
            <Text className={classes.divider}>{labels.divider}</Text>
            <TimeInput
              orientation={'horizontal'}
              contentStyle={{ width: 75 }}
              value={oneDayOnlyValue.end}
              onChange={(e) =>
                setOneDayOnlyValue({
                  ...oneDayOnlyValue,
                  end: e,
                })
              }
            />
            <Text className={classes.error}>
              {oneDayOnlyValue.error && errorMessages.invalidSchedule}
            </Text>
          </Box>
        ) : (
          selectedDays.map((day, index) => (
            <Box key={localeWeekdays[index].day} className={classes.scheduleRow}>
              <TimeInput
                label={`${labels.schedule} ${localeWeekdays[day.index].day}`}
                orientation={'horizontal'}
                headerStyle={{ width: 120 }}
                contentStyle={{ width: 75, flex: 'none' }}
                value={selectedDays[index].start}
                onChange={(e) => {
                  selectedDays[index].start = e;
                  setSelectedDays([...selectedDays]);
                }}
              />
              <Text className={classes.divider}>{labels.divider}</Text>
              <TimeInput
                orientation={'horizontal'}
                contentStyle={{ width: 75 }}
                value={selectedDays[index].end}
                onChange={(e) => {
                  selectedDays[index].end = e;
                  setSelectedDays([...selectedDays]);
                }}
              />
              <Text className={classes.error}>{day.error && errorMessages.invalidSchedule}</Text>
            </Box>
          ))
        )}
        <Switch
          label={labels.useCustomDates}
          onChange={setUseCustomDates}
          checked={useCustomDates}
        />
        {useCustomDates && (
          <Box>
            <DatePicker
              label={labels.startDate}
              placeholder={placeholders.startDate}
              onChange={setStartDate}
              error={invalidDates ? errorMessages.invalidDates : ''}
              value={startDate}
            />
            <DatePicker
              label={labels.endDate}
              placeholder={placeholders.endDate}
              onChange={setEndDate}
              error={invalidDates ? errorMessages.invalidDates : ''}
              value={endDate}
            />
          </Box>
        )}
      </Stack>
      <Stack justifyContent="space-between" fullWidth>
        <Button
          variant="light"
          color="secondary"
          size="xs"
          compact
          onClick={() => handleOnChange(true)}
        >
          Clear
        </Button>
        <Button variant="light" size="xs" compact onClick={() => handleOnChange(false)}>
          Apply
        </Button>
      </Stack>
    </Box>
  );
};

ScheduleForm.defaultProps = SCHEDULE_FORM_DEFAULT_PROPS;
ScheduleForm.propTypes = SCHEDULE_FORM_PROP_TYPES;

export { ScheduleForm };

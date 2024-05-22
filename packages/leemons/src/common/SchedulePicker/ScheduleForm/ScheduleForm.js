import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { find, isArray, noop } from 'lodash';
import {
  Box,
  Button,
  CheckBoxGroup,
  ContextContainer,
  DatePicker,
  InputError,
  Stack,
  Switch,
  Text,
  TimeInput,
} from '@bubbles-ui/components';
import { ScheduleFormStyles } from './ScheduleForm.styles';

export const SCHEDULE_FORM_DEFAULT_PROPS = {
  displayCustomDays: false,
};
export const SCHEDULE_FORM_PROP_TYPES = {
  displayCustomDays: PropTypes.bool,
  onChange: PropTypes.func,
  savedSchedule: PropTypes.any,
  firstDayOfWeek: PropTypes.number,
  localeWeekdays: PropTypes.array,
  labels: PropTypes.object,
  placeholders: PropTypes.object,
  errorMessages: PropTypes.object,
  setOpenForm: PropTypes.func,
};

const TIME_INPUT_WIDTH = 85;

// ------------------------------------------------------------------------------------------
// HELPERS

const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const NOW = new Date();

const dateToHoursAndMinutes = (date) =>
  date.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

function diffMinutes(dt2, dt1) {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}

const dayToSchedule = (mapDay, day, firstDayOfWeek) => {
  day.start.setSeconds(0, 0);
  day.end.setSeconds(0, 0);

  return {
    id: mapDay.id || day.id,
    start: dateToHoursAndMinutes(day.start),
    end: dateToHoursAndMinutes(day.end),
    duration: diffMinutes(day.start, day.end),
    day: DAYS[mapDay.index],
    dayWeek: mapDay.index,
  };
};

const compareWeekdays = (a, b) => {
  if (a.index < b.index) return -1;
  if (a.index > b.index) return 1;
  return 0;
};

const hasMultipleSchedules = (days) => {
  let multiple = false;
  if (isArray(days) && days.length > 1) {
    const { start, end } = days[0];
    for (let i = 1, l = days.length; i < l; i++) {
      const day = days[i];
      if (start !== day.start || end !== day.end) {
        multiple = true;
        break;
      }
    }
  }
  return multiple;
};

// ------------------------------------------------------------------------------------------
// COMPONENT

const ScheduleForm = ({
  labels,
  placeholders,
  errorMessages,
  localeWeekdays,
  setOpenForm,
  firstDayOfWeek,
  savedSchedule,
  displayCustomDays,
  onChange = noop,
}) => {
  const { classes } = ScheduleFormStyles({}, { name: 'ScheduleForm' });

  const [selectedDays, setSelectedDays] = useState([]);
  const [useCustomDates, setUseCustomDates] = useState(savedSchedule.useCustomDates || false);
  const [startDate, setStartDate] = useState(savedSchedule.startDate || null);
  const [endDate, setEndDate] = useState(savedSchedule.endDate || null);
  const [invalidDates, setInvalidDates] = useState(false);
  const [schedule, setSchedule] = useState(savedSchedule || { days: [] });
  const [oneScheduleOnly, setOneScheduleOnly] = useState(
    !hasMultipleSchedules(savedSchedule?.days),
  );
  const [oneDayOnlyValue, setOneDayOnlyValue] = useState({
    start: NOW,
    end: new Date(new Date().setHours(NOW.getHours() + 1)),
    error: false,
  });

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
    errorPositions.forEach((position) => {
      selectedDays[position].error = true;
    });
    if (
      useCustomDates &&
      (startDate > endDate || startDate === endDate || !startDate || !endDate)
    ) {
      isValid = false;
      setInvalidDates(true);
    }
    setSelectedDays([...selectedDays]);
    return isValid;
  };

  const handleOnChange = (sendEmpty) => {
    if (sendEmpty) {
      onChange({ days: [] });
      setOneDayOnlyValue({
        start: new Date(),
        end: new Date(),
        error: false,
      });
      setOpenForm(false);
    } else {
      if (!validateSchedule()) return;

      onChange(schedule);
      setOpenForm(false);
    }
  };

  useEffect(() => {
    setSelectedDays(
      selectedDays.map((day) => ({
        ...day,
        start: day.start || oneDayOnlyValue.start,
        end: day.end || oneDayOnlyValue.end,
      })),
    );
  }, [oneScheduleOnly]);

  useEffect(() => {
    if (oneScheduleOnly) {
      setSchedule({
        days: selectedDays.map((day) => dayToSchedule(day, oneDayOnlyValue, firstDayOfWeek)),
        startDate,
        endDate,
        useCustomDates,
      });
    } else {
      setSchedule({
        days: selectedDays.map((day) => dayToSchedule(day, day, firstDayOfWeek)),
        startDate,
        endDate,
        useCustomDates,
      });
    }
  }, [selectedDays, oneDayOnlyValue, startDate, endDate, useCustomDates]);

  useEffect(() => {
    setSelectedDays(
      savedSchedule.days.map((day) => ({
        id: day.id,
        start: new Date(`01/01/1970 ${day.start}`),
        end: new Date(`01/01/1970 ${day.end}`),
        error: false,
        index: day.dayWeek, // (day.dayWeek + firstDayOfWeek) % 6,
      })),
    );
  }, [savedSchedule]);

  return (
    <Box style={{ maxWidth: 622 }}>
      <ContextContainer padded sx={(theme) => ({ paddingBottom: theme.spacing[3] })}>
        <CheckBoxGroup
          size="xs"
          label={labels.groupLabel}
          // variant={'boxed'}
          data={localeWeekdays.map((day) => ({
            ...day,
            checked: schedule.days.some((savedDay) => savedDay.dayWeek === day.value.index),
          }))}
          onChange={(e) => {
            const orderedDays = e.map((day) => ({
              ...day,
              id:
                selectedDays.find((selectedDay) => selectedDay.index === day.index)?.id ||
                undefined,
              start:
                selectedDays.find((selectedDay) => selectedDay.index === day.index)?.start ||
                oneDayOnlyValue.start,
              end:
                selectedDays.find((selectedDay) => selectedDay.index === day.index)?.end ||
                oneDayOnlyValue.end,
              error: false,
            }));
            orderedDays.sort(compareWeekdays);
            setSelectedDays([...orderedDays]);
          }}
        />
        <Switch
          size="sm"
          label={labels.checkboxLabel}
          checked={oneScheduleOnly}
          onChange={setOneScheduleOnly}
        />
        {selectedDays.length > 0 && (
          <>
            {oneScheduleOnly ? (
              <Stack direction="column" spacing={2}>
                <Text role="productive" color="primary" size="xs" strong>
                  {labels.schedule}
                </Text>
                <Box className={classes.scheduleRow}>
                  <TimeInput
                    size="xs"
                    contentStyle={{ width: TIME_INPUT_WIDTH }}
                    value={oneDayOnlyValue.start}
                    onChange={(e) => {
                      setOneDayOnlyValue({
                        ...oneDayOnlyValue,
                        start: e,
                      });
                    }}
                  />
                  <Text size="xs" role="productive" className={classes.divider}>
                    {labels.divider}
                  </Text>
                  <TimeInput
                    size="xs"
                    contentStyle={{ width: TIME_INPUT_WIDTH }}
                    value={oneDayOnlyValue.end}
                    onChange={(e) =>
                      setOneDayOnlyValue({
                        ...oneDayOnlyValue,
                        end: e,
                      })
                    }
                  />
                </Box>
                {oneDayOnlyValue.error && <InputError message={errorMessages.invalidSchedule} />}
              </Stack>
            ) : (
              <ContextContainer direction="row" wrap="wrap" fullWidth={false}>
                {selectedDays.map((day, index) => (
                  <Stack direction="column" spacing={2} key={localeWeekdays[index].day}>
                    <Text size="xs" role="productive" color="primary" strong>{`${labels.schedule} ${
                      find(localeWeekdays, { value: { index: day.index } })?.day
                    }`}</Text>
                    <Box className={classes.scheduleRow}>
                      <TimeInput
                        size="xs"
                        contentStyle={{ width: TIME_INPUT_WIDTH }}
                        value={selectedDays[index].start}
                        onChange={(e) => {
                          selectedDays[index].start = e;
                          setSelectedDays([...selectedDays]);
                        }}
                      />
                      <Text size="xs" role="productive" className={classes.divider}>
                        {labels.divider}
                      </Text>
                      <TimeInput
                        size="xs"
                        contentStyle={{ width: TIME_INPUT_WIDTH }}
                        value={selectedDays[index].end}
                        onChange={(e) => {
                          selectedDays[index].end = e;
                          setSelectedDays([...selectedDays]);
                        }}
                      />
                    </Box>
                    {day.error && <InputError message={errorMessages.invalidSchedule} />}
                  </Stack>
                ))}
              </ContextContainer>
            )}
          </>
        )}
        {(useCustomDates || displayCustomDays) && (
          <>
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
          </>
        )}
      </ContextContainer>
      <Box sx={(theme) => ({ padding: `0 ${theme.spacing[4]}px ${theme.spacing[4]}px 0` })}>
        <Stack justifyContent="end" fullWidth spacing={4}>
          <Button variant="link" color="secondary" size="sm" onClick={() => handleOnChange(true)}>
            {labels.clear}
          </Button>
          <Button size="sm" onClick={() => handleOnChange(false)}>
            {labels.apply}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

ScheduleForm.defaultProps = SCHEDULE_FORM_DEFAULT_PROPS;
ScheduleForm.propTypes = SCHEDULE_FORM_PROP_TYPES;

export { ScheduleForm };

import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { isFunction, isEmpty } from 'lodash';
import {
  Input,
  InputWrapper,
  useId,
  INPUT_WRAPPER_SIZES,
  INPUT_WRAPPER_ORIENTATIONS,
  Badge,
  Popover,
  Box,
} from '@bubbles-ui/components';
import { PluginCalendarIcon } from '@bubbles-ui/icons/outline';
import { ScheduleForm } from './ScheduleForm/';
import { SchedulePickerStyles } from './SchedulePicker.styles';

export const SCHEDULE_PICKER_DEFAULT_PROPS = {
  locale: 'es',
  labels: {},
  placeholders: {},
  helps: {},
  descriptions: {},
  errorMessages: {},
  required: false,
  readOnly: false,
  disabled: false,
};
export const SCHEDULE_PICKER_PROP_TYPES = {
  labels: PropTypes.object,
  descriptions: PropTypes.object,
  placeholders: PropTypes.object,
  helps: PropTypes.object,
  errorMessages: PropTypes.object,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  headerStyle: PropTypes.any,
  contentStyle: PropTypes.any,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  locale: PropTypes.string,
  value: PropTypes.object,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

const SchedulePicker = ({
  error,
  size,
  labels,
  descriptions,
  placeholders,
  helps,
  errorMessages,
  locale,
  value,
  onChange,
  readOnly,
  disabled,
  ...props
}) => {
  const [openForm, setOpenForm] = useState(false);
  const [canOpen, setCanOpen] = useState(!disabled);
  const [localeWeekdays, setlocaleWeekdays] = useState([]);
  const [schedule, setSchedule] = useState(value || { days: [] });
  const inputRef = useRef(null);

  useEffect(() => {
    if (value && JSON.stringify(value) !== JSON.stringify(schedule)) {
      setSchedule(value);
    }
  }, [value]);

  useEffect(() => {
    let orderedWeekdays = [];

    import(`dayjs/locale/${locale}.js`).then((e) => {
      orderedWeekdays = [...e.weekdays];
      orderedWeekdays.push(orderedWeekdays.shift());
      orderedWeekdays = [...orderedWeekdays];
      setlocaleWeekdays(
        orderedWeekdays.map((day, index) => {
          let dayLabel = day.substring(0, 2);
          dayLabel = dayLabel.charAt(0).toUpperCase() + dayLabel.slice(1);
          return { label: dayLabel, value: { index }, day: day };
        })
      );
    });
  }, [locale]);

  const handleOnChange = (e) => {
    // if (e.days.length === 0) return;
    setSchedule(e);
    isFunction(onChange) && onChange(e);
  };

  const uuid = useId();
  const { classes, cx } = SchedulePickerStyles({}, { name: 'SchedulePicker' });

  return (
    <InputWrapper
      {...props}
      label={labels.input}
      description={descriptions.input}
      help={helps.input}
      uuid={uuid}
      size={size}
      error={error}
      className={classes.inputWrapper}
    >
      {readOnly ? (
        <Box className={classes.values}>
          {!isEmpty(localeWeekdays) &&
            schedule.days.map((day) => (
              <Badge
                key={day.dayWeek}
                label={`${localeWeekdays[day.dayWeek].label} - ${day.start} ${labels.divider} ${
                  day.end
                }`}
                closable={false}
                onClick={() => setOpenForm(true)}
                onClose={() => {
                  setSchedule({
                    ...schedule,
                    days: schedule.days.filter((item) => {
                      return item.dayWeek !== day.dayWeek;
                    }),
                  });
                }}
              />
            ))}
        </Box>
      ) : (
        <Popover
          withArrow
          opened={openForm}
          onClose={() => setOpenForm(false)}
          width={'auto'}
          position={'bottom'}
          placement={'start'}
          target={
            <Input
              size={size}
              icon={<PluginCalendarIcon />}
              placeholder={schedule.days.length === 0 ? placeholders.input : undefined}
              component={'div'}
            >
              <Box className={classes.wrapper}>
                <Box className={classes.values}>
                  {!isEmpty(localeWeekdays) &&
                    schedule.days.map((day) => (
                      <Badge
                        key={day.dayWeek}
                        label={`${localeWeekdays[day.dayWeek].label} - ${day.start} ${
                          labels.divider
                        } ${day.end}`}
                        closable={false}
                        onClick={() => setOpenForm(true)}
                        onClose={() => {
                          setSchedule({
                            ...schedule,
                            days: schedule.days.filter((item) => {
                              return item.dayWeek !== day.dayWeek;
                            }),
                          });
                        }}
                      />
                    ))}
                </Box>
                <input
                  ref={inputRef}
                  className={classes.input}
                  placeholder={schedule.days.length === 0 ? placeholders.input : undefined}
                  onFocus={() => canOpen && setOpenForm(!openForm)}
                  disabled={disabled}
                />
              </Box>
            </Input>
          }
          onKeyDown={(e) => {
            if (canOpen && e.code === 'Escape') {
              setOpenForm(false);
              setCanOpen(false);
              setTimeout(() => inputRef.current.blur(), 100);
              setTimeout(() => setCanOpen(true), 500);
            }
          }}
        >
          <ScheduleForm
            labels={labels}
            placeholders={placeholders}
            errorMessages={errorMessages}
            localeWeekdays={localeWeekdays}
            setOpenForm={setOpenForm}
            onChange={handleOnChange}
            savedSchedule={schedule}
          />
        </Popover>
      )}
    </InputWrapper>
  );
};

SchedulePicker.defaultProps = SCHEDULE_PICKER_DEFAULT_PROPS;
SchedulePicker.propTypes = SCHEDULE_PICKER_PROP_TYPES;

export { SchedulePicker };

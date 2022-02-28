import React, { forwardRef, useEffect, useState } from 'react';
import { PluginCalendarIcon } from '@bubbles-ui/icons/outline';
import {
  DatePicker as MantineDatePicker,
  DateRangePicker,
  TimeInput as MantineTimeInput,
  TIME_INPUT_PROP_TYPES,
} from '@mantine/dates';
import { useId } from '@mantine/hooks';
import { isEmpty, isEqual } from 'lodash';
import PropTypes from 'prop-types';
import { CalendarStyles } from '../../dates/Calendar/Calendar.styles';
import { Stack } from '../../layout';
import {
  InputWrapper,
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SHARED_PROPS,
  INPUT_WRAPPER_SIZES,
} from '../InputWrapper';
import { TimeInputStyles } from '../TimeInput/TimeInput.styles';
import { DatePickerStyles } from './DatePicker.styles';
import { updateDate, updateTime } from './helpers';
import { isFunction } from 'lodash';

export const DATE_PICKER_SIZES = INPUT_WRAPPER_SIZES;
export const DATE_PICKER_ORIENTATIONS = INPUT_WRAPPER_ORIENTATIONS;

export const DATE_PICKER_DEFAULT_PROPS = {
  label: '',
  description: '',
  size: DATE_PICKER_SIZES[1],
  orientation: DATE_PICKER_ORIENTATIONS[1],
  error: '',
  required: false,
  useRange: false,
  locale: 'en',
  withTime: false,
};
export const DATE_PICKER_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  orientation: PropTypes.oneOf(DATE_PICKER_ORIENTATIONS),
  size: PropTypes.oneOf(DATE_PICKER_SIZES),
  useRange: PropTypes.bool,
  /** Locale used for labels formatting, defaults to theme.datesLocale */
  locale: PropTypes.string,
  withTime: PropTypes.bool,
  value: PropTypes.oneOfType(
    PropTypes.instanceOf(Date),
    PropTypes.arrayOf(PropTypes.instanceOf(Date))
  ),
};

function TimeInput({ onChange, size, ...props }) {
  const { classes } = TimeInputStyles({ size }, { name: 'TimeInput' });

  return <MantineTimeInput onChange={onChange} classNames={classes} size={size} {...props} />;
}

const DatePicker = forwardRef(
  (
    {
      label,
      description,
      orientation,
      size,
      error,
      required,
      help,
      useRange,
      locale,
      withTime,
      value: userValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const uuid = useId();
    const [currentLocale, setCurrentLocale] = useState(locale);
    const { classes } = DatePickerStyles({ size });
    const { classes: calendarClasses } = CalendarStyles({ size });
    const Comp = useRange ? DateRangePicker : MantineDatePicker;
    const compProps = useRange ? { amountOfMonths: 2 } : {};

    const [date, setDate] = useState(userValue);

    // EN: Notify the parent component when the date changes
    // ES: Notificar al componente padre cuando cambia la fecha
    // useEffect(() => {
    //   console.log('DatePicker: useEffect');
    //   if (typeof onChange === 'function') {
    //     onChange(date);
    //   }
    // }, [date, onChange]);

    // EN: Notify the parent component when the date changes
    // ES: Notificar al componente padre cuando cambia la fecha
    const onChangeHandler = (date) => {
      setDate(date);
      isFunction(onChange) && onChange(date);
    };

    useEffect(() => {
      if (isEqual(date, userValue)) return;
      onChangeHandler(userValue);
    }, [userValue]);

    useEffect(() => {
      let mounted = true;

      import(`dayjs/locale/${locale}.js`).then(() => {
        if (mounted) setCurrentLocale(locale);
      });

      return () => {
        mounted = false;
      };
    }, [locale]);

    return (
      <InputWrapper
        uuid={uuid}
        size={size}
        error={error}
        label={label}
        description={description}
        orientation={orientation}
        required={required}
        help={help}
      >
        <Stack spacing={1} fullWidth>
          <Comp
            {...props}
            {...compProps}
            locale={currentLocale}
            uuid={uuid}
            ref={ref}
            size={size}
            // value={userValue || useRange ? [] : date}
            value={date}
            classNames={{ ...classes, ...calendarClasses }}
            error={!isEmpty(error)}
            onChange={(v) => {
              useRange ? onChangeHandler(v) : onChangeHandler(updateDate(v, date));
            }}
            icon={<PluginCalendarIcon />}
          />
          {withTime && !useRange && (
            <TimeInput
              onChange={(v) => updateTime(v, date, setDate)}
              value={userValue || date}
              size={size}
              error={!isEmpty(error)}
              skipFlex
            />
          )}
        </Stack>
      </InputWrapper>
    );
  }
);

DatePicker.defaultProps = DATE_PICKER_DEFAULT_PROPS;
DatePicker.propTypes = DATE_PICKER_PROP_TYPES;

export { DatePicker };

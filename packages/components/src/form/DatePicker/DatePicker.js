import React, { forwardRef, useEffect, useState } from 'react';
import { PluginCalendarIcon } from '@bubbles-ui/icons/outline';
import {
  DatePicker as MantineDatePicker,
  DateRangePicker,
  TimeInput as MantineTimeInput,
} from '@mantine/dates';
import { useId } from '@mantine/hooks';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { CalendarStyles } from '../../dates/Calendar/Calendar.styles';
import { Stack } from '../../layout';
import {
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SHARED_PROPS,
  INPUT_WRAPPER_SIZES,
  InputWrapper,
} from '../InputWrapper';
import { TimeInputStyles } from '../TimeInput/TimeInput.styles';
import { DatePickerStyles } from './DatePicker.styles';
import { updateDate, updateTime } from './helpers';

export const DATE_PICKER_SIZES = INPUT_WRAPPER_SIZES;
export const DATE_PICKER_ORIENTATIONS = INPUT_WRAPPER_ORIENTATIONS;

export const DATE_PICKER_DEFAULT_PROPS = {
  label: '',
  description: '',
  size: DATE_PICKER_SIZES[1],
  orientation: DATE_PICKER_ORIENTATIONS[1],
  error: '',
  required: false,
  range: false,
  locale: 'en',
  withTime: false,
};
export const DATE_PICKER_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  orientation: PropTypes.oneOf(DATE_PICKER_ORIENTATIONS),
  size: PropTypes.oneOf(DATE_PICKER_SIZES),
  range: PropTypes.bool,
  /** Locale used for labels formatting, defaults to theme.datesLocale */
  locale: PropTypes.string,
  withTime: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
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
      range,
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
    const Comp = range ? DateRangePicker : MantineDatePicker;
    const compProps = range ? { amountOfMonths: 2 } : {};

    const [date, setDate] = useState(userValue);

    // EN: Notify the parent component when the date changes
    // ES: Notificar al componente padre cuando cambia la fecha
    useEffect(() => {
      if (typeof onChange === 'function') {
        onChange(date);
      }
    }, [date, onChange]);

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
            value={userValue || range ? undefined : date}
            classNames={{ ...classes, ...calendarClasses }}
            error={!isEmpty(error)}
            onChange={(v) => (range ? setDate(v) : updateDate(v, date, setDate))}
            icon={<PluginCalendarIcon />}
          />
          {withTime && !range && (
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

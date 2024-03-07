import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isFunction, isNil } from 'lodash';
import {
  DatePicker as MantineDatePicker,
  DateRangePicker,
  TimeInput as MantineTimeInput,
} from '@mantine/dates';
import { useId } from '@mantine/hooks';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { PluginCalendarIcon, TimeClockCircleIcon } from '@bubbles-ui/icons/outline';
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
import { Paragraph } from '../../typography';

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);
function deduceDateFormat(locale) {
  const date = new Date(Date.UTC(2022, 11, 20)); // Usar una fecha conocida
  const formatter = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const parts = formatter.formatToParts(date);
  return parts
    .map(({ type, value }) => {
      switch (type) {
        case 'day':
          return 'DD';
        case 'month':
          return 'MM';
        case 'year':
          return 'YYYY';
        default:
          return value; // Para separadores y otros caracteres
      }
    })
    .join('');
}

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
  autoComplete: 'off',
  readOnly: false,
  clearButtonLabel: 'Clear',
};
export const DATE_PICKER_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  orientation: PropTypes.oneOf(DATE_PICKER_ORIENTATIONS),
  size: PropTypes.oneOf(DATE_PICKER_SIZES),
  range: PropTypes.bool,
  /** Locale used for labels formatting, defaults to theme.datesLocale */
  locale: PropTypes.string,
  withTime: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  ]),
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  headerStyle: PropTypes.any,
  contentStyle: PropTypes.any,
  autoComplete: PropTypes.string,
  readOnly: PropTypes.bool,
  clearButtonLabel: PropTypes.string,
};

function TimeInput({ onChange, size, ...props }) {
  const { classes } = TimeInputStyles({ size }, { name: 'TimeInput' });

  return <MantineTimeInput {...props} onChange={onChange} classNames={classes} size={size} />;
}

TimeInput.propTypes = {
  size: PropTypes.oneOf(DATE_PICKER_SIZES),
  onChange: PropTypes.func,
};

const DatePicker = forwardRef(
  (
    {
      label,
      description,
      orientation,
      size,
      disabled,
      error,
      required,
      help,
      range,
      locale,
      withTime,
      value: userValue,
      onChange,
      headerClassName,
      contentClassName,
      headerStyle,
      contentStyle,
      autoComplete,
      clearButtonLabel,
      readOnly,
      style,
      ...props
    },
    ref,
  ) => {
    const uuid = useId();
    const [inputFormat, setInputFormat] = useState('--/--/----'); // Formato inicial
    const [currentLocale, setCurrentLocale] = useState(locale);
    const dateFormat = deduceDateFormat(currentLocale);
    const { classes: calendarClasses } = CalendarStyles({ size });
    const Comp = range ? DateRangePicker : MantineDatePicker;
    const compProps = range ? { amountOfMonths: 2 } : {};
    const [ready, setReady] = useState(null);
    const [date, setDate] = useState(userValue);
    const { classes } = DatePickerStyles({ size, date, range });
    useEffect(() => {
      const format = deduceDateFormat(locale);
      setInputFormat(format);
    }, [locale]);

    function render() {
      setReady(new Date().getTime());
    }

    // EN: Notify the parent component when the date changes
    // ES: Notificar al componente padre cuando cambia la fecha
    useEffect(() => {
      if (isFunction(onChange) && JSON.stringify(userValue) !== JSON.stringify(date)) {
        onChange(date);
      }
    }, [date]);

    useEffect(() => {
      if (JSON.stringify(userValue) !== JSON.stringify(date)) {
        setDate(userValue || null);
      }
    }, [userValue]);

    useEffect(() => {
      let mounted = true;

      import(`dayjs/locale/${locale.toLowerCase()}.js`).then(() => {
        if (mounted) {
          setCurrentLocale(locale.toLowerCase());
          render();
        }
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
        headerClassName={headerClassName}
        contentClassName={contentClassName}
        headerStyle={headerStyle}
        contentStyle={contentStyle}
        style={style}
      >
        {readOnly ? (
          <Paragraph clean>
            {!isNil(date) &&
              dayjs(date)
                .locale(currentLocale)
                .format(withTime && !range ? 'LL LT' : 'LL')}
          </Paragraph>
        ) : (
          <Stack spacing={5} fullWidth>
            <Comp
              {...props}
              {...compProps}
              withinPortal
              placeHolder={inputFormat}
              allowFreeInput
              dateParser={(value) => dayjs(value, dateFormat, currentLocale).toDate()}
              disabled={disabled}
              autoComplete={autoComplete}
              locale={currentLocale}
              uuid={uuid}
              ref={ref}
              size={size}
              value={ready ? date : null}
              classNames={{ ...classes, ...calendarClasses }}
              error={!isEmpty(error)}
              onChange={(v) => (range ? setDate(v) : updateDate(v, date, setDate))}
              icon={<PluginCalendarIcon />}
              clearButtonLabel={clearButtonLabel}
            />
            {withTime && !range && (
              <TimeInput
                disabled={disabled}
                onChange={(v) => updateTime(v, date, setDate)}
                value={userValue || date}
                size={size}
                error={!isEmpty(error)}
                skipFlex
                icon={<TimeClockCircleIcon />}
                autoComplete={autoComplete}
              />
            )}
          </Stack>
        )}
      </InputWrapper>
    );
  },
);

DatePicker.displayName = 'DatePicker';
DatePicker.defaultProps = DATE_PICKER_DEFAULT_PROPS;
DatePicker.propTypes = DATE_PICKER_PROP_TYPES;

export { DatePicker };

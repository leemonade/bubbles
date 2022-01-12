import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, toLower, trim } from 'lodash';
import { DatePicker as MantineDatePicker, DateRangePicker } from '@mantine/dates';
import { PluginCalendarIcon } from '@bubbles-ui/icons/outline';
import { useId } from '@mantine/hooks';
import {
  InputWrapper,
  INPUT_WRAPPER_SIZES,
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SHARED_PROPS,
} from '../InputWrapper';
import { DatePickerStyles } from './DatePicker.styles';
import { CalendarStyles } from '../../dates/Calendar/Calendar.styles';

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
};
export const DATE_PICKER_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  orientation: PropTypes.oneOf(DATE_PICKER_ORIENTATIONS),
  size: PropTypes.oneOf(DATE_PICKER_SIZES),
  range: PropTypes.bool,
  /** Locale used for labels formatting, defaults to theme.datesLocale */
  locale: PropTypes.string,
};

const DatePicker = forwardRef(
  (
    { label, description, orientation, size, error, required, help, range, locale, ...props },
    ref
  ) => {
    const uuid = useId();
    const [currentLocale, setCurrentLocale] = useState(locale);
    const { classes, cx } = DatePickerStyles({ size });
    const { classes: calendarClasses } = CalendarStyles({ size });
    const Comp = range ? DateRangePicker : MantineDatePicker;

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
        <Comp
          {...props}
          locale={currentLocale}
          uuid={uuid}
          ref={ref}
          size={size}
          classNames={{ ...classes, ...calendarClasses }}
          error={!isEmpty(error)}
          icon={<PluginCalendarIcon />}
        />
      </InputWrapper>
    );
  }
);

DatePicker.defaultProps = DATE_PICKER_DEFAULT_PROPS;
DatePicker.propTypes = DATE_PICKER_PROP_TYPES;

export { DatePicker };

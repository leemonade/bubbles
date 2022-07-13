import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Calendar as MantineCalendar, RangeCalendar } from '@mantine/dates';
import { CalendarStyles } from './Calendar.styles';

export const CALENDAR_SIZES = ['xs', 'sm'];
export const CALENDAR_LEVELS = ['date', 'month', 'year'];
export const CALENDAR_FIRST_DAYS = ['sunday', 'monday'];

export const CALENDAR_DEFAULT_PROPS = {
  amountOfMonths: 1,
  size: CALENDAR_SIZES[1],
  allowLevelChange: true,
  initialLevel: CALENDAR_LEVELS[0],
  firstDayOfWeek: CALENDAR_FIRST_DAYS[1],
  labelFormat: 'MMMM YYYY',
  range: false,
  nextMonthLabel: 'Next month',
  previousMonthLabel: 'Previous month',
  nextYearLabel: 'Next year',
  previousNextLabel: 'Previous year',
  nextDecadeLabel: 'Next decade',
  previousDecadeLabel: 'Previous decade',
};
export const CALENDAR_PROP_TYPES = {
  /** Month for controlled calendar */
  month: PropTypes.instanceOf(Date),

  /** Initial month for uncontrolled calendar */
  initialMonth: PropTypes.instanceOf(Date),

  /** Locale used for labels formatting, defaults to theme.datesLocale */
  locale: PropTypes.string,

  /** Amount of months */
  amountOfMonths: PropTypes.number,

  /** Selected value */
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  ]),

  /** Calendar size */
  size: PropTypes.oneOf(CALENDAR_SIZES),

  /** Allow to change level (date – month – year) */
  allowLevelChange: PropTypes.bool,

  /** Initial date selection level */
  initialLevel: PropTypes.oneOf(CALENDAR_LEVELS),

  /** Range selection */
  range: PropTypes.bool,

  /** Called when month changes */
  onMonthChange: PropTypes.func,

  /** Called when day is selected */
  onChange: PropTypes.func,

  /** Called when onMouseEnter event fired on day button */
  onDayMouseEnter: PropTypes.func,

  /** Next month control aria-label */
  nextMonthLabel: PropTypes.string,

  /** Previous month control aria-label */
  previousMonthLabel: PropTypes.string,

  /** Next year control aria-label */
  nextYearLabel: PropTypes.string,

  /** Previous year control aria-label */
  previousYearLabel: PropTypes.string,

  /** Next decade control aria-label */
  nextDecadeLabel: PropTypes.string,

  /** Previous decade control aria-label */
  previousDecadeLabel: PropTypes.string,

  firstDayOfWeek: PropTypes.oneOf(CALENDAR_FIRST_DAYS),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
};

const Calendar = forwardRef(({ range, locale, ...props }, ref) => {
  const [currentLocale, setCurrentLocale] = useState(locale);
  const { classes, cx } = CalendarStyles({});
  const Comp = range ? RangeCalendar : MantineCalendar;

  useEffect(() => {
    let mounted = true;

    import(`dayjs/locale/${locale}.js`).then(() => {
      if (mounted) setCurrentLocale(locale);
    });

    return () => {
      mounted = false;
    };
  }, [locale]);

  return <Comp {...props} locale={currentLocale} ref={ref} classNames={classes} />;
});

Calendar.defaultProps = CALENDAR_DEFAULT_PROPS;
Calendar.propTypes = CALENDAR_PROP_TYPES;

export { Calendar };

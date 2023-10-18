import React, { forwardRef, useEffect, useState } from 'react';
import { Calendar as MantineCalendar, RangeCalendar } from '@mantine/dates';
import { CalendarStyles } from './Calendar.styles';
import { CALENDAR_DEFAULT_PROPS, CALENDAR_PROP_TYPES } from './Calendar.constants';

const Calendar = forwardRef(({ range, size, locale, ...props }, ref) => {
  const [currentLocale, setCurrentLocale] = useState(locale);
  const { classes } = CalendarStyles({});
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
Calendar.displayName = 'Calendar';

export default Calendar;
export { Calendar };

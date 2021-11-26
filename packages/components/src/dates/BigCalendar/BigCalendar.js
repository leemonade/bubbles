import React, { useState, forwardRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isNil, isArray, forEach } from 'lodash';
import { Box } from '@mantine/core';
import { Calendar, Views } from 'react-big-calendar';
import { DateTime, Settings, Interval } from 'luxon';
import { RRule } from 'rrule';
import luxonLocalizer from './addons/LuxonLocalizer';
import { ToolBar } from './Toolbar/Toolbar';
import { BigCalendarStyles } from './BigCalendar.styles';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { MonthView } from './views/Month';

const TIMEZONE = DateTime.local().zoneName;
const TODAY = DateTime.local().toJSDate();

export const BIGCALENDAR_VIEWS = [Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA];

export const BigCalendar = forwardRef(
  (
    {
      timezone,
      defaultDate: defaultDateProp,
      currentView,
      language,
      events: eventsProp,
      style,
      className,
      validRange,
      messages,
      hooks,
      showWeekends: showWeekendsProp,
      dateClick = () => {},
      onSelectDay = () => {},
      onRangeChange = () => {},
      onSelectEvent = () => {},
      eventClick = () => {},
      backgroundEventClick = () => {},
      ...props
    },
    ref
  ) => {
    const [showWeekends, setShowWeekends] = useState(showWeekendsProp);
    const [dateRange, setDateRange] = useState(null);
    const [date, setDate] = useState(new Date());
    const [hooksCreated, setHooksCreated] = useState(false);

    useEffect(() => setShowWeekends(showWeekendsProp), [showWeekendsProp]);

    // ·················································
    // TIMEZONE CONFIG

    const { localizer, defaultDate, scrollToTime, getNow } = useMemo(() => {
      Settings.defaultZone = timezone;
      return {
        localizer: luxonLocalizer(DateTime),
        defaultDate: defaultDateProp,
        scrollToTime: DateTime.local().toJSDate(),
        getNow: () => DateTime.local().toJSDate(),
      };
    }, [timezone]);

    useEffect(() => {
      return () => {
        Settings.defaultZone = timezone; // reset to browser TZ on unmount
      };
    }, []);

    // ·················································
    // INTERACTION HANDLE

    const events = useMemo(() => {
      const acc = [];
      if (dateRange) {
        forEach(eventsProp, (ev) => {
          if (ev.rrule) {
            const diff = DateTime.fromJSDate(ev.end).diff(DateTime.fromJSDate(ev.start))
              .milliseconds;

            const rule = new RRule({
              ...ev.rrule,
              dtstart: new Date(
                Date.UTC(
                  dateRange.start.getFullYear(),
                  dateRange.start.getMonth(),
                  dateRange.start.getDate(),
                  dateRange.start.getHours(),
                  dateRange.start.getMinutes(),
                  dateRange.start.getSeconds()
                )
              ),
              until: new Date(
                Date.UTC(
                  dateRange.end.getFullYear(),
                  dateRange.end.getMonth(),
                  dateRange.end.getDate(),
                  dateRange.end.getHours(),
                  dateRange.end.getMinutes(),
                  dateRange.end.getSeconds()
                )
              ),
            });
            const dates = rule.all();
            forEach(dates, (date) => {
              const evStart = new Date(ev.start);
              date.setHours(evStart.getHours(), evStart.getMinutes(), evStart.getSeconds());
              acc.push({
                ...ev,
                start: date,
                end: new Date(date.getTime() + diff),
              });
            });
          } else {
            if (
              Interval.fromDateTimes(
                DateTime.fromJSDate(dateRange.start),
                DateTime.fromJSDate(dateRange.end)
              ).contains(DateTime.fromJSDate(ev.start))
            ) {
              acc.push(ev);
            }
          }
        });
      }
      return acc;
    }, [eventsProp, dateRange]);

    // ·················································
    // INTERACTION HANDLE

    const handleDayClick = ({ args: [date] }) => {
      onSelectDay(date);
      dateClick(date);
    };

    const handleRangeChange = (range) => {
      if (isArray(range) && range.length > 1) {
        range = {
          start: range[0],
          end: range[range.length - 1],
        };
      } else if (isArray(range) && range.length === 1) {
        const end = new Date(range[0]);
        end.setHours(23, 59, 59);
        range = {
          start: range[0],
          end,
        };
      } else if (isArray(range)) {
        range = null;
      }

      if (range) {
        onRangeChange(range);
        setDateRange(range);
      }
    };

    const handleSelectEvent = (ev) => {
      onSelectEvent(ev);
      eventClick(ev);
    };

    const handleBgEventClick = ({ args: [ev] }) => {
      onSelectEvent(ev);
      eventClick(ev);
    };

    // ·················································
    // HOOKS CONFIG

    useEffect(() => {
      if (!hooksCreated && !isNil(hooks)) {
        hooks.addAction('big-calendar:dayClick', handleDayClick);
        hooks.addAction('big-calendar:backgroundEventClick', handleBgEventClick);
        setHooksCreated(true);
      }
      return () => {
        if (hooksCreated && !isNil(hooks)) {
          hooks.removeAction('big-calendar:dayClick', handleDayClick);
          hooks.removeAction('big-calendar:backgroundEventClick', handleBgEventClick);
        }
      };
    }, [hooks]);

    // ·················································
    // STYLES

    const { classes, cx } = BigCalendarStyles({});

    return (
      <Box className={cx(classes.root, className)} style={style}>
        <Calendar
          components={{
            toolbar: (props) => (
              <ToolBar {...props} showWeekends={showWeekends} setShowWeekends={setShowWeekends} />
            ),
            cx,
            showWeekends,
          }}
          events={events}
          messages={messages}
          defaultView={currentView}
          defaultDate={defaultDate}
          scrollToTime={scrollToTime}
          localizer={localizer}
          getNow={getNow}
          culture={language}
          endAccessor="end"
          startAccessor="start"
          onSelectEvent={handleSelectEvent}
          onRangeChange={handleRangeChange}
          validRange={validRange}
          views={{ month: MonthView, week: true, day: true, agenda: true }}
        />
      </Box>
    );
  }
);

BigCalendar.defaultProps = {
  timezone: TIMEZONE,
  defaultDate: TODAY,
  currentView: Views.MONTH,
  showWeekends: true,
  language: 'en-EN',
  messages: {
    month: 'Monthly',
    week: 'Weekly',
    day: 'Day',
    agenda: 'Agenda',
    today: 'Today',
    previous: 'Previous',
    next: 'Next',
    showWeekends: 'View weekends',
  },
};

BigCalendar.propTypes = {
  timezone: PropTypes.string,
  currentView: PropTypes.oneOf(BIGCALENDAR_VIEWS),
  defaultDate: PropTypes.instanceOf(Date),
  language: PropTypes.string,
  events: PropTypes.array,
  messages: PropTypes.shape({
    month: PropTypes.string,
    week: PropTypes.string,
    day: PropTypes.string,
    agenda: PropTypes.string,
    today: PropTypes.string,
    previous: PropTypes.string,
    next: PropTypes.string,
    showWeekends: PropTypes.string,
  }),
};

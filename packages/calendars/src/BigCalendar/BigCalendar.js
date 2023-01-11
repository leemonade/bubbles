import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { forEach, isArray, isNil } from 'lodash';
import { Box } from '@mantine/core';
import { Calendar, Views } from 'react-big-calendar';
import { DateTime, Interval } from 'luxon';
import { RRule } from 'rrule';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import luxonLocalizer from './addons/LuxonLocalizer';
import { ToolBar } from './components/Toolbar/Toolbar';
import { BigCalendarStyles } from './BigCalendar.styles';
import { MonthView } from './components/MonthView/MonthView';
import { WeekView } from './components/WeekView/WeekView';
import { DayView } from './components/DayView/DayView';
import { MonthRangeView } from './components/MonthRangeView/MonthRangeView';
import { EventWrapper } from './components/EventWrapper';
import Agenda from './components/AgentView/AgentView';

const TIMEZONE = DateTime.local().zoneName;
const TODAY = DateTime.local().toJSDate();
const MONTH_RANGE = 'monthRange';

export const BIGCALENDAR_VIEWS = [Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA, MONTH_RANGE];

export const BigCalendar = forwardRef(
  (
    {
      timezone,
      defaultDate: defaultDateProp,
      currentView,
      locale,
      events: eventsProp,
      style,
      className,
      validRange,
      messages,
      minimumStartDifference,
      monthRange,
      hooks,
      minHour,
      maxHour,
      weekDays,
      timeslots,
      timeslotHeight = 40,
      hideAllDayCells,
      toolbarRightNode = null,
      hideToolbar = false,
      forceBgColorToEvents,
      showToolbarAddButton = true,
      showToolbarToggleWeekend = true,
      showToolbarViewSwitcher = true,
      showWeekends: showWeekendsProp,
      printMode,
      dateClick = () => {
      },
      onSelectDay = () => {
      },
      onRangeChange = () => {
      },
      onSelectEvent = () => {
      },
      eventClick = () => {
      },
      backgroundEventClick = () => {
      },
      addEventClick = () => {
      },
      ...props
    },
    ref
  ) => {
    const [showType, setShowType] = useState('full');
    const [showWeekends, setShowWeekends] = useState(showWeekendsProp);
    const [dateRange, setDateRange] = useState(null);
    const [date, setDate] = useState(new Date());
    const [hooksCreated, setHooksCreated] = useState(false);

    useEffect(() => setShowWeekends(showWeekendsProp), [showWeekendsProp]);

    let { availableViews, showToolbar } = useMemo(() => {
      let views = { month: MonthView, week: WeekView, day: DayView, agenda: Agenda };
      let showToolbar = true;

      if (currentView === MONTH_RANGE) {
        views = { monthRange: MonthRangeView };
        showToolbar = false;
      }
      return { availableViews: views, showToolbar };
    }, [currentView]);

    if (hideToolbar) {
      showToolbar = false;
    }

    // ·················································
    // TIMEZONE CONFIG

    const firstDayOfWeek = 1;

    const { localizer, defaultDate, scrollToTime, getNow } = useMemo(() => {
      // Settings.defaultZone = timezone;
      return {
        localizer: luxonLocalizer(DateTime, { firstDayOfWeek }),
        defaultDate: defaultDateProp,
        scrollToTime: DateTime.local().toJSDate(),
        getNow: () => DateTime.local().toJSDate()
      };
    }, [timezone]);

    /*
    useEffect(() => {
      return () => {
        Settings.defaultZone = timezone; // reset to browser TZ on unmount
      };
    }, []);
     */

    // ·················································
    // INTERACTION HANDLE

    const events = useMemo(() => {
      const acc = [];
      if (dateRange) {
        forEach(eventsProp, (ev) => {
          if (ev.rrule) {
            const diff = DateTime.fromJSDate(ev.end).diff(
              DateTime.fromJSDate(ev.start)
            ).milliseconds;

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
              )
            });
            const dates = rule.all();
            forEach(dates, (date) => {
              const evStart = new Date(ev.start);
              date.setHours(evStart.getHours(), evStart.getMinutes(), evStart.getSeconds());
              acc.push({
                ...ev,
                start: date,
                end: new Date(date.getTime() + diff)
              });
            });
          } else {
            const range = Interval.fromDateTimes(
              DateTime.fromJSDate(dateRange.start),
              DateTime.fromJSDate(dateRange.end)
            );

            const e = Interval.fromDateTimes(
              DateTime.fromJSDate(ev.start),
              DateTime.fromJSDate(ev.end)
            );

            if (range.e >= e.s && range.s <= e.e) {
              acc.push(ev);
            }
          }
        });
      }
      return acc;
    }, [eventsProp, JSON.stringify(dateRange)]);

    // ·················································
    // INTERACTION HANDLE

    const handleDayClick = ({ args: [date] }) => {
      onSelectDay(date);
      dateClick(date);
    };

    const handleRangeChange = (range) => {
      if (isArray(range) && range.length > 1) {
        const end = range[range.length - 1];
        end.setHours(23, 59, 59);
        range = {
          start: range[0],
          end: end
        };
      } else if (isArray(range) && range.length === 1) {
        const end = new Date(range[0]);
        end.setHours(23, 59, 59);
        range = {
          start: range[0],
          end
        };
      } else if (isArray(range)) {
        range = null;
      }

      if (range) {
        range.end.setHours(23, 59, 59, 59);
        range.start.setHours(0, 0, 0, 0);
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

    const { classes, cx } = BigCalendarStyles({
      timeslotHeight,
      isMonthRange: currentView === MONTH_RANGE,
      printMode
    });

    return (
      <Box className={cx(classes.root, className)} style={style}>
        <Calendar
          components={{
            showType,
            eventWrapper: EventWrapper,
            toolbar: showToolbar
              ? (props) => (
                <ToolBar
                  {...props}
                  addEventClick={addEventClick}
                  showType={showType}
                  setShowType={setShowType}
                  showWeekends={showWeekends}
                  setShowWeekends={setShowWeekends}
                  toolbarRightNode={toolbarRightNode}
                  showToolbarAddButton={showToolbarAddButton}
                  showToolbarToggleWeekend={showToolbarToggleWeekend}
                  showToolbarViewSwitcher={showToolbarViewSwitcher}
                />
              )
              : false,
            cx,
            showWeekends,
            minHour,
            maxHour,
            weekDays,
            hideAllDayCells,
            minimumStartDifference,
            forceBgColorToEvents,
            firstDayOfWeek
          }}
          toolbar={showToolbar}
          events={events}
          timeslots={timeslots}
          messages={messages}
          defaultView={currentView}
          defaultDate={defaultDate}
          scrollToTime={scrollToTime}
          localizer={localizer}
          getNow={getNow}
          culture={locale}
          endAccessor='end'
          startAccessor='start'
          onSelectEvent={handleSelectEvent}
          onRangeChange={handleRangeChange}
          validRange={validRange}
          dateMonthRange={monthRange}
          views={availableViews}
          printMode={printMode}
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
  locale: 'en-EN',
  messages: {
    month: 'Monthly',
    week: 'Weekly',
    day: 'Day',
    agenda: 'Agenda',
    today: 'Today',
    previous: 'Previous',
    next: 'Next',
    showWeekends: 'View weekends',
    allDay: 'All day',
    init: 'Init',
    end: 'End'
  }
};

BigCalendar.propTypes = {
  timezone: PropTypes.string,
  currentView: PropTypes.oneOf(BIGCALENDAR_VIEWS),
  defaultDate: PropTypes.instanceOf(Date),
  locale: PropTypes.string,
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
    allDay: PropTypes.string,
    init: PropTypes.string,
    end: PropTypes.string
  }),
  validRange: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date)
  }),
  hooks: PropTypes.func,
  showWeekends: PropTypes.bool,
  dateClick: PropTypes.func,
  onSelectDay: PropTypes.func,
  onRangeChange: PropTypes.func,
  onSelectEvent: PropTypes.func,
  eventClick: PropTypes.func,
  backgroundEventClick: PropTypes.func,
  addEventClick: PropTypes.func
};

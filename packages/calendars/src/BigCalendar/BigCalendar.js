/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable prefer-const */
import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { forEach, isArray, isNil } from 'lodash';
import { Box } from '@mantine/core';
import { Calendar } from 'react-big-calendar';
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
import {
  MONTH_RANGE,
  BIG_CALENDAR_PROP_TYPES,
  BIG_CALENDAR_DEFAULT_PROPS,
  firstDayOfWeek,
} from './BigCalendar.constants';

const BigCalendar = forwardRef(
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
      dateClick = () => {},
      onSelectDay = () => {},
      onRangeChange = () => {},
      onSelectEvent = () => {},
      eventClick = () => {},
      addEventClick = () => {},
    },
    ref,
  ) => {
    const [showType, setShowType] = useState('full');
    const [showWeekends, setShowWeekends] = useState(showWeekendsProp);
    const [dateRange, setDateRange] = useState(null);
    const [hooksCreated, setHooksCreated] = useState(false);

    useEffect(() => setShowWeekends(showWeekendsProp), [showWeekendsProp]);

    let { availableViews, showToolbar } = useMemo(() => {
      let views = { month: MonthView, week: WeekView, day: DayView, agenda: Agenda };
      showToolbar = true;

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

    const { localizer, defaultDate, scrollToTime, getNow } = useMemo(
      () => ({
        localizer: luxonLocalizer(DateTime, { firstDayOfWeek }),
        defaultDate: defaultDateProp,
        scrollToTime: DateTime.local().toJSDate(),
        getNow: () => DateTime.local().toJSDate(),
      }),
      [timezone],
    );

    // ·················································
    // INTERACTION HANDLE

    const events = useMemo(() => {
      const acc = [];
      if (dateRange) {
        forEach(eventsProp, (ev) => {
          if (ev.rrule) {
            const diff = DateTime.fromJSDate(ev.end).diff(
              DateTime.fromJSDate(ev.start),
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
                  dateRange.start.getSeconds(),
                ),
              ),
              until: new Date(
                Date.UTC(
                  dateRange.end.getFullYear(),
                  dateRange.end.getMonth(),
                  dateRange.end.getDate(),
                  dateRange.end.getHours(),
                  dateRange.end.getMinutes(),
                  dateRange.end.getSeconds(),
                ),
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
            const range = Interval.fromDateTimes(
              DateTime.fromJSDate(dateRange.start),
              DateTime.fromJSDate(dateRange.end),
            );

            const e = Interval.fromDateTimes(
              DateTime.fromJSDate(ev.start),
              DateTime.fromJSDate(ev.end),
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
      let newRange = range;
      if (isArray(newRange) && newRange.length > 1) {
        const end = newRange[newRange.length - 1];
        end.setHours(23, 59, 59);
        newRange = {
          start: newRange[0],
          end,
        };
      } else if (isArray(newRange) && newRange.length === 1) {
        const end = new Date(newRange[0]);
        end.setHours(23, 59, 59);
        newRange = {
          start: newRange[0],
          end,
        };
      } else if (isArray(newRange)) {
        newRange = null;
      }

      if (newRange) {
        newRange.end.setHours(23, 59, 59, 59);
        newRange.start.setHours(0, 0, 0, 0);
        onRangeChange(newRange);
        setDateRange(newRange);
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
      printMode,
    });

    return (
      <Box className={cx(classes.root, className)} style={style}>
        <Calendar
          ref={ref}
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
            firstDayOfWeek,
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
          endAccessor="end"
          startAccessor="start"
          onSelectEvent={handleSelectEvent}
          onRangeChange={handleRangeChange}
          validRange={validRange}
          dateMonthRange={monthRange}
          views={availableViews}
          printMode={printMode}
        />
      </Box>
    );
  },
);

BigCalendar.propTypes = BIG_CALENDAR_PROP_TYPES;
BigCalendar.defaultProps = BIG_CALENDAR_DEFAULT_PROPS;

export default BigCalendar;
export { BigCalendar };

BigCalendar.displayName = 'BigCalendar';

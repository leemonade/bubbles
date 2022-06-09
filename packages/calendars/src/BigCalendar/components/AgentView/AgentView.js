import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import addClass from 'dom-helpers/addClass';
import removeClass from 'dom-helpers/removeClass';
import getWidth from 'dom-helpers/width';
import scrollbarSize from 'dom-helpers/scrollbarSize';

import { navigate } from 'react-big-calendar/lib/utils/constants';
import { inRange } from 'react-big-calendar/lib/utils/eventLevels';
import { isSelected } from 'react-big-calendar/lib/utils/selection';
import { Box } from '@bubbles-ui/components';

function Agenda({
  accessors,
  components,
  date,
  events,
  getters,
  length,
  localizer,
  onDoubleClickEvent,
  onSelectEvent,
  selected,
  ...props
}) {
  const headerRef = useRef(null);
  const dateColRef = useRef(null);
  const timeColRef = useRef(null);
  const contentRef = useRef(null);
  const tbodyRef = useRef(null);

  useEffect(() => {
    const days = localizer.visibleDays(date, localizer);
    days[days.length - 1].setHours(23, 59, 59);
    props.onRangeChange({
      start: days[0],
      end: days[days.length - 1],
    });
  }, []);

  useEffect(() => {
    _adjustHeader();
  });

  const renderDay = (day, events, dayKey) => {
    const { event: Event, date: AgendaDate } = components;

    events = events.filter((e) =>
      inRange(e, localizer.startOf(day, 'day'), localizer.endOf(day, 'day'), accessors, localizer)
    );

    return events.map((event, idx) => {
      let title = accessors.title(event);
      let end = accessors.end(event);
      let start = accessors.start(event);

      const userProps = getters.eventProp(event, start, end, isSelected(event, selected));

      let dateLabel = idx === 0 && localizer.format(day, 'agendaDateFormat');
      let first =
        idx === 0 ? (
          <td rowSpan={events.length} className="rbc-agenda-date-cell">
            <Box className="rbc-agenda-td-data">
              {AgendaDate ? <AgendaDate day={day} label={dateLabel} /> : dateLabel}
            </Box>
          </td>
        ) : (
          false
        );

      return (
        <tr key={dayKey + '_' + idx} className={userProps.className} style={userProps.style}>
          {first}
          <td className="rbc-agenda-time-cell">
            <Box className="rbc-agenda-td-data">{timeRangeLabel(day, event)}</Box>
          </td>
          <td
            className="rbc-agenda-event-cell"
            onClick={(e) => onSelectEvent && onSelectEvent(event, e)}
            onDoubleClick={(e) => onDoubleClickEvent && onDoubleClickEvent(event, e)}
          >
            <Box className="rbc-agenda-td-data">
              {Event ? <Event event={event} title={title} /> : title}
            </Box>
          </td>
        </tr>
      );
    }, []);
  };

  const timeRangeLabel = (day, event) => {
    let labelClass = '',
      TimeComponent = components.time,
      label = localizer.messages.allDay;

    let end = accessors.end(event);
    let start = accessors.start(event);

    if (!accessors.allDay(event)) {
      if (localizer.eq(start, end)) {
        label = localizer.format(start, 'agendaTimeFormat');
      } else if (localizer.isSameDate(start, end)) {
        label = localizer.format({ start, end }, 'agendaTimeRangeFormat');
      } else if (localizer.isSameDate(day, start)) {
        label = localizer.format(start, 'agendaTimeFormat');
      } else if (localizer.isSameDate(day, end)) {
        label = localizer.format(end, 'agendaTimeFormat');
      }
    }

    if (localizer.gt(day, start, 'day')) labelClass = 'rbc-continues-prior';
    if (localizer.lt(day, end, 'day')) labelClass += ' rbc-continues-after';

    return (
      <span className={labelClass.trim()}>
        {TimeComponent ? <TimeComponent event={event} day={day} label={label} /> : label}
      </span>
    );
  };

  const _adjustHeader = () => {
    if (!tbodyRef.current) return;

    let header = headerRef.current;
    let firstRow = tbodyRef.current.firstChild;

    if (!firstRow) return;

    let isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;

    let _widths = [];
    let widths = _widths;

    _widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])];

    if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
      dateColRef.current.style.width = _widths[0] + 'px';
      timeColRef.current.style.width = _widths[1] + 'px';
    }

    if (isOverflowing) {
      addClass(header, 'rbc-header-overflowing');
      header.style.marginRight = scrollbarSize() + 'px';
    } else {
      removeClass(header, 'rbc-header-overflowing');
    }
  };

  let { messages } = localizer;
  let end = localizer.add(date, length, 'day');

  let range = localizer.range(date, end, 'day');

  events = events.filter((event) =>
    inRange(
      event,
      localizer.startOf(date, 'day'),
      localizer.endOf(end, 'day'),
      accessors,
      localizer
    )
  );

  events.sort((a, b) => +accessors.start(a) - +accessors.start(b));

  return (
    <div className="rbc-agenda-view">
      {events.length !== 0 ? (
        <React.Fragment>
          <table ref={headerRef} className="rbc-agenda-table">
            <thead>
              <tr>
                <th className="rbc-header" ref={dateColRef}>
                  {messages.date}
                </th>
                <th className="rbc-header" ref={timeColRef}>
                  {messages.time}
                </th>
                <th className="rbc-header">{messages.event}</th>
              </tr>
            </thead>
          </table>
          <div className="rbc-agenda-content" ref={contentRef}>
            <table className="rbc-agenda-table">
              <tbody ref={tbodyRef}>{range.map((day, idx) => renderDay(day, events, idx))}</tbody>
            </table>
          </div>
        </React.Fragment>
      ) : (
        <span className="rbc-agenda-empty">{messages.noEventsInRange}</span>
      )}
    </div>
  );
}

Agenda.propTypes = {
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(Date),
  events: PropTypes.array,
  getters: PropTypes.object.isRequired,
  length: PropTypes.number.isRequired,
  localizer: PropTypes.object.isRequired,
  onSelectEvent: PropTypes.func,
  onDoubleClickEvent: PropTypes.func,
  selected: PropTypes.object,
};

Agenda.defaultProps = {
  length: 30,
};

Agenda.range = (start, { length = Agenda.defaultProps.length, localizer }) => {
  let end = localizer.add(start, length, 'day');
  return { start, end };
};

Agenda.navigate = (date, action, { length = Agenda.defaultProps.length, localizer }) => {
  switch (action) {
    case navigate.PREVIOUS:
      return localizer.add(date, -length, 'day');

    case navigate.NEXT:
      return localizer.add(date, length, 'day');

    default:
      return date;
  }
};

Agenda.title = (start, { length = Agenda.defaultProps.length, localizer }) => {
  let end = localizer.add(start, length, 'day');
  return localizer.format({ start, end }, 'agendaHeaderFormat');
};

export default Agenda;

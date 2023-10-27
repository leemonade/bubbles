import React, { useEffect, useRef } from 'react';
import addClass from 'dom-helpers/addClass';
import removeClass from 'dom-helpers/removeClass';
import getWidth from 'dom-helpers/width';
import scrollbarSize from 'dom-helpers/scrollbarSize';

import { navigate } from 'react-big-calendar/lib/utils/constants';
import { inRange } from 'react-big-calendar/lib/utils/eventLevels';
import { isSelected } from 'react-big-calendar/lib/utils/selection';
import { Avatar, Box, COLORS, ImageLoader, Text } from '@bubbles-ui/components';
import { colord } from 'colord';
import { omit } from 'lodash';
import { eventCellStylesIcon, eventCellStylesRoot } from '../Event/EventCell';
import { emptyPixel } from '../EventWrapper.constants';
import { AGENDA_PROP_TYPES, AGENDA_DEFAULT_PROPS } from './AgentView.constants';

const customInRange = (event, day, localizer) => {
  const eStart = event.start;
  const eEnd = event.end;
  return day >= eStart && day <= eEnd;
};

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

    // Se estaba utilizando esta funcion pero por algun motivo no determinaba bien que el final del evento tambien
    // estaba dentro del rango
    // let newEvents = [...events];
    // events = events.filter((e) =>
    //   inRange(e, localizer.startOf(day, 'day'), localizer.endOf(day, 'day'), accessors, localizer)
    // );
    events = events.filter((e) => customInRange(e, day, localizer));

    return events.map((event, idx) => {
      const title = accessors.title(event);
      const end = accessors.end(event);
      const start = accessors.start(event);

      const userProps = getters.eventProp(event, start, end, isSelected(event, selected));

      const dateLabel = idx === 0 && localizer.format(day, 'agendaDateFormat');
      const dates = {};
      if (idx === 0) {
        dates.day = localizer.format(day, 'dd');
        dates.dayOfWeek = localizer.format(day, 'ccc');
        dates.month = localizer.format(day, 'LLL');
      }
      const first =
        idx === 0 ? (
          <td rowSpan={events.length} className="rbc-agenda-date-cell">
            <Box className="rbc-agenda-td-data">
              {AgendaDate ? (
                <AgendaDate day={day} label={dateLabel} />
              ) : (
                <>
                  <Text strong size="md">
                    {dates.day}
                  </Text>{' '}
                  <Text strong>{dates.month.toUpperCase()}</Text>{' '}
                  <Text strong>{dates.dayOfWeek.toUpperCase()}</Text>
                </>
              )}
            </Box>
          </td>
        ) : (
          false
        );

      const eventIcon = event.originalEvent.icon || event.originalEvent.calendar.icon;
      const eventImage = event.originalEvent.image;

      const styleData = {
        isAllDay: event.allDay,
        bgColor: event.originalEvent.bgColor || event.originalEvent.calendar.bgColor,
      };

      const root = eventCellStylesRoot(COLORS, styleData);
      let icon = eventCellStylesIcon(COLORS, styleData);
      icon = omit(icon, 'img');

      const avatar = {
        image: eventImage || null,
        icon: eventIcon ? (
          <Box style={icon}>
            <ImageLoader
              height="12px"
              width="12px"
              alt="event icon"
              imageStyles={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: 12,
                transform: 'translate(-50%, -50%)',
                filter: 'brightness(0) invert(1)',
              }}
              src={eventIcon}
              forceImage
            />
          </Box>
        ) : null,
        color: event.originalEvent.bgColor || event.originalEvent.calendar.bgColor,
      };

      if (event.originalEvent.calendar.isUserCalendar) {
        avatar.fullName = event.originalEvent.calendar.fullName;
      } else if (!avatar.image && !avatar.icon) {
        avatar.image = emptyPixel;
      }

      return (
        <tr key={`${dayKey}_${idx}`} className={userProps.className} style={userProps.style}>
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
              {Event ? (
                <Event event={event} title={title} />
              ) : (
                <Box
                  style={{
                    ...root,
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '4px',
                    paddingTop: '6px',
                    paddingBottom: '6px',
                  }}
                >
                  <Avatar mx="auto" size="sm" {...avatar} />
                  <Text color="primary" role="productive" strong style={{ marginLeft: 4 }}>
                    {title}
                  </Text>
                </Box>
              )}
            </Box>
          </td>
        </tr>
      );
    }, []);
  };

  const timeRangeLabel = (day, event) => {
    let labelClass = '';
    const TimeComponent = components.time;
    let label = localizer.messages.allDay;

    const end = accessors.end(event);
    const start = accessors.start(event);

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

    let prior = false;
    let after = false;
    if (localizer.gt(day, start, 'day')) {
      labelClass = 'rbc-continues-prior';
      prior = true;
    }
    if (localizer.lt(day, end, 'day')) {
      labelClass += ' rbc-continues-after';
      after = true;
    }

    const bgColor = colord(event.originalEvent.bgColor || event.originalEvent.calendar.bgColor)
      .desaturate(0.2)
      .alpha(0.2)
      .toRgbString();

    return (
      <span className={labelClass.trim()}>
        {TimeComponent ? (
          <TimeComponent event={event} day={day} label={label} />
        ) : (
          <Text role="productive" strong>
            {label}
            {(prior && !after) || (!prior && after) ? (
              <Box
                className="rbc-continues-box"
                style={event.allDay ? { backgroundColor: bgColor } : null}
              >
                {prior ? localizer.messages.end : localizer.messages.init}
              </Box>
            ) : null}
          </Text>
        )}
      </span>
    );
  };

  const _adjustHeader = () => {
    if (!tbodyRef.current) return;

    const header = headerRef.current;
    const firstRow = tbodyRef.current.firstChild;

    if (!firstRow) return;

    const isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;

    let _widths = [];
    const widths = _widths;

    _widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])];

    if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
      dateColRef.current.style.width = `${_widths[0]}px`;
      timeColRef.current.style.width = `${_widths[1]}px`;
    }

    if (isOverflowing) {
      addClass(header, 'rbc-header-overflowing');
      header.style.marginRight = `${scrollbarSize()}px`;
    } else {
      removeClass(header, 'rbc-header-overflowing');
    }
  };

  const { messages } = localizer;
  const end = localizer.add(date, length, 'day');

  const range = localizer.range(date, end, 'day');

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

Agenda.propTypes = AGENDA_PROP_TYPES;
Agenda.defaultProps = AGENDA_DEFAULT_PROPS;

Agenda.range = (start, { length = Agenda.defaultProps.length, localizer }) => {
  const end = localizer.add(start, length, 'day');
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
  const end = localizer.add(start, length, 'day');
  return localizer.format({ start, end }, 'agendaHeaderFormat');
};

export default Agenda;

import React from 'react';
import PropTypes from 'prop-types';
import _, { capitalize, chunk } from 'lodash';
import { findDOMNode } from 'react-dom';
import getPosition from 'dom-helpers/position';
import * as animationFrame from 'dom-helpers/animationFrame';
import { navigate, views } from 'react-big-calendar/lib/utils/constants';
import { notify } from 'react-big-calendar/lib/utils/helpers';
import { inRange, sortEvents } from 'react-big-calendar/lib/utils/eventLevels';
import Popup from 'react-big-calendar/lib/Popup';
import Header from 'react-big-calendar/lib/Header';
import DateHeader from 'react-big-calendar/lib/DateHeader';
import { Box, COLORS, Popper } from '@bubbles-ui/components';
import { colord } from 'colord';

import DateContentRow from '../Date/DateContentRow';

let eventsForWeek = (events, start, end, localizer, isFirstWeek, isLastWeek, week) => {
  const range = { start, end };
  const filteredEvents = events.filter((event) => {
    return localizer.inEventRange({
      event: { ...event },
      range: range,
    });
  });
  filteredEvents.sort((eventA, eventB) => {
    const eventAzIndex = eventA.originalEvent.zIndex || eventA.originalEvent.calendar.zIndex;
    const eventBzIndex = eventB.originalEvent.zIndex || eventB.originalEvent.calendar.zIndex;
    return eventAzIndex - eventBzIndex;
  });
  const finalEvents = filteredEvents.map((event) => {
    if (isLastWeek) {
      if (event.end.getYear() > end.getYear() || event.end.getMonth() > end.getMonth())
        return { ...event, end: end, realEnd: event.end };
    }
    if (isFirstWeek) {
      if (event.start.getYear() < start.getYear() || event.start.getMonth() < start.getMonth())
        return { ...event, start: start };
    }
    return event;
  });
  return finalEvents;
};

let eventsForWeekNormal = (evts, start, end, accessors, localizer) => {
  const filteredEvents = evts.filter((e) => inRange(e, start, end, accessors, localizer));
  const finalEvents = filteredEvents.map((event) => {
    const eStart = event.start;
    const eEnd = event.end;
    if (localizer.isSameDate(eStart, eEnd)) return event;
    event.realEnd = eEnd;
    event.end = new Date(new Date(eEnd).setHours(2, 0, 0));
    return event;
  });
  return finalEvents;
};

class MonthView extends React.Component {
  constructor(...args) {
    super(...args);

    this._bgRows = [];
    this._pendingSelection = [];
    this.slotRowRef = React.createRef();
    this.state = {
      rowLimit: 5,
      needLimitMeasure: true,
    };
  }

  UNSAFE_componentWillReceiveProps({ date }) {
    const { date: propsDate, localizer } = this.props;
    this.setState({
      needLimitMeasure: localizer.neq(date, propsDate, 'month'),
    });
  }

  componentDidMount() {
    let running;

    const days = this.props.localizer.visibleDays(this.props.date, this.props.localizer);
    days[days.length - 1].setHours(23, 59, 59);
    this.props.onRangeChange({
      start: days[0],
      end: days[days.length - 1],
    });

    if (this.state.needLimitMeasure) this.measureRowLimit(this.props);

    window.addEventListener(
      'resize',
      (this._resizeListener = () => {
        if (!running) {
          animationFrame.request(() => {
            running = false;
            this.setState({ needLimitMeasure: true }); //eslint-disable-line
          });
        }
      }),
      false
    );
  }

  componentDidUpdate() {
    if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resizeListener, false);
  }

  getContainer = () => {
    return findDOMNode(this);
  };

  render() {
    let { date, localizer, style, components } = this.props;
    let month = localizer.visibleDays(date, localizer);
    let weeks = chunk(month, 7);

    this._weekCount = weeks.length;

    return (
      <Box style={style} className={'rbc-month-view'} role="table" aria-label="Month View">
        <Box className="rbc-row rbc-month-header" role="row">
          {this.renderHeaders(weeks[0])}
        </Box>
        {weeks.map(this.renderWeek)}
        {this.props.popup && this.renderOverlay()}
      </Box>
    );
  }

  renderWeek = (week, weekIdx, monthWeeks) => {
    let {
      events,
      components,
      selectable,
      getNow,
      selected,
      date,
      localizer,
      longPressThreshold,
      accessors,
      getters,
      showAllEvents,
      hideBgTitles,
      isMonthView,
      monthNumber,
      printMode,
    } = this.props;

    const { needLimitMeasure, rowLimit } = this.state;
    const { showWeekends } = components;

    if (!showWeekends) {
      week = _.filter(week, (date) => {
        return date.getDay() !== 0 && date.getDay() !== 6;
      });
    }

    const isFirstWeek = weekIdx === 0;
    const isLastWeek = weekIdx === monthWeeks.length - 1;

    let firstDayPosition = 0;
    let lastDayPosition = 0;
    if (isFirstWeek) firstDayPosition = week.findIndex((day) => day.getDate() === 1);
    if (isLastWeek) {
      const endOfMonth = localizer.endOf(week[0], 'months').getDate();
      lastDayPosition = week.findIndex((day) => day.getDate() === endOfMonth);
    }
    const startOfWeek = isMonthView && isFirstWeek ? week[firstDayPosition] : week[0];
    const endOfWeeek = isMonthView && isLastWeek ? week[lastDayPosition] : week[week.length - 1];

    // let's not mutate props
    const weeksEvents = isMonthView
      ? eventsForWeek([...events], startOfWeek, endOfWeeek, localizer, isFirstWeek, isLastWeek)
      : eventsForWeekNormal([...events], week[0], week[week.length - 1], accessors, localizer);

    weeksEvents.sort((a, b) => sortEvents(a, b, accessors, localizer));

    return (
      <DateContentRow
        key={weekIdx}
        ref={weekIdx === 0 ? this.slotRowRef : undefined}
        container={this.getContainer}
        className="rbc-month-row"
        getNow={getNow}
        date={date}
        range={week}
        events={weeksEvents}
        maxRows={showAllEvents ? Infinity : rowLimit}
        selected={selected}
        selectable={selectable}
        components={components}
        accessors={accessors}
        getters={getters}
        localizer={localizer}
        renderHeader={this.readerDateHeading}
        renderForMeasure={needLimitMeasure}
        onShowMore={this.handleShowMore}
        onSelect={this.handleSelectEvent}
        onDoubleClick={this.handleDoubleClickEvent}
        onKeyPress={this.handleKeyPressEvent}
        onSelectSlot={this.handleSelectSlot}
        longPressThreshold={longPressThreshold}
        hideBgTitles={hideBgTitles}
        rtl={this.props.rtl}
        resizable={this.props.resizable}
        showAllEvents={showAllEvents}
        isMonthView={isMonthView}
        monthNumber={monthNumber}
        printMode={printMode}
      />
    );
  };

  readerDateHeading = ({ date, isWeekend, className, ...props }) => {
    let { date: currentDate, getDrilldownView, localizer, isMonthView, events } = this.props;
    let isOffRange = localizer.neq(date, currentDate, 'month');
    let isCurrent = localizer.isSameDate(date, currentDate);
    let drilldownView = getDrilldownView(date);
    let label = localizer.format(date, 'dateFormat').replace(/^0/, '');
    let DateHeaderComponent = this.props.components.dateHeader || DateHeader;
    const { cx } = this.props.components;

    let dateIsInRangeOfTextColor = false;
    if (_.isArray(events) && events.length > 0) {
      events.forEach((event) => {
        if (dateIsInRangeOfTextColor) return;
        const { originalEvent } = event;
        const eventBgColor = originalEvent.bgColor || originalEvent.calendar.bgColor;
        const eventBgRGBColor = colord(
          _.isArray(eventBgColor) ? eventBgColor[0] : eventBgColor
        ).toRgb();
        const brightness = Math.round(
          (parseInt(eventBgRGBColor.r) * 299 +
            parseInt(eventBgRGBColor.g) * 587 +
            parseInt(eventBgRGBColor.b) * 114) /
            1000
        );
        const eventTextColor = !(brightness > 125 || eventBgColor === 'transparent');
        dateIsInRangeOfTextColor =
          eventTextColor && localizer.inRange(date, event.start, event.end);
      });
    }

    return (
      <Box
        {...props}
        className={cx(className, { 'rbc-off-range': isOffRange, 'rbc-current': isCurrent })}
        role="cell"
        style={{
          pointerEvents: 'all',
          visibility: isMonthView && isOffRange && 'hidden',
          position: 'relative',
          color: isMonthView && dateIsInRangeOfTextColor && `${COLORS.mainWhite}`,
        }}
      >
        {isMonthView && isWeekend && COLORS.ui02 ? (
          <Box
            style={{
              backgroundColor: COLORS.ui02,
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: -99999,
            }}
          />
        ) : null}
        <DateHeaderComponent
          label={label}
          date={date}
          drilldownView={drilldownView}
          isOffRange={isOffRange}
          onDrillDown={(e) => this.handleHeadingClick(date, drilldownView, e)}
        />
      </Box>
    );
  };

  renderHeaders(row) {
    const { localizer, components, isMonthView } = this.props;
    const HeaderComponent = components.header || Header;
    const { showWeekends } = components;
    let weekRow = [...row];
    if (!showWeekends) {
      weekRow = _.filter(weekRow, (date) => {
        return date.getDay() !== 0 && date.getDay() !== 6;
      });
    }

    const first = weekRow[0];
    const last = weekRow[weekRow.length - 1];

    return localizer.range(first, last, 'day').map((day, idx) => {
      const dayName = isMonthView
        ? localizer.format(day, 'weekdayFormat')[0]
        : localizer.format(day, 'weekdayFormat');
      return (
        <Box key={'header_' + idx} className="rbc-header">
          <HeaderComponent date={day} localizer={localizer} label={capitalize(dayName)} />
        </Box>
      );
    });
  }

  renderOverlay() {
    let overlay = (this.state && this.state.overlay) || {};
    let { accessors, localizer, components, getters, selected, popupOffset } = this.props;

    return (
      <Popper
        position="bottom"
        placement="center"
        transition="fade"
        mounted={!!overlay.position}
        onHide={() => this.setState({ overlay: null })}
        referenceElement={overlay.target}
      >
        {({ props }) => (
          <Popup
            {...props}
            popupOffset={popupOffset}
            accessors={accessors}
            getters={getters}
            selected={selected}
            components={components}
            localizer={localizer}
            position={overlay.position}
            show={this.overlayDisplay}
            events={overlay.events}
            slotStart={overlay.date}
            slotEnd={overlay.end}
            onSelect={this.handleSelectEvent}
            onDoubleClick={this.handleDoubleClickEvent}
            onKeyPress={this.handleKeyPressEvent}
            handleDragStart={this.props.handleDragStart}
          />
        )}
      </Popper>
    );
  }

  measureRowLimit() {
    this.setState({
      needLimitMeasure: false,
      rowLimit: this.slotRowRef.current.getRowLimit(),
    });
  }

  handleSelectSlot = (range, slotInfo) => {
    this._pendingSelection = this._pendingSelection.concat(range);

    clearTimeout(this._selectTimer);
    this._selectTimer = setTimeout(() => this.selectDates(slotInfo));
  };

  handleHeadingClick = (date, view, e) => {
    e.preventDefault();
    this.clearSelection();
    notify(this.props.onDrillDown, [date, view]);
  };

  handleSelectEvent = (...args) => {
    this.clearSelection();
    notify(this.props.onSelectEvent, args);
  };

  handleDoubleClickEvent = (...args) => {
    this.clearSelection();
    notify(this.props.onDoubleClickEvent, args);
  };

  handleKeyPressEvent = (...args) => {
    this.clearSelection();
    notify(this.props.onKeyPressEvent, args);
  };

  handleShowMore = (events, date, cell, slot, target) => {
    const { popup, onDrillDown, onShowMore, getDrilldownView, doShowMoreDrillDown } = this.props;
    //cancel any pending selections so only the event click goes through.
    this.clearSelection();

    if (popup) {
      let position = getPosition(cell, findDOMNode(this));

      this.setState({
        overlay: { date, events, position, target },
      });
    } else if (doShowMoreDrillDown) {
      notify(onDrillDown, [date, getDrilldownView(date) || views.DAY]);
    }

    notify(onShowMore, [events, date, slot]);
  };

  overlayDisplay = () => {
    this.setState({
      overlay: null,
    });
  };

  selectDates(slotInfo) {
    let slots = this._pendingSelection.slice();

    this._pendingSelection = [];

    slots.sort((a, b) => +a - +b);

    const start = new Date(slots[0]);
    const end = new Date(slots[slots.length - 1]);
    end.setDate(slots[slots.length - 1].getDate() + 1);

    notify(this.props.onSelectSlot, {
      slots,
      start,
      end,
      action: slotInfo.action,
      bounds: slotInfo.bounds,
      box: slotInfo.box,
    });
  }

  clearSelection() {
    clearTimeout(this._selectTimer);
    this._pendingSelection = [];
  }
}

MonthView.propTypes = {
  events: PropTypes.array.isRequired,
  date: PropTypes.instanceOf(Date),

  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),

  step: PropTypes.number,
  getNow: PropTypes.func.isRequired,

  scrollToTime: PropTypes.instanceOf(Date),
  rtl: PropTypes.bool,
  resizable: PropTypes.bool,
  width: PropTypes.number,

  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,

  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,

  onNavigate: PropTypes.func,
  onSelectSlot: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onDoubleClickEvent: PropTypes.func,
  onKeyPressEvent: PropTypes.func,
  onShowMore: PropTypes.func,
  showAllEvents: PropTypes.bool,
  doShowMoreDrillDown: PropTypes.bool,
  onDrillDown: PropTypes.func,
  getDrilldownView: PropTypes.func.isRequired,

  popup: PropTypes.bool,
  handleDragStart: PropTypes.func,

  popupOffset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ]),
};

MonthView.range = (date, { localizer }) => {
  let start = localizer.firstVisibleDay(date, localizer);
  let end = localizer.lastVisibleDay(date, localizer);
  return { start, end };
};

MonthView.navigate = (date, action, { localizer }) => {
  switch (action) {
    case navigate.PREVIOUS:
      return localizer.add(date, -1, 'month');

    case navigate.NEXT:
      return localizer.add(date, 1, 'month');

    default:
      return date;
  }
};

MonthView.title = (date, { localizer }) => localizer.format(date, 'monthHeaderFormat');

export { MonthView };

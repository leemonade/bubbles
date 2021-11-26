import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import getHeight from 'dom-helpers/height';
import qsa from 'dom-helpers/querySelectorAll';
import { findDOMNode } from 'react-dom';
import NoopWrapper from 'react-big-calendar/lib/NoopWrapper';
import ScrollableWeekWrapper from 'react-big-calendar/lib/ScrollableWeekWrapper';
import * as DateSlotMetrics from 'react-big-calendar/lib/utils/DateSlotMetrics';
import BackgroundCells from './BackgroundCells';
import EventEndingRow from './EventEndingRow';
import EventRow from './EventRow';

class DateContentRow extends React.Component {
  constructor(...args) {
    super(...args);

    this.slotMetrics = DateSlotMetrics.getSlotMetrics();
  }

  handleSelectSlot = (slot) => {
    const { range, onSelectSlot } = this.props;

    onSelectSlot(range.slice(slot.start, slot.end + 1), slot);
  };

  handleShowMore = (slot, target) => {
    const { range, onShowMore } = this.props;
    let metrics = this.slotMetrics(this.props);
    let row = qsa(findDOMNode(this), '.rbc-row-bg')[0];

    let cell;
    if (row) cell = row.children[slot - 1];

    let events = metrics.getEventsForSlot(slot);
    onShowMore(events, range[slot - 1], cell, slot, target);
  };

  createHeadingRef = (r) => {
    this.headingRow = r;
  };

  createEventRef = (r) => {
    this.eventRow = r;
  };

  getContainer = () => {
    const { container } = this.props;
    return container ? container() : findDOMNode(this);
  };

  getRowLimit() {
    let eventHeight = getHeight(this.eventRow);
    let headingHeight = this.headingRow ? getHeight(this.headingRow) : 0;
    let eventSpace = getHeight(findDOMNode(this)) - headingHeight;

    return Math.max(Math.floor(eventSpace / eventHeight), 1);
  }

  renderHeadingCell = (date, index) => {
    let { renderHeader, getNow, localizer } = this.props;
    const { cx } = this.props.components;

    return renderHeader({
      date,
      key: `header_${index}`,
      className: cx('rbc-date-cell', { ['rbc-now']: localizer.isSameDate(date, getNow()) }),
    });
  };

  renderDummy = () => {
    let { className, range, renderHeader, showAllEvents } = this.props;
    const { cx } = this.props.components;
    return (
      <Box className={className}>
        <Box className={cx('rbc-row-content', { ['rbc-row-content-scrollable']: showAllEvents })}>
          {renderHeader && (
            <Box className="rbc-row" ref={this.createHeadingRef}>
              {range.map(this.renderHeadingCell)}
            </Box>
          )}
          <Box className="rbc-row" ref={this.createEventRef}>
            <Box className="rbc-row-segment">
              <Box className="rbc-event">
                <Box className="rbc-event-content">&nbsp;</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  render() {
    const {
      date,
      rtl,
      range,
      className,
      selected,
      selectable,
      renderForMeasure,

      accessors,
      getters,
      components,

      events,

      getNow,
      renderHeader,
      onSelect,
      localizer,
      onSelectStart,
      onSelectEnd,
      onDoubleClick,
      onKeyPress,
      resourceId,
      longPressThreshold,
      isAllDay,
      resizable,
      showAllEvents,
      hideBgTitles,
    } = this.props;

    if (renderForMeasure) return this.renderDummy();

    const normalEvents = [];
    const backgroundEvents = [];
    events.forEach((event) => {
      if (event.display === 'background') {
        backgroundEvents.push(event);
      } else {
        normalEvents.push(event);
      }
    });

    let metrics = this.slotMetrics({ ...this.props, events: normalEvents });
    let { levels, extra } = metrics;

    let ScrollableWeekComponent = showAllEvents ? ScrollableWeekWrapper : NoopWrapper;
    let WeekWrapper = components.weekWrapper;
    const { cx } = components;

    const eventRowProps = {
      selected,
      accessors,
      getters,
      localizer,
      components,
      onSelect,
      onDoubleClick,
      onKeyPress,
      resourceId,
      slotMetrics: metrics,
      resizable,
    };

    return (
      <Box className={className} role="rowgroup">
        <BackgroundCells
          localizer={localizer}
          date={date}
          getNow={getNow}
          rtl={rtl}
          range={range}
          events={backgroundEvents}
          selectable={selectable}
          container={this.getContainer}
          getters={getters}
          accessors={accessors}
          onSelectStart={onSelectStart}
          onSelectEnd={onSelectEnd}
          onSelectSlot={this.handleSelectSlot}
          components={components}
          longPressThreshold={longPressThreshold}
          resourceId={resourceId}
          hideBgTitles={hideBgTitles}
        />

        <Box
          className={cx('rbc-row-content', { ['rbc-row-content-scrollable']: showAllEvents })}
          style={{ pointerEvents: 'none' }}
          role="row"
        >
          {renderHeader && (
            <Box className="rbc-row" style={{ pointerEvents: 'none' }} ref={this.createHeadingRef}>
              {range.map(this.renderHeadingCell)}
            </Box>
          )}
          <ScrollableWeekComponent>
            <WeekWrapper isAllDay={isAllDay} {...eventRowProps}>
              {levels.map((segs, idx) => (
                <EventRow key={idx} segments={segs} {...eventRowProps} />
              ))}
              {!!extra.length && (
                <EventEndingRow
                  segments={extra}
                  onShowMore={this.handleShowMore}
                  {...eventRowProps}
                />
              )}
            </WeekWrapper>
          </ScrollableWeekComponent>
        </Box>
      </Box>
    );
  }
}

DateContentRow.propTypes = {
  date: PropTypes.instanceOf(Date),
  events: PropTypes.array.isRequired,
  range: PropTypes.array.isRequired,

  rtl: PropTypes.bool,
  resizable: PropTypes.bool,
  resourceId: PropTypes.any,
  renderForMeasure: PropTypes.bool,
  renderHeader: PropTypes.func,

  container: PropTypes.func,
  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,

  onShowMore: PropTypes.func,
  showAllEvents: PropTypes.bool,
  onSelectSlot: PropTypes.func,
  onSelect: PropTypes.func,
  onSelectEnd: PropTypes.func,
  onSelectStart: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  dayPropGetter: PropTypes.func,

  getNow: PropTypes.func.isRequired,
  isAllDay: PropTypes.bool,

  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,

  minRows: PropTypes.number.isRequired,
  maxRows: PropTypes.number.isRequired,
};

DateContentRow.defaultProps = {
  minRows: 0,
  maxRows: Infinity,
};

export default DateContentRow;

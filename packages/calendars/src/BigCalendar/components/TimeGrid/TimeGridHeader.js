import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import scrollbarSize from 'dom-helpers/scrollbarSize';
import Header from 'react-big-calendar/lib/Header';
import ResourceHeader from 'react-big-calendar/lib/ResourceHeader';
import { notify } from 'react-big-calendar/lib/utils/helpers';
import DateHeader from 'react-big-calendar/lib/DateHeader';
import { Box } from '@bubbles-ui/components';

import DateContentRow from '../Date/DateContentRow';

class TimeGridHeader extends React.Component {
  handleHeaderClick = (date, view, e) => {
    e.preventDefault();
    notify(this.props.onDrillDown, [date, view]);
  };

  renderHeaderCells(range) {
    let {
      localizer,
      getDrilldownView,
      getNow,
      getters: { dayProp },
      components: { cx, header: HeaderComponent = Header },
    } = this.props;

    const today = getNow();

    return range.map((date, i) => {
      let drilldownView = getDrilldownView(date);
      let label = localizer.format(
        date,
        range.length === 1 ? 'weekdayFullFormat' : 'weekdayFormat'
      );

      label = range.length === 1 ? capitalize(label) : label;

      const { className, style } = dayProp(date);

      let header = <HeaderComponent date={date} label={label} localizer={localizer} />;

      return (
        <Box
          key={i}
          style={style}
          className={cx('rbc-header', className, {
            'rbc-today': localizer.isSameDate(date, today),
          })}
        >
          {drilldownView ? (
            <a href="#" onClick={(e) => this.handleHeaderClick(date, drilldownView, e)}>
              {header}
            </a>
          ) : (
            <span>{header}</span>
          )}
        </Box>
      );
    });
  }

  readerDateHeading = ({ date, className, ...props }) => {
    let { date: currentDate, getDrilldownView, localizer } = this.props;
    let isOffRange = localizer.neq(date, currentDate, 'month');
    let isCurrent = localizer.isSameDate(date, currentDate);
    let drilldownView = getDrilldownView(date);
    let label = localizer.format(date, 'dateFormat').replace(/^0/, '');
    let DateHeaderComponent = this.props.components.dateHeader || DateHeader;
    const { cx } = this.props.components;

    return (
      <Box
        {...props}
        className={cx(className, { 'rbc-off-range': isOffRange, 'rbc-current': isCurrent })}
        role="cell"
        style={{ pointerEvents: 'all' }}
      >
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
  renderRow = (resource) => {
    let {
      events,
      rtl,
      selectable,
      getNow,
      range,
      getters,
      localizer,
      accessors,
      components,
      resizable,
    } = this.props;

    const resourceId = accessors.resourceId(resource);
    let eventsToDisplay = resource
      ? events.filter((event) => accessors.resource(event) === resourceId)
      : events;

    return (
      <DateContentRow
        isAllDay
        rtl={rtl}
        getNow={getNow}
        minRows={2}
        range={range}
        events={eventsToDisplay}
        resourceId={resourceId}
        className="rbc-allday-cell"
        selectable={selectable}
        selected={this.props.selected}
        components={components}
        accessors={accessors}
        getters={getters}
        localizer={localizer}
        onSelect={this.props.onSelectEvent}
        onDoubleClick={this.props.onDoubleClickEvent}
        onKeyPress={this.props.onKeyPressEvent}
        onSelectSlot={this.props.onSelectSlot}
        longPressThreshold={this.props.longPressThreshold}
        resizable={resizable}
      />
    );
  };

  render() {
    let {
      width,
      rtl,
      resources,
      range,
      events,
      getNow,
      accessors,
      selectable,
      components,
      getters,
      scrollRef,
      localizer,
      isOverflowing,
      components: {
        cx,
        timeGutterHeader: TimeGutterHeader,
        resourceHeader: ResourceHeaderComponent = ResourceHeader,
        hideAllDayCells,
      },
      resizable,
    } = this.props;

    let style = {};
    if (isOverflowing) {
      style[rtl ? 'marginLeft' : 'marginRight'] = `${scrollbarSize()}px`;
    }

    const groupedEvents = resources.groupEvents(events);

    return (
      <Box
        style={style}
        ref={scrollRef}
        className={cx('rbc-time-header', { 'rbc-overflowing': isOverflowing })}
      >
        <Box
          className="rbc-label rbc-time-header-gutter"
          style={{ width, minWidth: width, maxWidth: width }}
        >
          {TimeGutterHeader && <TimeGutterHeader />}
        </Box>

        {resources.map(([id, resource], idx) => (
          <Box className="rbc-time-header-content" key={id || idx}>
            {resource && (
              <Box className="rbc-row rbc-row-resource" key={`resource_${idx}`}>
                <Box className="rbc-header">
                  <ResourceHeaderComponent
                    index={idx}
                    label={accessors.resourceTitle(resource)}
                    resource={resource}
                  />
                </Box>
              </Box>
            )}
            <Box
              className={cx('rbc-row', 'rbc-time-header-cell', {
                'rbc-time-header-cell-single-day': range.length <= 1,
              })}
            >
              {this.renderHeaderCells(range)}
            </Box>

            {!hideAllDayCells ? (
              <DateContentRow
                isAllDay
                rtl={rtl}
                getNow={getNow}
                minRows={2}
                range={range}
                events={groupedEvents.get(id) || []}
                resourceId={resource && id}
                className="rbc-allday-cell"
                selectable={selectable}
                selected={this.props.selected}
                components={components}
                accessors={accessors}
                getters={getters}
                localizer={localizer}
                renderHeader={this.readerDateHeading}
                onSelect={this.props.onSelectEvent}
                onDoubleClick={this.props.onDoubleClickEvent}
                onKeyPress={this.props.onKeyPressEvent}
                onSelectSlot={this.props.onSelectSlot}
                longPressThreshold={this.props.longPressThreshold}
                resizable={resizable}
              />
            ) : null}
          </Box>
        ))}
      </Box>
    );
  }
}

TimeGridHeader.propTypes = {
  range: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  resources: PropTypes.object,
  getNow: PropTypes.func.isRequired,
  isOverflowing: PropTypes.bool,

  rtl: PropTypes.bool,
  resizable: PropTypes.bool,
  width: PropTypes.number,

  localizer: PropTypes.object.isRequired,
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,

  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,

  onSelectSlot: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onDoubleClickEvent: PropTypes.func,
  onKeyPressEvent: PropTypes.func,
  onDrillDown: PropTypes.func,
  getDrilldownView: PropTypes.func.isRequired,
  scrollRef: PropTypes.any,
};

export default TimeGridHeader;

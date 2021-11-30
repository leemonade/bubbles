import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@mantine/core';
import { ImageLoader } from '../../../../misc';

class EventCell extends React.Component {
  render() {
    let {
      style,
      className,
      event,
      selected,
      isAllDay,
      onSelect,
      onDoubleClick,
      onKeyPress,
      localizer,
      continuesPrior,
      continuesAfter,
      accessors,
      getters,
      children,
      components: { cx, event: Event, eventWrapper: EventWrapper },
      slotStart,
      slotEnd,
      ...props
    } = this.props;
    delete props.resizable;

    const originalEvent = event.originalEvent;

    const title = accessors.title(event);
    const tooltip = accessors.tooltip(event);
    const end = accessors.end(event);
    const start = accessors.start(event);
    const allDay = accessors.allDay(event);

    const showAsAllDay =
      isAllDay || allDay || localizer.diff(start, localizer.ceil(end, 'day'), 'day') > 1;

    const userProps = getters.eventProp(event, start, end, selected);

    userProps.style = { ...userProps.style, backgroundColor: originalEvent.calendar.bgColor };
    const eventIcon = originalEvent.calendar.icon;

    const content = (
      <Box
        style={{ pointerEvents: 'all' }}
        className="rbc-event-content"
        title={tooltip || undefined}
      >
        {Event ? (
          <Event
            event={event}
            continuesPrior={continuesPrior}
            continuesAfter={continuesAfter}
            title={title}
            isAllDay={allDay}
            localizer={localizer}
            slotStart={slotStart}
            slotEnd={slotEnd}
          />
        ) : (
          <>
            {eventIcon && <ImageLoader src={eventIcon} style={{ justifyContent: 'left' }} />}
            <span style={{ marginLeft: eventIcon ? 20 : 0 }}>{title}</span>
          </>
        )}
      </Box>
    );

    return (
      <EventWrapper {...this.props} type="date">
        <Box
          {...props}
          tabIndex={0}
          style={{ ...userProps.style, ...style }}
          className={cx('rbc-event', className, userProps.className, {
            'rbc-selected': selected,
            'rbc-event-allday': showAsAllDay,
            'rbc-event-continues-prior': continuesPrior,
            'rbc-event-continues-after': continuesAfter,
          })}
          onClick={(e) => onSelect && onSelect(event, e)}
          onDoubleClick={(e) => onDoubleClick && onDoubleClick(event, e)}
          onKeyPress={(e) => onKeyPress && onKeyPress(event, e)}
        >
          {typeof children === 'function' ? children(content) : content}
        </Box>
      </EventWrapper>
    );
  }
}

EventCell.propTypes = {
  event: PropTypes.object.isRequired,
  slotStart: PropTypes.instanceOf(Date),
  slotEnd: PropTypes.instanceOf(Date),

  resizable: PropTypes.bool,
  selected: PropTypes.bool,
  isAllDay: PropTypes.bool,
  continuesPrior: PropTypes.bool,
  continuesAfter: PropTypes.bool,

  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object,

  onSelect: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onKeyPress: PropTypes.func,
};

export default EventCell;

import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Box, createStyles, ImageLoader } from '@bubbles-ui/components';
import { colord } from 'colord';

const emptyPixel =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

const eventCellStyles = createStyles((theme, { isAllDay, bgColor }) => {
  return {
    root: {
      backgroundColor: `${
        isAllDay
          ? colord(bgColor).desaturate(0.2).alpha(0.2).toRgbString()
          : theme.colors.uiBackground01
      }!important`,
      color: `${theme.colors.text01}!important`,
      borderRadius: '4px!important',
      fontWeight: 500,
    },
    icon: {
      borderRadius: '50%',
      color: `${theme.colors.text07}!important`,
      backgroundColor: `${bgColor}!important`,
      minWidth: '20px',
      minHeight: '20px',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      img: {
        filter: 'brightness(0) invert(1)',
      },
    },
    item: {
      display: 'flex!important',
      alignItems: 'center',
    },
  };
});

function EventCell(thisprops) {
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
  } = thisprops;
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

  userProps.style = {
    ...userProps.style,
  };

  const eventIcon = originalEvent.icon || originalEvent.calendar.icon;
  const eventImage = originalEvent.image || originalEvent.calendar.image;

  const { classes } = eventCellStyles({
    isAllDay: event.allDay,
    bgColor: originalEvent.bgColor || originalEvent.calendar.bgColor,
  });

  const avatar = {
    image: eventImage || null,
    icon: eventIcon ? (
      <Box className={classes.icon}>
        <ImageLoader
          height="12px"
          imageStyles={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 12,
            transform: 'translate(-50%, -50%)',
          }}
          src={eventIcon}
          forceImage
        />
      </Box>
    ) : null,
    color: originalEvent.bgColor || originalEvent.calendar.bgColor,
  };

  if (originalEvent.calendar.isUserCalendar) {
    avatar.fullName = originalEvent.calendar.fullName;
  } else if (!avatar.image && !avatar.icon) {
    avatar.image = emptyPixel;
  }

  const content = (
    <Box
      style={{ pointerEvents: 'all' }}
      className={cx('rbc-event-content', classes.item)}
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
          <Avatar mx="auto" size="xs" {...avatar} />
          <span style={{ marginLeft: 4 }}>{title}</span>
        </>
      )}
    </Box>
  );

  return (
    <EventWrapper {...thisprops} type="date">
      <Box
        {...props}
        tabIndex={0}
        style={{ ...userProps.style, ...style }}
        className={cx(classes.root, 'rbc-event', className, userProps.className, {
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

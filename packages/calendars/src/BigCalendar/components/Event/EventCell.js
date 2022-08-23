import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Box, createStyles, ImageLoader } from '@bubbles-ui/components';
import { colord } from 'colord';
import _ from 'lodash';

const emptyPixel =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

function eventCellStylesRoot(
  colors,
  {
    rotate = 0,
    isAllDay,
    bgColor,
    borderStyle,
    borderColor,
    oneDay,
    isMonthView,
    rightArrow,
    leftArrow
  },
  imp
) {
  const data = {
    position: 'relative',
    backgroundColor: `${
      isAllDay ? _.isArray(bgColor) ? bgColor[0] : colord(bgColor).desaturate(0.2).alpha(0.2).toRgbString() : colors.uiBackground01
    }${imp ? '!important' : ''}`,
    color: `${colors.text01}${imp ? '!important' : ''}`,
    border:
      isMonthView && !oneDay
        ? `2px ${borderStyle || 'dashed'} ${borderColor || colors.mainBlack}${
          imp ? '!important' : ''
        }`
        : `2px ${borderStyle || 'dashed'} transparent${imp ? '!important' : ''}`,
    borderRadius:
      !rightArrow && !leftArrow && isMonthView && oneDay
        ? `50%${imp ? '!important' : ''}`
        : `4px${imp ? '!important' : ''}`,
    fontWeight: 500,
    borderTopRightRadius: isMonthView && rightArrow && `0px${imp ? '!important' : ''}`,
    borderBottomRightRadius: isMonthView && rightArrow && `0px${imp ? '!important' : ''}`,
    width: isMonthView && (rightArrow || leftArrow) && `30px${imp ? '!important' : ''}`,
    transform: `rotate(${rotate}deg)`,
    overflow: 'hidden',
    zIndex: -2
  };
  if (_.isArray(bgColor)) {
    data.border = 'none';
    data['&:before'] = {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      backgroundColor: bgColor[1]
    };
  }
  return data;
}

function eventCellStylesIcon(colors, { isAllDay, bgColor }, imp) {
  return {
    borderRadius: '50%',
    color: `${colors.text07}${imp ? '!important' : ''}`,
    backgroundColor: `${bgColor}${imp ? '!important' : ''}`,
    minWidth: '20px',
    minHeight: '20px',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    img: {
      filter: 'brightness(0) invert(1)'
    }
  };
}

const eventCellStyles = createStyles(
  (
    theme,
    {
      rotate,
      isAllDay,
      bgColor,
      borderStyle,
      borderColor,
      isMonthView,
      oneDay,
      rightArrow,
      leftArrow
    }
  ) => {
    return {
      root: eventCellStylesRoot(
        theme.colors,
        {
          rotate,
          isAllDay,
          bgColor,
          borderStyle,
          borderColor,
          isMonthView,
          oneDay,
          rightArrow,
          leftArrow
        },
        true
      ),
      icon: eventCellStylesIcon(theme.colors, { isAllDay, bgColor }, true),
      item: {
        display: 'flex!important',
        alignItems: 'center'
      },
      rightArrow: {
        borderTop: '18px solid transparent',
        borderBottom: '18px solid transparent',
        borderLeft: `6px solid ${_.isArray(bgColor) ? bgColor[0] : colord(bgColor).desaturate(0.2).alpha(0.2).toRgbString()}`
      },
      leftArrow: {
        borderTop: '18px solid transparent',
        borderBottom: '18px solid transparent',
        borderRight: `6px solid ${_.isArray(bgColor) ? bgColor[0] : colord(bgColor).desaturate(0.2).alpha(0.2).toRgbString()}`
      }
    };
  }
);

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
    isMonthView,
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
    ...userProps.style
  };

  const eventIcon = originalEvent.icon || originalEvent.calendar.icon;
  const eventImage = originalEvent.image;

  const rightArrow = event.originalEvent.calendar.rightArrow;
  const leftArrow = event.originalEvent.calendar.leftArrow;

  const { classes } = eventCellStyles({
    rotate: originalEvent.rotate || originalEvent.calendar.rotate,
    isAllDay: event.allDay,
    bgColor: originalEvent.bgColor || originalEvent.calendar.bgColor,
    borderStyle: originalEvent.borderStyle || originalEvent.calendar.borderStyle,
    borderColor: originalEvent.borderColor || originalEvent.calendar.borderColor,
    oneDay: localizer.isSameDate(start, end) && !event.realEnd,
    isMonthView,
    rightArrow,
    leftArrow
  });

  const avatar = {
    image: eventImage || null,
    icon: eventIcon ? (
      <Box className={classes.icon}>
        <ImageLoader
          height='12px'
          imageStyles={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 12,
            transform: 'translate(-50%, -50%)'
          }}
          src={eventIcon}
          forceImage
        />
      </Box>
    ) : null,
    color: originalEvent.bgColor || originalEvent.calendar.bgColor
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
          {event.component ? (
            event.component
          ) : (
            <>
              <Avatar mx='auto' size='xs' {...avatar} />
              <span style={{ marginLeft: 4 }}>{title}</span>
            </>
          )}
        </>
      )}
    </Box>
  );

  return (
    <EventWrapper {...thisprops} type='date'>
      <Box
        {...props}
        tabIndex={0}
        style={{ ...userProps.style, ...style }}
        className={cx(classes.root, 'rbc-event', className, userProps.className, {
          'rbc-selected': selected,
          'rbc-event-allday': showAsAllDay,
          'rbc-event-continues-prior': continuesPrior,
          'rbc-event-continues-after': continuesAfter
        })}
        onClick={(e) => onSelect && onSelect(event, e)}
        onDoubleClick={(e) => onDoubleClick && onDoubleClick(event, e)}
        onKeyPress={(e) => onKeyPress && onKeyPress(event, e)}
      >
        {typeof children === 'function' ? children(content) : content}
      </Box>
      {isMonthView && rightArrow && <Box className={classes.rightArrow} />}
      {isMonthView && leftArrow && <Box className={classes.leftArrow} />}
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
  onKeyPress: PropTypes.func
};

export default EventCell;
export { eventCellStyles, eventCellStylesRoot, eventCellStylesIcon };

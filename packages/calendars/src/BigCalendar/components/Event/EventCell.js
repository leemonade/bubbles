/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Box, createStyles, ImageLoader, Tooltip } from '@bubbles-ui/components';
import { colord } from 'colord';
import _ from 'lodash';
import { DateTime } from 'luxon';

const emptyPixel =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

function eventCellStylesRoot(
  colors,
  {
    zIndex = 0,
    desaturateColor = true,
    rotate = 0,
    isAllDay,
    bgColor,
    borderStyle,
    borderColor,
    oneDay,
    isMonthView,
    rightArrow,
    leftArrow,
    printMode,
  },
  imp,
) {
  const data = {
    position: 'relative',
    padding: '0px!important',
    backgroundColor: `${
      isAllDay
        ? _.isArray(bgColor)
          ? bgColor[0]
          : desaturateColor
            ? colord(bgColor).desaturate(0.2).alpha(0.2).toRgbString()
            : bgColor
        : colors.uiBackground01
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
    borderTopLeftRadius: isMonthView && leftArrow && `0px${imp ? '!important' : ''}`,
    borderBottomLeftRadius: isMonthView && leftArrow && `0px${imp ? '!important' : ''}`,
    width:
      isMonthView &&
      (rightArrow || leftArrow) &&
      `${printMode ? '24px' : '32px'}${imp ? '!important' : ''}`,
    transform: isMonthView && `rotate(${rotate}deg)`,
    overflow: !leftArrow && !rightArrow && 'hidden',
    zIndex,
    borderRight: isMonthView && rightArrow && 'none!important',
    borderLeft: isMonthView && leftArrow && 'none!important',
  };

  if (isMonthView && borderColor) {
    data.border = `2px ${borderStyle || 'dashed'} ${borderColor || colors.mainBlack}${
      imp ? '!important' : ''
    }`;
  }
  if (isMonthView && _.isArray(bgColor)) {
    data.border = 'none';
    data['&:before'] = {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: zIndex + 1,
      backgroundColor: bgColor[1],
    };
  }
  return data;
}

function eventCellStylesIcon(colors, { bgColor }, imp) {
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
      filter: 'brightness(0) invert(1)',
    },
  };
}

const getArrowStyles = (rightArrow, leftArrow, bgColor, borderColor, printMode) => {
  const transparentBgColor = bgColor === 'transparent';

  const arrowBorder = {
    content: "''",
    position: 'absolute',
    left: rightArrow && -5,
    right: leftArrow && -5,
    width: 1.5,
    height: printMode ? 15 : 19,
    backgroundColor: borderColor,
  };

  return {
    position: 'absolute',
    top: printMode ? -2 : 0,
    bottom: 0,
    right: rightArrow && -4,
    left: leftArrow && -3.5,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: rightArrow
      ? printMode
        ? '14px 0px 14px 4px'
        : '16px 0 16px 4px'
      : leftArrow
        ? printMode
          ? '14px 4px 14px 0px'
          : '16px 4px 16px 0px'
        : undefined,
    borderColor: transparentBgColor
      ? 'transparent transparent transparent transparent'
      : `transparent ${leftArrow ? colord(bgColor).toRgbString() : 'transparent'} transparent ${
          rightArrow ? colord(bgColor).toRgbString() : 'transparent'
        }`,
    '&:before': {
      ...arrowBorder,
      top: -1,
      transform: `rotate(${rightArrow ? '' : leftArrow ? '-' : ''}15deg)`,
      transformOrigin: 'bottom',
    },
    '&:after': {
      ...arrowBorder,
      bottom: -1,
      transform: `rotate(${rightArrow ? '-' : leftArrow ? '' : ''}15deg)`,
      transformOrigin: 'top',
    },
  };
};

const eventCellStyles = createStyles(
  (
    theme,
    {
      zIndex,
      desaturateColor,
      rotate,
      isAllDay,
      bgColor,
      borderStyle,
      borderColor,
      isMonthView,
      oneDay,
      rightArrow,
      leftArrow,
      printMode,
      bgStartGradient,
      bgEndGradient,
    },
  ) => {
    const root = eventCellStylesRoot(
      theme.colors,
      {
        zIndex,
        desaturateColor,
        rotate,
        isAllDay,
        bgColor,
        borderStyle,
        borderColor,
        isMonthView,
        oneDay,
        rightArrow,
        leftArrow,
        printMode,
      },
      true,
    );
    let item = {};
    if (!isMonthView) {
      item = {
        borderRadius: root.borderRadius,
        backgroundColor: root.backgroundColor.replace('!important', ''),
        padding: theme.spacing[1],
        height: 34,
        display: 'flex!important',
        alignItems: 'center',
        justifyContent: 'space-between',
      };
      root.border = 'none';
      root.backgroundColor = 'transparent!important';
      if (bgStartGradient) {
        item.background = `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${item.backgroundColor} 25%, ${item.backgroundColor} 100%)`;
      }
      if (bgEndGradient) {
        item.background = `linear-gradient(90deg,${item.backgroundColor} 0%, ${item.backgroundColor} 75%, rgba(0,0,0,0) 100%)`;
      }
    }

    return {
      root,
      icon: eventCellStylesIcon(theme.colors, { isAllDay, bgColor }, true),
      item,
      fRightArrow: {
        width: 26,
        height: 26,
        borderRadius: '4px 4px 4px 4px',
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginRight: 14,
        '&:after': {
          borderRadius: '4px',
          transform: 'rotate(45deg)',
          left: '50%',
          content: '""',
          display: 'block',
          position: 'absolute',
          width: 20,
          height: 20,
          backgroundColor: bgColor,
        },
      },
      fLeftArrow: {
        width: 26,
        height: 26,
        borderRadius: '4px 4px 4px 4px',
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginLeft: 14,
        '&:after': {
          borderRadius: '4px',
          transform: 'rotate(45deg)',
          right: '50%',
          content: '""',
          display: 'block',
          position: 'absolute',
          width: 20,
          height: 20,
          backgroundColor: bgColor,
        },
      },
      rightArrow: {
        ...getArrowStyles(rightArrow, leftArrow, bgColor, borderColor, printMode),
      },
      leftArrow: {
        ...getArrowStyles(rightArrow, leftArrow, bgColor, borderColor, printMode),
      },
    };
  },
);

export function sameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function EventCell(thisprops) {
  const {
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
    printMode,
    ...props
  } = thisprops;
  delete props.resizable;

  const { originalEvent } = event;

  const title = accessors.title(event);
  const tooltip = accessors.tooltip(event);
  const end = accessors.end(event);
  const start = accessors.start(event);
  const allDay = accessors.allDay(event);
  const isOnStartWeek = start >= slotStart && start <= slotEnd;
  const isOnEndWeek = end >= slotStart && end <= slotEnd;
  const isSameDay = sameDay(start, end);

  const showAsAllDay =
    isAllDay || allDay || localizer.diff(start, localizer.ceil(end, 'day'), 'day') > 1;

  const userProps = getters.eventProp(event, start, end, selected);

  userProps.style = {
    ...userProps.style,
  };

  const eventIcon = originalEvent.icon || originalEvent.calendar.icon;
  const eventImage = originalEvent.image;

  const { rightArrow } = event.originalEvent.calendar;
  const { leftArrow } = event.originalEvent.calendar;

  const eventBgColor = originalEvent.bgColor || originalEvent.calendar.bgColor;
  const eventzIndex = originalEvent.zIndex || originalEvent.calendar.zIndex;

  const { classes } = eventCellStyles({
    zIndex: eventzIndex,
    desaturateColor: originalEvent.desaturateColor || originalEvent.calendar.desaturateColor,
    rotate: originalEvent.rotate || originalEvent.calendar.rotate,
    isAllDay: showAsAllDay, // event.allDay,
    bgColor: eventBgColor,
    borderStyle: originalEvent.borderStyle || originalEvent.calendar.borderStyle,
    borderColor: originalEvent.borderColor || originalEvent.calendar.borderColor,
    oneDay:
      (localizer.isSameDate(start, end) && !event.realEnd) ||
      _.isArray(originalEvent.calendar.bgColor),
    isMonthView,
    rightArrow,
    leftArrow,
    printMode,
    bgStartGradient: (event.showType === 'onlyEnd' || event.endSide) && !isSameDay,
    bgEndGradient: event.startSide,
  });

  const avatar = {
    image: eventImage || null,
    icon:
      eventIcon && _.isString(eventIcon) ? (
        <Box className={classes.icon}>
          <ImageLoader
            width="12px"
            alt="event icon"
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
      ) : (
        eventIcon
      ),
    color: originalEvent.bgColor || originalEvent.calendar.bgColor,
  };

  if (originalEvent.calendar.isUserCalendar) {
    avatar.fullName = originalEvent.calendar.fullName;
  } else if (!avatar.image && !avatar.icon) {
    avatar.image = emptyPixel;
  }

  let lAvatar = null;
  let rAvatar = null;

  if (!isSameDay) {
    if (isOnStartWeek && event.showType !== 'onlyEnd' && !event.endSide) {
      lAvatar = (
        <Box className={classes.fRightArrow}>
          <Avatar style={{ zIndex: 2 }} mx="auto" size="sm" {...avatar} />
        </Box>
      );
    }
    if (isOnEndWeek && !event.startSide) {
      rAvatar = (
        <Box className={classes.fLeftArrow}>
          <Avatar style={{ zIndex: 2 }} mx="auto" size="sm" {...avatar} />
        </Box>
      );
    }
  } else {
    lAvatar = <Avatar mx="auto" size="sm" {...avatar} />;
  }

  const content = (
    <Box
      style={{ pointerEvents: 'all' }}
      className={cx('rbc-event-content', classes.item)}
      title={tooltip || undefined}
    >
      <Box
        sx={() => ({
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          width: '100%',
          maxWidth: rAvatar ? 'calc(100% - 30px)' : '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        })}
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
                {eventIcon && !_.isString(eventIcon) ? eventIcon : lAvatar}

                <Box
                  style={{
                    marginLeft: 4,
                    whiteSpace: 'nowrap',
                    maxWidth: lAvatar ? 'calc(100% - 30px)' : '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {title}
                </Box>
              </>
            )}
          </>
        )}
      </Box>
      {rAvatar}
    </Box>
  );

  const oneDayStyle = isMonthView && originalEvent.calendar.oneDayStyle;
  const withTooltip = !!(isMonthView && title);

  const eventElement = (
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
      onClick={(e) => {
        if (!isMonthView) {
          onSelect && onSelect(event, e);
        }
      }}
      onDoubleClick={(e) => {
        if (!isMonthView) {
          onDoubleClick && onDoubleClick(event, e);
        }
      }}
      onKeyPress={(e) => {
        if (!isMonthView) {
          onKeyPress && onKeyPress(event, e);
        }
      }}
    >
      {isMonthView ? null : typeof children === 'function' ? children(content) : content}
      {isMonthView && rightArrow && <Box className={classes.rightArrow} />}
      {isMonthView && leftArrow && <Box className={classes.leftArrow} />}
    </Box>
  );

  const finalContent = withTooltip ? (
    <Tooltip label={title} color="secondary">
      {eventElement}
    </Tooltip>
  ) : (
    eventElement
  );

  let arr = [];
  if (oneDayStyle) {
    const goodStart = DateTime.fromJSDate(event.start < slotStart ? slotStart : event.start);
    const goodEnd = DateTime.fromJSDate(event.end > slotEnd ? slotEnd : event.end);
    let sum = 1;
    if (event.end > slotEnd) {
      sum = 0;
    }

    const diff = goodEnd.diff(goodStart, ['days']);
    let finalDays = diff.days + sum;
    if (finalDays > 7) {
      finalDays = 7;
    }
    arr = [...Array(Math.ceil(finalDays)).keys()];
  }

  return (
    <EventWrapper {...thisprops} type="date">
      {oneDayStyle ? (
        <Box style={{ width: '100%', height: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          {arr.map((i, index) => (
            <Box
              key={index}
              style={{
                position: 'relative',
                height: '100%',
                width: `${100 / arr.length}%`,
                display: 'inline-block',
              }}
            >
              <Box
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                }}
              >
                {finalContent}
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        finalContent
      )}
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
export { eventCellStyles, eventCellStylesRoot, eventCellStylesIcon };

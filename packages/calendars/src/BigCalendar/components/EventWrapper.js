import React from 'react';
import clsx from 'clsx';
import { Avatar, Box, ImageLoader, Stack, Text } from '@bubbles-ui/components';
import { colord } from 'colord';
import { eventWrapperStyles } from './EventWrapper.styles';
import { emptyPixel, stringifyPercent, EVENTWRAPPER_PROPTYPES } from './EventWrapper.constants';

const EventWrapper = ({
  style,
  className,
  event,
  accessors,
  rtl,
  type,
  children,
  selected,
  label,
  continuesPrior,
  continuesAfter,
  getters,
  onClick,
  onDoubleClick,
  isBackgroundEvent,
  onKeyPress,
  components: { forceBgColorToEvents },
  // eslint-disable-next-line sonarjs/cognitive-complexity
}) => {
  if (type === 'date') {
    return children;
  }

  const { classes } = eventWrapperStyles({});

  const title = accessors.title(event);
  const tooltip = accessors.tooltip(event);
  const end = accessors.end(event);
  const start = accessors.start(event);

  const userProps = getters.eventProp(event, start, end, selected);

  const { height, top, width, xOffset } = style;

  const { originalEvent } = event;
  const bgColor = originalEvent.bgColor || originalEvent.calendar.bgColor;

  const eventStyle = isBackgroundEvent
    ? {
        ...userProps.style,
        top: stringifyPercent(top),
        height: stringifyPercent(height),
        minHeight: '35px',
        // Adding 10px to take events container right margin into account
        width: `calc(${width} + 10px)`,
        [rtl ? 'right' : 'left']: stringifyPercent(Math.max(0, xOffset)),
      }
    : {
        ...userProps.style,
        top: stringifyPercent(top),
        width: stringifyPercent(width),
        height: stringifyPercent(height),
        backgroundColor: forceBgColorToEvents
          ? colord(bgColor).desaturate(0.2).alpha(0.2).toRgbString()
          : null,
        minHeight: '35px',
        [rtl ? 'right' : 'left']: stringifyPercent(xOffset),
      };

  const eventIcon = originalEvent.icon || originalEvent.calendar.icon;
  const eventImage = originalEvent.image;
  const avatar = {
    image: eventImage || null,
    icon: eventIcon ? (
      <Box className={classes.icon}>
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
          }}
          src={eventIcon}
          forceImage
        />
      </Box>
    ) : null,
    color: bgColor,
  };

  if (originalEvent.calendar.isUserCalendar) {
    avatar.fullName = originalEvent.calendar.fullName;
  } else if (!avatar.image && !avatar.icon) {
    avatar.image = emptyPixel;
  }

  return (
    <Box
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      style={eventStyle}
      onKeyPress={onKeyPress}
      title={tooltip ? (typeof label === 'string' ? `${label}: ` : '') + tooltip : undefined}
      className={clsx(
        isBackgroundEvent ? 'rbc-background-event' : 'rbc-event',
        className,
        userProps.className,
        {
          'rbc-selected': selected,
          'rbc-event-continues-earlier': continuesPrior,
          'rbc-event-continues-later': continuesAfter,
        }
      )}
    >
      {event.component ? (
        event.component
      ) : (
        <Stack spacing={1}>
          <Box>
            <Avatar mx="auto" size="sm" {...avatar} />
          </Box>
          <Box className={classes.texts}>
            <Box>
              <Text role="productive" color="primary" size="xs">
                {title}
              </Text>
            </Box>
            <Box className={classes.date}>{label}</Box>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

EventWrapper.propTypes = EVENTWRAPPER_PROPTYPES;

export default EventWrapper;
export { EventWrapper };

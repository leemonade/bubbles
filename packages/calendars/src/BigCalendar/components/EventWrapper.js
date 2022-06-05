import React from 'react';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  createStyles,
  getFontProductive,
  ImageLoader,
  Stack,
  Text,
} from '@bubbles-ui/components';

function stringifyPercent(v) {
  return typeof v === 'string' ? v : v + '%';
}

const eventWrapperStyles = createStyles((theme, { isAllDay, bgColor }) => {
  return {
    date: {
      ...getFontProductive('10px', '500'),
      color: theme.colors.text05,
      marginTop: theme.spacing[1],
    },
    texts: {
      marginTop: 0, // theme.spacing[1]
      lineHeight: '1em',
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
  };
});

export function EventWrapper(props) {
  if (props.type === 'date') {
    return props.children;
  }

  const {
    style,
    className,
    event,
    accessors,
    rtl,
    selected,
    label,
    continuesPrior,
    continuesAfter,
    getters,
    onClick,
    onDoubleClick,
    isBackgroundEvent,
    onKeyPress,
  } = props;

  const { classes } = eventWrapperStyles({});

  let title = accessors.title(event);
  let tooltip = accessors.tooltip(event);
  let end = accessors.end(event);
  let start = accessors.start(event);

  let userProps = getters.eventProp(event, start, end, selected);

  let { height, top, width, xOffset } = style;
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
        minHeight: '35px',
        [rtl ? 'right' : 'left']: stringifyPercent(xOffset),
      };

  const originalEvent = event.originalEvent;
  const eventIcon = originalEvent.icon || originalEvent.calendar.icon;
  const eventImage = originalEvent.image;
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

  return (
    <Box
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      style={eventStyle}
      onKeyPress={onKeyPress}
      title={tooltip ? (typeof label === 'string' ? label + ': ' : '') + tooltip : undefined}
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
      <Stack spacing={1}>
        <Box>
          <Avatar mx="auto" size="xs" {...avatar} />
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
    </Box>
  );
}

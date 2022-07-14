import React, { useMemo } from 'react';
import { Box } from '../../layout';
import { Text } from '../../typography';
import { SocialTimelineStyles } from './SocialTimeline.styles';
import {
  SOCIAL_TIMELINE_DEFAULT_PROPS,
  SOCIAL_TIMELINE_PROP_TYPES,
} from './SocialTimeline.constants';
import { capitalize } from 'lodash';
import { MessageItem } from './';

const getRelativeTime = (day, locale) => {
  const NOW = new Date();
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  let deltaDays = (day.getTime() - Date.now()) / (1000 * 3600 * 24);
  if (deltaDays < 1) {
    if (day.getDate() === NOW) {
      deltaDays = 0;
    } else if (day.getDate() === NOW - 1) {
      deltaDays = -1;
    } else if (day.getDate() === NOW + 1) {
      deltaDays = 1;
    }
  }
  deltaDays = Math.ceil(deltaDays);
  const result = formatter.format(deltaDays, 'day');
  return result;
};

const SocialTimeline = ({ messages, locale, ...props }) => {
  if (!locale) locale = navigator.language;

  const getDayMessages = (day) => {
    return messages
      .filter((message) => new Date(message.timestamp).toDateString() === day.toDateString())
      .sort((a, b) => a.timestamp - b.timestamp);
  };

  const getTimelineDays = () => {
    let timeline = [];
    for (const message of messages) {
      const adjustedDate = new Date(message.timestamp).setHours(0, 0, 0, 0);
      if (!timeline.includes(adjustedDate)) {
        timeline.push(adjustedDate);
      }
    }
    return timeline
      .map((arrayDay) => {
        const day = new Date(arrayDay);
        const messages = getDayMessages(day);
        return { day, messages };
      })
      .sort((a, b) => b.day - a.day);
  };

  const timeline = useMemo(() => getTimelineDays(), [messages]);
  const { classes, cx } = SocialTimelineStyles({}, { name: 'SocialTimeline' });
  return (
    <Box className={classes.root}>
      {timeline.map(({ day, messages }) => (
        <Box className={classes.dayWrapper} key={day}>
          <Box className={classes.dayHeader}>
            <Text role="productive" stronger color="primary">
              {capitalize(getRelativeTime(day, locale))}
            </Text>
            <Text role="productive" color="quartiary">
              {day.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })}
            </Text>
          </Box>
          {messages.map(({ actor, timestamp, verb, object }, index) => (
            <MessageItem
              key={`${timestamp} ${index}`}
              {...{ actor, timestamp, verb, object, index, locale }}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

SocialTimeline.defaultProps = SOCIAL_TIMELINE_DEFAULT_PROPS;
SocialTimeline.propTypes = SOCIAL_TIMELINE_PROP_TYPES;

export { SocialTimeline };

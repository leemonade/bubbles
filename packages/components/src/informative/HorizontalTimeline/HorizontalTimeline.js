import React, { useEffect, useState } from 'react';
import { isDate } from 'lodash';
import { Box } from '../../layout';
import { Text } from '../../typography';
import { COLORS } from '../../theme.tokens';
import { HorizontalTimelineStyles } from './HorizontalTimeline.styles';
import {
  HORIZONTAL_TIMELINE_DEFAULT_PROPS,
  HORIZONTAL_TIMELINE_PROP_TYPES,
} from './HorizontalTimeline.constants';
import { useElementSize } from '@mantine/hooks';

const HorizontalTimeline = ({ data, locale, color, rootClassname, rootStyles, ...props }) => {
  const { ref: timelineRef, width: timelineWidth } = useElementSize();
  const [events, setEvents] = useState([]);
  const firstIndex = 0;
  const lastIndex = data.length - 1;
  const EVENT_WIDTH = 100;

  if (!locale) {
    locale = navigator.language || navigator.userLanguage;
  }

  const getDaysBetween = (firstDate, lastDate) => {
    const daysBetween = (firstDate - lastDate) / (1000 * 60 * 60 * 24);
    return daysBetween;
  };

  const getRealCompletionPercentage = (completionPercentage) => {
    if (completionPercentage < 0) return 0;
    if (completionPercentage > 1) return 1;
    return completionPercentage;
  };

  const renderTimeline = () => {
    if (events.length === 0) return;
    let lastProgressWidth = 0;
    let progressWidth = 0;
    const currentDay = new Date();
    for (let i = 0; i < events.length - 1; i++) {
      const currentEventDate = events[i].date;
      const nextEventDate = events[i + 1].date;

      const intervalDays = getDaysBetween(nextEventDate, currentEventDate);
      const daysSinceEvent = getDaysBetween(currentDay, currentEventDate);

      const completionPercentage = daysSinceEvent / intervalDays;
      const widthBetweenEvents = events[i + 1].x - 15 - lastProgressWidth;

      const realCompletionPercentage = getRealCompletionPercentage(completionPercentage);
      const nextProgressWidth =
        widthBetweenEvents * realCompletionPercentage + (realCompletionPercentage === 1 ? 15 : 0);

      progressWidth += nextProgressWidth;
      lastProgressWidth = events[i + 1].x;
    }
    lastProgressWidth = 0;
    return events.map((interval, index) => {
      const dateToReturn = new Date(interval.date).toLocaleDateString(locale);
      const variantColor = color === 'positive' ? COLORS.mainWhite : COLORS.interactive02;
      const isPastDay = new Date() >= new Date(interval.date);

      const currentProgresStyle =
        index === 0
          ? {
              top: 6,
              borderTopStyle: 'solid',
              borderTopWidth: 3,
              left: 'calc(50% + 7px)',
              zIndex: 2,
            }
          : {};

      const progressStyle = {
        width: index !== 0 ? interval.x - 15 - lastProgressWidth : progressWidth,
        ...currentProgresStyle,
      };
      lastProgressWidth = interval.x;
      return (
        <Box key={interval.date} className={classes.event} style={{ left: interval.x }}>
          <Box className={classes.progress} style={progressStyle} />
          <Box className={classes.dot} style={{ backgroundColor: isPastDay && variantColor }}></Box>
          <Box className={classes.eventInfo}>
            <Text size="xs" className={classes.intervalLabel}>
              {interval.label}
            </Text>
            <Text size="xs" className={classes.intervalDate}>
              {dateToReturn}
            </Text>
          </Box>
        </Box>
      );
    });
  };

  useEffect(() => {
    if (!timelineWidth) return;

    let newEvents = [];
    let newData = data.map((item) => ({
      ...item,
      date: isDate(item.date) ? item.date : new Date(item.date),
    }));
    newData.sort((a, b) => a.date - b.date);

    let availableWidth = timelineWidth;
    const widthPerEvent = availableWidth / data.length;

    if (widthPerEvent <= EVENT_WIDTH) {
      newEvents = newData.map((event, i) => ({
        ...event,
        x: i * widthPerEvent,
      }));
    } else {
      newEvents[firstIndex] = { ...newData[firstIndex], x: 0 };
      newEvents[lastIndex] = {
        ...newData[lastIndex],
        x: availableWidth - EVENT_WIDTH,
      };

      let offsetX = EVENT_WIDTH;
      availableWidth -= EVENT_WIDTH * 2;
      const dayStart = newData[firstIndex].date;

      for (let i = firstIndex, l = lastIndex - 1; i < l; l--) {
        const dayFinish = newData[l + 1].date;
        const currentDay = newData[l].date;
        const totalDays = (dayFinish - dayStart) / 1000 / 60 / 60 / 24;
        const widthPerDay = (availableWidth - (l - 1 * EVENT_WIDTH)) / totalDays;
        const offsetDays = (dayFinish - currentDay) / 1000 / 60 / 60 / 24;
        const offsetWidth = offsetDays * widthPerDay;

        availableWidth -= Math.max(offsetWidth, EVENT_WIDTH);
        newEvents[l] = {
          ...newData[l],
          x: Math.max(offsetX + availableWidth, offsetX * l),
        };
      }
    }

    setEvents(newEvents);
  }, [data, timelineWidth]);

  const { classes, cx } = HorizontalTimelineStyles(
    { color, EVENT_WIDTH, rootStyles },
    { name: 'HTimeline' }
  );
  return (
    <Box className={cx(classes.root, rootClassname)}>
      <Box ref={timelineRef} className={classes.timelineContainer}>
        {renderTimeline()}
      </Box>
    </Box>
  );
};

HorizontalTimeline.defaultProps = HORIZONTAL_TIMELINE_DEFAULT_PROPS;
HorizontalTimeline.propTypes = HORIZONTAL_TIMELINE_PROP_TYPES;

export { HorizontalTimeline };

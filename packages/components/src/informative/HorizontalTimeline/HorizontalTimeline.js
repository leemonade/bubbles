import React, { useEffect, useState } from 'react';
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
  const EVENT_WIDTH = 100;

  if (!locale) {
    locale = navigator.language || navigator.userLanguage;
  }

  const renderTimeline = () => {
    let lastProgressWidth = 0;
    return events.map((interval, index) => {
      const dateToReturn = new Date(interval.date).toLocaleDateString(locale);
      const variantColor = color === 'positive' ? COLORS.mainWhite : COLORS.interactive02;
      const dotStyle =
        new Date() >= new Date(interval.date)
          ? {
              backgroundColor: variantColor,
            }
          : {};

      const progressStyle = {
        width: interval.x - 15 - lastProgressWidth,
      };
      lastProgressWidth = interval.x;
      return (
        <Box key={interval.date} className={classes.event} style={{ left: interval.x }}>
          <Box className={classes.progress} style={progressStyle} />
          <Box className={classes.dot} style={dotStyle}></Box>
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
    let firstIndex = 0;
    let lastIndex = data.length - 1;
    data.sort((a, b) => a.date - b.date);

    let availableWidth = timelineWidth;
    const widthPerEvent = availableWidth / data.length;

    if (widthPerEvent <= EVENT_WIDTH) {
      newEvents = data.map((event, i) => ({
        ...event,
        x: i * widthPerEvent,
      }));
    } else {
      newEvents[firstIndex] = { ...data[firstIndex], x: 0 };
      newEvents[lastIndex] = {
        ...data[lastIndex],
        x: availableWidth - EVENT_WIDTH,
      };

      let offsetX = EVENT_WIDTH;
      availableWidth -= EVENT_WIDTH * 2;
      const dayStart = data[firstIndex].date;

      for (let i = firstIndex, l = lastIndex - 1; i < l; l--) {
        const dayFinish = data[l + 1].date;
        const currentDay = data[l].date;
        const totalDays = (dayFinish - dayStart) / 1000 / 60 / 60 / 24;
        const widthPerDay = (availableWidth - (l - 1 * EVENT_WIDTH)) / totalDays;
        const offsetDays = (dayFinish - currentDay) / 1000 / 60 / 60 / 24;
        const offsetWidth = offsetDays * widthPerDay;

        availableWidth -= Math.max(offsetWidth, EVENT_WIDTH);
        newEvents[l] = {
          ...data[l],
          x: Math.max(offsetX + availableWidth, offsetX * l),
        };
      }
    }

    setEvents(newEvents);
  }, [data, timelineWidth]);

  const { classes, cx } = HorizontalTimelineStyles(
    { color, EVENT_WIDTH, rootStyles },
    { name: 'HorizontalTimeline' }
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

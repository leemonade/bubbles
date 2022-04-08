import React from 'react';
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

  if (!locale) {
    locale = navigator.language || navigator.userLanguage;
  }
  const firstDate = new Date(data[0].date);
  const lastDate = new Date(data[data.length - 1].date);

  const renderTimeline = () => {
    let lastWidth = 0;
    return data.map((interval, index) => {
      const { ref, width: labelWidth } = useElementSize();
      const dateToReturn = new Date(interval.date).toLocaleDateString(locale);
      const variantColor = color === 'positive' ? COLORS.mainWhite : COLORS.interactive02;
      const intervalPosition = Math.round(
        ((new Date(interval.date) - firstDate) / (lastDate - firstDate)) * 100
      );
      let positionStyle = {};
      let progressStyle = {};
      let dotStyle = {};
      const isFirst = index === 0;
      const isLast = index === data.length - 1;

      if (new Date() >= new Date(interval.date)) {
        dotStyle = {
          backgroundColor: variantColor,
        };
      }
      if (isFirst) {
        let progressPosition = (new Date() - firstDate) / (lastDate - firstDate);
        progressStyle = {
          zIndex: 1,
          left: '100%',
          width: `${
            progressPosition > 1 ? 1 * timelineWidth - 20 : progressPosition * timelineWidth
          }px`,
          borderTopStyle: 'solid',
          borderTopWidth: 3,
          transform: 'translateY(-1px)',
        };
      } else {
        positionStyle = !isLast
          ? { left: `${intervalPosition}%` }
          : { left: `calc(${intervalPosition}% - 15px)` };
        progressStyle = !isLast
          ? { width: `${(intervalPosition / 100) * timelineWidth - lastWidth - 16}px` }
          : { width: `${(intervalPosition / 100) * timelineWidth - lastWidth - 31}px` };
      }

      lastWidth = (intervalPosition / 100) * timelineWidth;

      return (
        <Box key={interval.date} className={classes.dot} style={{ ...positionStyle, ...dotStyle }}>
          <Box className={classes.progress} style={progressStyle} />
          <Box
            ref={ref}
            className={classes.interval}
            style={{ left: `-${labelWidth / 2 - 7.5}px` }}
          >
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

  const { classes, cx } = HorizontalTimelineStyles(
    { color, rootStyles },
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

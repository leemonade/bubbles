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

const HorizontalTimeline = ({ data, locale, color, dotColor, ...props }) => {
  const { ref, width: rootWidth } = useElementSize();

  if (!locale) {
    locale = navigator.language || navigator.userLanguage;
  }

  const getPositionStyle = (
    firstDate,
    lastDate,
    date,
    index,
    dataLength,
    lastWidth,
    variantColor
  ) => {
    let positionStyle = {};
    let progressStyle = {};
    let dotStyle = {};
    const isLast = index === dataLength - 1;
    const isFirst = index === 0;
    const intervalPosition = Math.round(((date - firstDate) / (lastDate - firstDate)) * 100);

    if (new Date() >= date) {
      dotStyle = {
        backgroundColor: variantColor,
      };
    }
    if (isFirst) {
      const progressPosition = ((new Date() - firstDate) / (lastDate - firstDate)) * rootWidth;
      progressStyle = {
        left: '50%',
        width: `${progressPosition}px`,
        zIndex: 1,
        borderTopStyle: 'solid',
        borderTopWidth: 3,
        transform: 'translateY(-1px)',
      };
    } else if (isLast) {
      positionStyle = { right: 0 };
      progressStyle = { right: '50%', width: `calc(${rootWidth - lastWidth}px - 100%)` };
    } else {
      positionStyle = { left: `${intervalPosition}%` };
      progressStyle = {
        right: '50%',
        width: `${(intervalPosition / 100) * rootWidth - lastWidth}px`,
      };
    }

    const nextWidth = (intervalPosition / 100) * rootWidth;
    return { positionStyle, progressStyle, dotStyle, nextWidth };
  };

  const renderTimeline = () => {
    if (data.lenght === 0) return;

    const firstDate = new Date(data[0].date);
    const lastDate = new Date(data[data.length - 1].date);
    const variantColor = color === 'positive' ? COLORS.mainWhite : COLORS.interactive02;

    let lastWidth = 0;
    return data.map((item, index) => {
      const dateToReturn = new Date(item.date).toLocaleDateString(locale);

      const { positionStyle, progressStyle, dotStyle, nextWidth } = getPositionStyle(
        firstDate,
        lastDate,
        new Date(item.date),
        index,
        data.length,
        lastWidth,
        variantColor
      );

      lastWidth = nextWidth;

      return (
        <Box key={dateToReturn} className={classes.interval} style={positionStyle}>
          <Box className={classes.dot} style={dotStyle} />
          <Box className={classes.progress} style={progressStyle} />
          <Text size="xs">{item.label}</Text>
          <Text size="xs">{dateToReturn}</Text>
        </Box>
      );
    });
  };

  const { classes, cx } = HorizontalTimelineStyles(
    { color, dotColor },
    { name: 'HorizontalTimeline' }
  );
  return (
    <Box ref={ref} className={classes.root}>
      {renderTimeline()}
    </Box>
  );
};

HorizontalTimeline.defaultProps = HORIZONTAL_TIMELINE_DEFAULT_PROPS;
HorizontalTimeline.propTypes = HORIZONTAL_TIMELINE_PROP_TYPES;

export { HorizontalTimeline };

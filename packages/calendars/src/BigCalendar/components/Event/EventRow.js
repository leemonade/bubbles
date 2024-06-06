import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@bubbles-ui/components';
import { DateTime } from 'luxon';
import EventRowMixin from './EventRowMixin';

function EventRow(props) {
  const {
    segments,
    components: { showType, cx },
    slotMetrics: { slots },
    className,
    isMonthView,
    slotMetrics,
    printMode,
  } = props;

  let lastEnd = 1;

  const customRow = segments.reduce((row, { event, left, right, span }, li) => {
    const key = `_lvl_${li}`;
    const gap = left - lastEnd;
    if (isMonthView) {
      const content = EventRowMixin.renderEvent(props, event, isMonthView, printMode);

      const goodFirst = DateTime.fromJSDate(slotMetrics.first);
      const goodStart = DateTime.fromJSDate(
        event.start < slotMetrics.first ? slotMetrics.first : event.start,
      );
      const goodEnd = DateTime.fromJSDate(
        event.end > slotMetrics.last ? slotMetrics.last : event.end,
      );
      const diff = goodEnd.diff(goodStart, ['days']);
      let sum = 1;
      if (event.end > slotMetrics.last) {
        sum = 0;
      }
      // eslint-disable-next-line no-param-reassign
      span = diff.days + sum;

      const diffDaysStart = goodStart.diff(goodFirst, ['days']);
      // eslint-disable-next-line no-shadow
      const left = `${(Math.abs(diffDaysStart.days) / slots) * 100}%`;

      lastEnd = right + 1;
      row.push(
        EventRowMixin.renderSpan(
          slots,
          span,
          key,
          content,
          isMonthView,
          {
            showType,
            event,
          },
          left,
        ),
      );
    } else {
      const content = EventRowMixin.renderEvent(props, event);
      if (gap) row.push(EventRowMixin.renderSpan(slots, gap, `${key}_gap`));
      row.push(
        EventRowMixin.renderSpan(slots, span, key, content, false, {
          showType,
          props,
          event,
        }),
      );
      lastEnd = right + 1;
    }
    return row;
  }, []);

  return (
    <Box className={cx(className, 'rbc-row', { 'rbc-event-row': isMonthView })}>{customRow}</Box>
  );
}

EventRow.propTypes = {
  segments: PropTypes.array,
  ...EventRowMixin.propTypes,
};

EventRow.defaultProps = {
  ...EventRowMixin.defaultProps,
};

export default EventRow;

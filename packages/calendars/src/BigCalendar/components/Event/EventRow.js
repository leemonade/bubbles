import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@bubbles-ui/components';

import EventRowMixin from './EventRowMixin';
import { DateTime } from 'luxon';

/*
*
*
* {segments.reduce((row, { event, left, right, span }, li) => {
          const key = '_lvl_' + li;
          const gap = left - lastEnd;

          const content = EventRowMixin.renderEvent(this.props, event);

          if (gap) row.push(EventRowMixin.renderSpan(slots, gap, `${key}_gap`));

          row.push(EventRowMixin.renderSpan(slots, span, key, content));

          lastEnd = right + 1;

          return row;
        }, [])}*/


function EventRow(props) {
  let {
    segments,
    components: { showType, cx },
    slotMetrics: { slots },
    className,
    isMonthView,
    slotMetrics,
    printMode
  } = props;

  let lastEnd = 1;

  const row = segments.reduce((row, { event, left, right, span }, li) => {
    const key = '_lvl_' + li;
    const gap = left - lastEnd;
    if (isMonthView) {
      const content = EventRowMixin.renderEvent(props, event, isMonthView, printMode);

      // if (gap) row.push(EventRowMixin.renderSpan(slots, gap, `${key}_gap`, '', isMonthView, event));

      let goodFirst = DateTime.fromJSDate(
        slotMetrics.first
      );
      let goodStart = DateTime.fromJSDate(
        event.start < slotMetrics.first ? slotMetrics.first : event.start
      );
      let goodEnd = DateTime.fromJSDate(
        event.end > slotMetrics.last ? slotMetrics.last : event.end
      );
      const diff = goodEnd.diff(goodStart, ['days']);
      let sum = 1;
      if (event.end > slotMetrics.last) {
        sum = 0;
      }
      span = diff.days + sum;

      const diffDaysStart = goodStart.diff(goodFirst, ['days']);
      const left = (Math.abs(diffDaysStart.days) / slots) * 100 + '%';

      lastEnd = right + 1;
      row.push(EventRowMixin.renderSpan(slots, span, key, content, isMonthView, {
        showType,
        event
      }, left));
    } else {
      let content = EventRowMixin.renderEvent(props, event);
      if (gap) row.push(EventRowMixin.renderSpan(slots, gap, `${key}_gap`));
      row.push(EventRowMixin.renderSpan(slots, span, key, content, false, {
        showType,
        props,
        event
      }));
      lastEnd = right + 1;
    }
    return row;
  }, []);

  return <Box className={cx(className, 'rbc-row', { 'rbc-event-row': isMonthView })}>{row}</Box>;
}

EventRow.propTypes = {
  segments: PropTypes.array,
  ...EventRowMixin.propTypes
};

EventRow.defaultProps = {
  ...EventRowMixin.defaultProps
};

export default EventRow;

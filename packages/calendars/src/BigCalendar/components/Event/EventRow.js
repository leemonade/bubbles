import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@bubbles-ui/components';

import EventRowMixin from './EventRowMixin';
import { DateTime } from 'luxon';

class EventRow extends React.Component {
  render() {
    let {
      segments,
      components: { cx },
      slotMetrics: { slots },
      className,
      isMonthView,
      slotMetrics
    } = this.props;

    let lastEnd = 1;

    const row = segments.reduce((row, { event, left, right, span }, li) => {
      const key = '_lvl_' + li;
      const gap = left - lastEnd;
      const content = EventRowMixin.renderEvent(this.props, event, isMonthView);
      if (gap) row.push(EventRowMixin.renderSpan(slots, gap, `${key}_gap`, '', isMonthView, event));
      if (isMonthView) {
        let goodStart = DateTime.fromJSDate(event.start < slotMetrics.first ? slotMetrics.first : event.start);
        let goodEnd = DateTime.fromJSDate(event.end > slotMetrics.last ? slotMetrics.last : event.end);
        const diff = goodEnd.diff(goodStart, ['days']);
        span = diff.days + 1;
      }
      row.push(EventRowMixin.renderSpan(slots, span, key, content, isMonthView, event));
      lastEnd = right + 1;
      return row;
    }, []);

    return <Box className={cx(className, 'rbc-row', { 'rbc-event-row': isMonthView })}>{row}</Box>;
  }
}

EventRow.propTypes = {
  segments: PropTypes.array,
  ...EventRowMixin.propTypes
};

EventRow.defaultProps = {
  ...EventRowMixin.defaultProps
};

export default EventRow;

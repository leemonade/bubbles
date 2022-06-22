import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@bubbles-ui/components';

import EventRowMixin from './EventRowMixin';

class EventRow extends React.Component {
  render() {
    let {
      segments,
      components: { cx },
      slotMetrics: { slots },
      className,
      isMonthView,
      monthNumber,
    } = this.props;

    let lastEnd = 1;
    const row = segments.reduce((row, { event, left, right, span }, li) => {
      const key = '_lvl_' + li;
      const gap = left - lastEnd;
      const notMonthEvent =
        event.start.getMonth() !== monthNumber && event.end.getMonth() !== monthNumber;
      if (notMonthEvent) {
        if (gap) row.push(EventRowMixin.renderSpan(slots, gap, `${key}_gap`, '', event));
        row.push(EventRowMixin.renderSpan(slots, span, key, '', event));
        lastEnd = right + 1;
        return row;
      }
      const content = EventRowMixin.renderEvent(this.props, event, isMonthView);
      if (gap) row.push(EventRowMixin.renderSpan(slots, gap, `${key}_gap`, '', event));
      row.push(EventRowMixin.renderSpan(slots, span, key, content, event));
      lastEnd = right + 1;
      return row;
    }, []);

    return <Box className={cx(className, 'rbc-row', 'rbc-event-row')}>{row}</Box>;
  }
}

EventRow.propTypes = {
  segments: PropTypes.array,
  ...EventRowMixin.propTypes,
};

EventRow.defaultProps = {
  ...EventRowMixin.defaultProps,
};

export default EventRow;

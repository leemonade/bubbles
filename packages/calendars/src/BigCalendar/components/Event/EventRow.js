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
      range,
    } = this.props;

    let lastEnd = 1;
    let eventTitle = '';

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

      // const eventIsMultipleMonths = event.start.getMonth() !== event.end.getMonth();
      // const eventStartsCurrentMonth = event.start.getMonth() === monthNumber;
      // const eventEndsCurrentMonth = event.end.getMonth() === monthNumber;
      // console.log(eventStartsCurrentMonth);

      // const realSpan = span - (eventStartsCurrentMonth && eventIsMultipleMonths ? 3 : 0);
      // const realGap = gap + (eventEndsCurrentMonth && eventIsMultipleMonths ? 1 : 0);

      // console.log(
      //   'Event start month: ',
      //   event.start.getMonth(),
      //   'Event end month: ',
      //   event.end.getMonth(),
      //   'Current month: ',
      //   monthNumber
      // );
      // const daysOfEventCurrentMonth = range.filter((day) => day.getMonth() === monthNumber);
      // console.log('daysOfEventCurrentMonth: ', daysOfEventCurrentMonth);
      console.log(range);

      const content = EventRowMixin.renderEvent(this.props, event, isMonthView);

      if (gap) row.push(EventRowMixin.renderSpan(slots, gap, `${key}_gap`, '', event));

      row.push(EventRowMixin.renderSpan(slots, span, key, content, event));

      lastEnd = right + 1;

      eventTitle = event.title;

      return row;
    }, []);

    // console.log(row, eventTitle, segments);
    // console.log(eventTitle, monthNumber);

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

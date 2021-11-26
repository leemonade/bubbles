import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import EventRowMixin from './EventRowMixin';

class EventRow extends React.Component {
  render() {
    let {
      segments,
      components: { cx },
      slotMetrics: { slots },
      className,
    } = this.props;

    let lastEnd = 1;

    return (
      <Box className={cx(className, 'rbc-row')}>
        {segments.reduce((row, { event, left, right, span }, li) => {
          const key = '_lvl_' + li;
          const gap = left - lastEnd;

          const content = EventRowMixin.renderEvent(this.props, event);

          if (gap) row.push(EventRowMixin.renderSpan(slots, gap, `${key}_gap`));

          row.push(EventRowMixin.renderSpan(slots, span, key, content));

          lastEnd = right + 1;

          return row;
        }, [])}
      </Box>
    );
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

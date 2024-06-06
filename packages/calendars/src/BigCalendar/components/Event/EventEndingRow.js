import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';
import { eventLevels } from 'react-big-calendar/lib/utils/eventLevels';
import { Box, Anchor } from '@bubbles-ui/components';

import EventRowMixin from './EventRowMixin';

const isSegmentInSlot = (seg, slot) => seg.left <= slot && seg.right >= slot;
const eventsInSlot = (segments, slot) =>
  segments.filter((seg) => isSegmentInSlot(seg, slot)).length;

class EventEndingRow extends React.Component {
  render() {
    const {
      segments,
      slotMetrics: { slots },
    } = this.props;
    const rowSegments = eventLevels(segments).levels[0];

    let current = 1;
    let lastEnd = 1;
    const row = [];

    while (current <= slots) {
      const key = `_lvl_${current}`;

      const { event, left, right, span } =
        rowSegments.filter((seg) => isSegmentInSlot(seg, current))[0] || {}; //eslint-disable-line

      if (!event) {
        current++;
        // eslint-disable-next-line no-continue
        continue;
      }

      const gap = Math.max(0, left - lastEnd);

      if (this.canRenderSlotEvent(left, span)) {
        const content = EventRowMixin.renderEvent(this.props, event);

        if (gap) {
          row.push(EventRowMixin.renderSpan(slots, gap, `${key}_gap`));
        }

        row.push(EventRowMixin.renderSpan(slots, span, key, content));

        // eslint-disable-next-line no-multi-assign
        lastEnd = current = right + 1;
      } else {
        if (gap) {
          row.push(EventRowMixin.renderSpan(slots, gap, `${key}_gap`));
        }

        row.push(EventRowMixin.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
        // eslint-disable-next-line no-multi-assign
        lastEnd = current += 1;
      }
    }

    return (
      <Box className="rbc-row" style={{ pointerEvents: 'all' }}>
        {row}
      </Box>
    );
  }

  canRenderSlotEvent(slot, span) {
    const { segments } = this.props;

    return range(slot, slot + span).every((s) => {
      const count = eventsInSlot(segments, s);

      return count === 1;
    });
  }

  renderShowMore(segments, slot) {
    const { localizer } = this.props;
    const count = eventsInSlot(segments, slot);

    return count ? (
      <Anchor
        key={`sm_${slot}`}
        href="#"
        className={'rbc-show-more'}
        onClick={(e) => this.showMore(slot, e)}
      >
        {localizer.messages.showMore(count)}
      </Anchor>
    ) : (
      false
    );
  }

  showMore(slot, e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.onShowMore(slot, e.target);
  }
}

EventEndingRow.propTypes = {
  segments: PropTypes.array,
  slots: PropTypes.number,
  onShowMore: PropTypes.func,
  ...EventRowMixin.propTypes,
};

EventEndingRow.defaultProps = {
  ...EventRowMixin.defaultProps,
};

export default EventEndingRow;

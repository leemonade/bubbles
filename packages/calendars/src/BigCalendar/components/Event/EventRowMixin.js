import React from 'react';
import PropTypes from 'prop-types';
import { isSelected } from 'react-big-calendar/lib/utils/selection';
import { Box } from '@bubbles-ui/components';

import EventCell from './EventCell';

/* eslint-disable react/prop-types */
export default {
  propTypes: {
    slotMetrics: PropTypes.object.isRequired,

    selected: PropTypes.object,
    isAllDay: PropTypes.bool,

    accessors: PropTypes.object.isRequired,
    localizer: PropTypes.object.isRequired,
    components: PropTypes.object.isRequired,
    getters: PropTypes.object.isRequired,

    onSelect: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onKeyPress: PropTypes.func
  },

  defaultProps: {
    segments: [],
    selected: {}
  },

  renderEvent(props, event, isMonthView, printMode) {
    let {
      selected,
      isAllDay: _,
      accessors,
      getters,
      onSelect,
      onDoubleClick,
      onKeyPress,
      localizer,
      slotMetrics,
      components,
      resizable
    } = props;

    let continuesPrior = slotMetrics.continuesPrior(event);
    let continuesAfter = slotMetrics.continuesAfter(event);

    return (
      <EventCell
        event={event}
        getters={getters}
        localizer={localizer}
        accessors={accessors}
        components={components}
        onSelect={onSelect}
        onDoubleClick={onDoubleClick}
        onKeyPress={onKeyPress}
        continuesPrior={continuesPrior}
        continuesAfter={continuesAfter}
        slotStart={slotMetrics.first}
        slotEnd={slotMetrics.last}
        selected={isSelected(event, selected)}
        resizable={resizable}
        isMonthView={isMonthView}
        printMode={printMode}
      />
    );
  },

  renderSpan(slots, len, key, content = ' ', isMonthView, event, left) {
    let per = (Math.abs(len) / slots) * 100 + '%';

    console.log(event);


    const rightArrow = isMonthView && event && event.originalEvent.calendar.rightArrow;
    const leftArrow = isMonthView && event && event.originalEvent.calendar.leftArrow;

    const style = {
      WebkitFlexBasis: per,
      flexBasis: per,
      maxWidth: per,
      display: (rightArrow || leftArrow) && 'flex',
      flexDirection: leftArrow && 'row-reverse'
    };

    if (left && isMonthView) {
      style.left = left;
      style.height = '100%';
      style.width = '100%';
      style.position = 'absolute';
      style.zIndex = event.originalEvent.calendar.zIndex;
    }

    return (
      <Box
        key={key}
        className='rbc-row-segment'
        // IE10/11 need max-width. flex-basis doesn't respect box-sizing
        style={style}
      >
        {content}
      </Box>
    );
  }
};

import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { isSelected } from 'react-big-calendar/lib/utils/selection';
import { Box } from '@bubbles-ui/components';

import EventCell, { sameDay } from './EventCell';

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
      <>
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
      </>
    );
  },

  renderSpan(slots, len, key, content = ' ', isMonthView, { showType, props, event } = {}, left) {
    let per = (Math.abs(len) / slots) * 100 + '%';

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
      style.zIndex = 199 + event.originalEvent.calendar.zIndex;
    }

    if (event && props) {
      let gap = (Math.abs(len - 1) / slots) * 100 + '%';
      let oneSlot = (Math.abs(1) / slots) * 100 + '%';
      if (showType === 'onlyEnd') {
        if (dayjs(props.slotMetrics.first).isSame(props.accessors.end(event), 'week')) {

          return [
            <Box style={{
              WebkitFlexBasis: gap,
              flexBasis: gap,
              maxWidth: gap,
              display: 'flex'
            }} />,
            <Box style={{
              WebkitFlexBasis: oneSlot,
              flexBasis: oneSlot,
              maxWidth: oneSlot,
              display: (rightArrow || leftArrow) && 'flex',
              flexDirection: leftArrow && 'row-reverse'
            }}>
              {this.renderEvent(props, { ...event, showType })}
            </Box>
          ];
        } else {
          return null;
        }
      }

      if (showType === 'startEnd') {
        const start = new Date(props.accessors.start(event));
        const end = new Date(props.accessors.end(event));
        const isSameDay = sameDay(start, end);
        console.log(start, end, isSameDay);
        if (!isSameDay) {
          const isStart = dayjs(new Date(props.slotMetrics.first)).isSame(start, 'week');
          const isEnd = dayjs(new Date(props.slotMetrics.first)).isSame(end, 'week');
          const result = [];
          if (isStart) {
            result.push(<Box style={{
              WebkitFlexBasis: oneSlot,
              flexBasis: oneSlot,
              maxWidth: oneSlot,
              display: (rightArrow || leftArrow) && 'flex',
              flexDirection: leftArrow && 'row-reverse'
            }}>
              {this.renderEvent(props, { ...event, showType, startSide: true })}
            </Box>);
          }
          if (isEnd) {
            if (isStart) {
              const start = new Date(props.accessors.start(event));
              let i = 0;
              for (; i < 8; i++) {
                start.setHours(start.getHours() + 24);
                if (sameDay(start, end)) break;
              }
              let gap2 = (Math.abs(i) / slots) * 100 + '%';
              console.log(i);
              result.push(<Box style={{
                WebkitFlexBasis: gap2,
                flexBasis: gap2,
                maxWidth: gap2,
                display: 'flex'
              }} />);
            }
            result.push(<Box style={{
              WebkitFlexBasis: oneSlot,
              flexBasis: oneSlot,
              maxWidth: oneSlot,
              display: (rightArrow || leftArrow) && 'flex',
              flexDirection: leftArrow && 'row-reverse'
            }}>
              {this.renderEvent(props, { ...event, showType, endSide: true })}
            </Box>);
          }
          return result;
        } else {
          return <Box
            key={key}
            className='rbc-row-segment'
            // IE10/11 need max-width. flex-basis doesn't respect box-sizing
            style={style}
          >
            {content}
          </Box>;
        }
      }
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

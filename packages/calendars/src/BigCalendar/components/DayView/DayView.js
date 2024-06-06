/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'react-big-calendar/lib/utils/constants';

import TimeGrid from '../TimeGrid/TimeGrid';

class DayView extends React.Component {
  render() {
    /**
     * This allows us to default min, max, and scrollToTime
     * using our localizer. This is necessary until such time
     * as TimeGrid is converted to a functional component.
     */
    let {
      date,
      localizer,
      min = localizer.startOf(new Date(), 'day'),
      max = localizer.endOf(new Date(), 'day'),
      scrollToTime = localizer.startOf(new Date(), 'day'),
      ...props
    } = this.props;
    let range = DayView.range(date, { localizer: localizer });

    return (
      <TimeGrid
        {...props}
        range={range}
        eventOffset={10}
        localizer={localizer}
        min={min}
        max={max}
        scrollToTime={scrollToTime}
      />
    );
  }
}

DayView.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  localizer: PropTypes.any,
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  scrollToTime: PropTypes.instanceOf(Date),
};

DayView.range = (date, { localizer }) => {
  return [localizer.startOf(date, 'day')];
};

DayView.navigate = (date, action, { localizer }) => {
  switch (action) {
    case navigate.PREVIOUS:
      return localizer.add(date, -1, 'day');

    case navigate.NEXT:
      return localizer.add(date, 1, 'day');

    default:
      return date;
  }
};

DayView.title = (date, { localizer }) => localizer.format(date, 'dayHeaderFormat');

export { DayView };

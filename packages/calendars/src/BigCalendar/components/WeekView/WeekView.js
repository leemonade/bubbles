import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'react-big-calendar/lib/utils/constants';

import TimeGrid from '../TimeGrid/TimeGrid';

class WeekView extends React.Component {
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
    let range = WeekView.range(date, this.props);

    return (
      <TimeGrid
        {...props}
        range={range}
        eventOffset={15}
        localizer={localizer}
        min={min}
        max={max}
        scrollToTime={scrollToTime}
      />
    );
  }
}

WeekView.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  localizer: PropTypes.any,
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  scrollToTime: PropTypes.instanceOf(Date),
};

WeekView.defaultProps = TimeGrid.defaultProps;

WeekView.navigate = (date, action, { localizer }) => {
  switch (action) {
    case navigate.PREVIOUS:
      return localizer.add(date, -1, 'week');

    case navigate.NEXT:
      return localizer.add(date, 1, 'week');

    default:
      return date;
  }
};

WeekView.range = (date, { localizer }) => {
  let firstOfWeek = localizer.startOfWeek();
  let start = localizer.startOf(date, 'week', firstOfWeek);
  let end = localizer.endOf(date, 'week', firstOfWeek);

  return localizer.range(start, end);
};

WeekView.title = (date, { localizer }) => {
  let [start, ...rest] = WeekView.range(date, { localizer });
  return localizer.format({ start, end: rest.pop() }, 'dayRangeHeaderFormat');
};

export { WeekView };

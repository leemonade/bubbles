import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'react-big-calendar/lib/utils/constants';

import TimeGrid from '../TimeGrid/TimeGrid';
import _ from 'lodash';

class WeekView extends React.Component {
  componentDidMount() {
    this.props.onRangeChange({
      start: this.props.localizer.startOf(this.props.date, 'week'),
      end: this.props.localizer.endOf(this.props.date, 'week')
    });
  }

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

    const { showWeekends, minHour, maxHour, weekDays, firstDayOfWeek } =
      this.props.components;

    if (_.isArray(weekDays)) {
      range = _.filter(range, (date) => {
        return weekDays.includes(date.getDay());
      });
    }
    if (!showWeekends && !_.isArray(weekDays)) {
      range = _.filter(range, (date) => {
        return date.getDay() !== 0 && date.getDay() !== 6;
      });
    }

    if (minHour) {
      const mi = minHour.split(':');
      min.setHours(parseInt(mi[0], 10), parseInt(mi[1], 10));
    }
    if (maxHour) {
      const ma = maxHour.split(':');
      max.setHours(parseInt(ma[0], 10), parseInt(ma[1], 10));
    }

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
  scrollToTime: PropTypes.instanceOf(Date)
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

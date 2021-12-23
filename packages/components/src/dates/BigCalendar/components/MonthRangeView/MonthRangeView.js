import React from 'react';
import { Box } from '@mantine/core';
import { inRange } from 'react-big-calendar/lib/utils/eventLevels';

import { MonthView } from '../MonthView/MonthView';

const eventsForWeek = (evts, start, end, accessors, localizer) =>
  evts.filter((e) => inRange(e, start, end, accessors, localizer));

class MonthRangeView extends React.Component {
  constructor(...args) {
    super(...args);
  }

  componentDidMount() {
    let { dateMonthRange, onRangeChange } = this.props;
    onRangeChange({
      start: new Date(dateMonthRange.startYear, dateMonthRange.startMonth, 1, 0, 0, 0),
      end: new Date(dateMonthRange.endYear, dateMonthRange.endMonth + 1, 0, 23, 59, 59),
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    let { dateMonthRange, localizer } = this.props;

    const years = [];
    if (dateMonthRange) {
      for (let i = dateMonthRange.startYear; i <= dateMonthRange.endYear; i++) {
        years.push(i);
      }
    }

    return (
      <Box className="mt-4 grid grid-cols-3 gap-2">
        {years.map((year) => {
          const isStartYear = dateMonthRange.startYear === year;
          const isEndYear = dateMonthRange.endYear === year;
          let startMonth = 1;
          let endMonth = 12;
          if (isStartYear) startMonth = dateMonthRange.startMonth;
          if (isEndYear) endMonth = dateMonthRange.endMonth;
          const months = [];
          for (let i = startMonth; i <= endMonth; i++) {
            months.push(i);
          }
          return months.map((month) => {
            const date = new Date(year, month, 1);
            return (
              <Box key={`${year}${month}`}>
                <Box style={{ paddingTop: 4, marginBottom: 4, textAlign: 'center' }}>
                  {localizer.format(date, 'monthHeaderFormat')}
                </Box>
                <Box style={{ paddingBottom: '100%', position: 'relative' }}>
                  <Box style={{ position: 'absolute', width: '95%', height: '95%' }}>
                    <MonthView {...this.props} date={date} onRangeChange={() => {}} />
                  </Box>
                </Box>
              </Box>
            );
          });
        })}
      </Box>
    );
  }
}

MonthRangeView.range = (date, { localizer, ...rest }) => {
  const start = localizer.firstVisibleDay(date, localizer);
  const end = localizer.lastVisibleDay(date, localizer);
  return { start, end };
};

MonthRangeView.navigate = (date) => {
  return date;
};

MonthRangeView.title = (date, { localizer }) => localizer.format(date, 'monthHeaderFormat');

export { MonthRangeView };

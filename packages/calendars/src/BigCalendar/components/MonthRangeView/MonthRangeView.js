import React, { useEffect } from 'react';
import { Box, Text } from '@bubbles-ui/components';
import { capitalize } from 'lodash';
import { MonthRangeViewStyles } from './MonthRangeView.styles';
import { MonthView } from '../MonthView/MonthView';
import { MONTHRANGEVIEW_DEFAULT_PROPS, MONTHRANGEVIEW_PROPTYPES } from './MonthRangeView.constants';

// const eventsForWeek = (evts, start, end, accessors, localizer) =>
//   evts.filter((e) => inRange(e, start, end, accessors, localizer));

const MonthRangeView = ({ ...props }) => {
  const { dateMonthRange, localizer, onRangeChange, printMode } = props;

  const years = [];
  if (dateMonthRange) {
    for (let i = dateMonthRange.startYear; i <= dateMonthRange.endYear; i++) {
      years.push(i);
    }
  }

  const { classes } = MonthRangeViewStyles({ printMode });

  useEffect(() => {
    onRangeChange({
      start: new Date(dateMonthRange.startYear, dateMonthRange.startMonth, 1, 0, 0, 0),
      end: new Date(dateMonthRange.endYear, dateMonthRange.endMonth + 1, 0, 23, 59, 59),
    });
  }, []);

  return (
    <Box className={classes.monthRangeView}>
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
            <Box className={classes.month} key={`${year}${month}`}>
              <Box style={{ paddingTop: 4, marginBottom: 4, textAlign: 'center' }}>
                <Text className={classes.monthHeader}>
                  {capitalize(localizer.format(date, 'monthHeaderFormat'))}
                </Text>
              </Box>
              <Box style={{ paddingBottom: printMode ? '196px' : '100%', position: 'relative' }}>
                <Box style={{ position: 'absolute', width: '100%', height: '100%' }}>
                  <MonthView
                    {...props}
                    date={date}
                    isMonthView={true}
                    monthNumber={month}
                    onRangeChange={() => {}}
                  />
                </Box>
              </Box>
            </Box>
          );
        });
      })}
    </Box>
  );
};

MonthRangeView.range = (date, { localizer }) => {
  const start = localizer.firstVisibleDay(date, localizer);
  const end = localizer.lastVisibleDay(date, localizer);
  return { start, end };
};

MonthRangeView.navigate = (date) => date;

MonthRangeView.title = (date, { localizer }) => localizer.format(date, 'monthHeaderFormat');

MonthRangeView.defaultProps = MONTHRANGEVIEW_DEFAULT_PROPS;
MonthRangeView.propTypes = MONTHRANGEVIEW_PROPTYPES;

export default MonthRangeView;
export { MonthRangeView };

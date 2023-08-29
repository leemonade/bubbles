import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, TextClamp, HoverCard } from '@bubbles-ui/components';
import { SCHEDULE_PROPS } from '../../ClassroomHeaderBar.constants';
import { TimeClockCircleIcon } from '@bubbles-ui/icons/outline';
import { find, forEach } from 'lodash';

function formatTime(time) {
  if (time.length > 5) {
    return time.slice(0, 5);
  }
  return time;
}

const ScheduleItem = ({ schedule, scheduleLabel, locale, firstDayOfWeek = 1, classes, cx }) => {
  const [weekDays, setWeekDays] = useState([]);

  const renderSchedule = (schedule) => {
    const { day, start, end, dayWeek } = schedule;
    const week = find(weekDays, { index: dayWeek });
    return (
      <Text key={`${day}-${start}-${end}`} role="productive" transform="capitalize" truncated>{`${
        week?.label
      } ${formatTime(start)}-${formatTime(end)}`}</Text>
    );
  };

  useEffect(() => {
    let orderedWeekdays = [];
    import(`dayjs/locale/${locale}.js`).then((e) => {
      orderedWeekdays = [...e.weekdays];
      if (firstDayOfWeek > 0) {
        const e = [...Array(firstDayOfWeek).keys()];
        forEach(e, () => {
          orderedWeekdays.push(orderedWeekdays.shift());
        });
      }
      setWeekDays(
        orderedWeekdays.map((day, index) => {
          let dayLabel = day.substring(0, 2);
          dayLabel = dayLabel.charAt(0).toUpperCase() + dayLabel.slice(1);
          return { label: dayLabel, index: e.weekdays.indexOf(day), day: day };
        })
      );
    });
  }, [locale]);

  return (
    <HoverCard offset={16}>
      <HoverCard.Target>
        <Box className={cx(classes.infoWrapper, classes.clickable)}>
          <TimeClockCircleIcon height={20} width={20} style={{ minHeight: 20, minWidth: 20 }} />
          <TextClamp lines={1}>
            <Text color="interactive" className={classes.label}>
              {scheduleLabel}
            </Text>
          </TextClamp>
        </Box>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Box className={classes.scheduleContainer}>
          {schedule.map((schedule) => renderSchedule(schedule))}
        </Box>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

ScheduleItem.defaultProps = {};
ScheduleItem.propTypes = {
  schedule: PropTypes.arrayOf(SCHEDULE_PROPS),
};

export { ScheduleItem };

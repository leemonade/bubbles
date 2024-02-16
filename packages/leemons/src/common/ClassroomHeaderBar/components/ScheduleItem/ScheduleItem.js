import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, HoverCard, Text, TextClamp } from '@bubbles-ui/components';
import { TimeClockCircleIcon } from '@bubbles-ui/icons/outline';
import { find, forEach } from 'lodash';
import { SCHEDULE_PROPS } from '../../ClassroomHeaderBar.constants';

function formatTime(time) {
  if (time.length > 5) {
    return time.slice(0, 5);
  }
  return time;
}

const ScheduleItem = ({ schedule, scheduleLabel, locale, firstDayOfWeek = 1, classes, cx }) => {
  const [weekDays, setWeekDays] = useState([]);

  const renderSchedule = (scheduleParam) => {
    const { day, start, end, dayWeek } = scheduleParam;
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
        const el = [...Array(firstDayOfWeek).keys()];
        forEach(el, () => {
          orderedWeekdays.push(orderedWeekdays.shift());
        });
      }
      setWeekDays(
        orderedWeekdays.map((day) => {
          let dayLabel = day.substring(0, 2);
          dayLabel = dayLabel.charAt(0).toUpperCase() + dayLabel.slice(1);
          return { label: dayLabel, index: e.weekdays.indexOf(day), day };
        }),
      );
    });
  }, [locale]);

  return (
    <HoverCard offset={16} withinPortal>
      <HoverCard.Target>
        <Box className={cx(classes.infoWrapper, classes.clickable)}>
          <TimeClockCircleIcon height={15} width={15} style={{ minHeight: 15, minWidth: 15 }} />
          <TextClamp lines={1}>
            <Text color="interactive" className={classes.label}>
              {scheduleLabel}
            </Text>
          </TextClamp>
        </Box>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Box className={classes.scheduleContainer}>
          {schedule.map((scheduleElem) => renderSchedule(scheduleElem))}
        </Box>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

ScheduleItem.defaultProps = {};
ScheduleItem.propTypes = {
  schedule: PropTypes.arrayOf(SCHEDULE_PROPS),
  scheduleLabel: PropTypes.string,
  locale: PropTypes.string,
  firstDayOfWeek: PropTypes.number,
  classes: PropTypes.object,
  cx: PropTypes.func,
};

export { ScheduleItem };

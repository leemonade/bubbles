import React, { useEffect, useState } from 'react';
import { Box, Popover, Text, TextClamp, UserDisplayItem } from '@bubbles-ui/components';
import { ClassroomHeaderBarStyles } from './ClassroomHeaderBar.styles';
import {
  CLASSROOM_HEADER_BAR_DEFAULT_PROPS,
  CLASSROOM_HEADER_BAR_PROP_TYPES
} from './ClassroomHeaderBar.constants';
import { MeetingCameraIcon } from '@bubbles-ui/icons/solid';
import {
  ChevDownIcon,
  StyleThreePinTableIcon,
  TimeClockCircleIcon
} from '@bubbles-ui/icons/outline';
import { find, forEach } from 'lodash';

function formatTime(time) {
  if (time.length > 5) {
    return time.slice(0, 5);
  }
  return time;
}

const ClassroomHeaderBar = ({
                              classRoom,
                              labels,
                              locale,
                              onVirtualClassroomOpen = () => {
                              }, firstDayOfWeek = 1,
                              ...props
                            }) => {
  const [schedulesOpen, setSchedulesOpen] = useState(false);
  const [weekDays, setWeekDays] = useState([]);
  const { schedule, address, virtual_classroom, teacher } = classRoom;
  const firstSchedule = schedule?.[0];

  const renderSchedule = (schedule) => {
    const { day, start, end, dayWeek } = schedule;
    const week = find(weekDays, { index: dayWeek });
    return (
      <Text key={`${day}-${start}-${end}`} role='productive' transform='capitalize' truncated>{`${
        week?.label
      } ${formatTime(start)}-${formatTime(end)}`}</Text>
    );
  };

  const handleOpenVirtualClassroom = () => {
    onVirtualClassroomOpen();
    window.open(virtual_classroom, '_blank');
  };

  const handleScheduleOpen = () => {
    setSchedulesOpen(!schedulesOpen);
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

  const { classes, cx } = ClassroomHeaderBarStyles({}, { name: 'ClassroomHeaderBar' });
  return (
    <Box className={classes.root}>
      {teacher ? (
        <UserDisplayItem
          name={teacher.name}
          surnames={teacher.surnames}
          avatar={teacher.avatar}
          size='xs'
          noBreak
        />
      ) : null}
      {address ? (
        <Box className={classes.classroomInfoBox}>
          <StyleThreePinTableIcon height={14} width={14} className={classes.pinIcon} />
          <TextClamp lines={1}>
            <Text color='interactive'>{address}</Text>
          </TextClamp>
        </Box>
      ) : null}
      {virtual_classroom ? (
        <Box
          className={classes.classroomInfoBox}
          style={{ cursor: 'pointer' }}
          onClick={handleOpenVirtualClassroom}
        >
          <MeetingCameraIcon height={12} width={12} />
          <Text color='interactive' truncated>
            {labels.virtualClassroom}
          </Text>
        </Box>
      ) : null}
      {schedule && schedule.length ? (
        <Popover
          opened={schedulesOpen}
          onClose={() => setSchedulesOpen(false)}
          target={
            <Box className={classes.scheduleBox} onClick={handleScheduleOpen}>
              <TimeClockCircleIcon height={14} width={14} />
              {renderSchedule(firstSchedule)}
              <ChevDownIcon />
            </Box>
          }
          position='bottom'
        >
          <Box className={classes.scheduleContainer}>
            {schedule.map((schedule) => renderSchedule(schedule))}
          </Box>
        </Popover>
      ) : null}
    </Box>
  );
};

ClassroomHeaderBar.defaultProps = CLASSROOM_HEADER_BAR_DEFAULT_PROPS;
ClassroomHeaderBar.propTypes = CLASSROOM_HEADER_BAR_PROP_TYPES;

export { ClassroomHeaderBar };

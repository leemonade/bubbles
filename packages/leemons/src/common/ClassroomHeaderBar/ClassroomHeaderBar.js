import React, { useState } from 'react';
import { Box, UserDisplayItem, TextClamp, Text, Popover } from '@bubbles-ui/components';
import { ClassroomHeaderBarStyles } from './ClassroomHeaderBar.styles';
import {
  CLASSROOM_HEADER_BAR_DEFAULT_PROPS,
  CLASSROOM_HEADER_BAR_PROP_TYPES,
} from './ClassroomHeaderBar.constants';
import { MeetingCameraIcon } from '@bubbles-ui/icons/solid';
import {
  StyleThreePinTableIcon,
  TimeClockCircleIcon,
  ChevDownIcon,
} from '@bubbles-ui/icons/outline';
import { capitalize } from 'lodash';

const ClassroomHeaderBar = ({ classRoom, labels, ...props }) => {
  const [schedulesOpen, setSchedulesOpen] = useState(false);
  const { schedule, address, virtual_classroom, teacher } = classRoom;
  const firstSchedule = schedule[0];

  const renderSchedule = (schedule) => {
    const { day, start, end } = schedule;
    return (
      <Text role="productive" transform="capitalize" truncated>{`${day} ${start}-${end}`}</Text>
    );
  };

  const handleOpenVirtualClassroom = () => {
    window.open(virtual_classroom, '_blank');
  };

  const handleScheduleOpen = () => {
    setSchedulesOpen(!schedulesOpen);
  };

  const { classes, cx } = ClassroomHeaderBarStyles({}, { name: 'ClassroomHeaderBar' });
  return (
    <Box className={classes.root}>
      <UserDisplayItem
        name={teacher.name}
        surnames={teacher.surnames}
        avatar={teacher.avatar}
        size="xs"
        noBreak
      />
      <Box className={classes.classroomInfoBox}>
        <StyleThreePinTableIcon height={14} width={14} className={classes.pinIcon} />
        <TextClamp lines={1}>
          <Text color="interactive">{address}</Text>
        </TextClamp>
      </Box>
      <Box
        className={classes.classroomInfoBox}
        style={{ cursor: 'pointer' }}
        onClick={handleOpenVirtualClassroom}
      >
        <MeetingCameraIcon height={12} width={12} />
        <Text color="interactive" truncated>
          {labels.virtualClassroom}
        </Text>
      </Box>
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
        position="bottom"
      >
        <Box className={classes.scheduleContainer}>
          {schedule.map((schedule) => renderSchedule(schedule))}
        </Box>
      </Popover>
    </Box>
  );
};

ClassroomHeaderBar.defaultProps = CLASSROOM_HEADER_BAR_DEFAULT_PROPS;
ClassroomHeaderBar.propTypes = CLASSROOM_HEADER_BAR_PROP_TYPES;

export { ClassroomHeaderBar };

import React from 'react';
import { Box, UserDisplayItem } from '@bubbles-ui/components';
import { ClassroomHeaderBarStyles } from './ClassroomHeaderBar.styles';
import {
  CLASSROOM_HEADER_BAR_DEFAULT_PROPS,
  CLASSROOM_HEADER_BAR_PROP_TYPES,
} from './ClassroomHeaderBar.constants';
import { AddressItem, ScheduleItem, VirtualClassItem, CalendarItem } from './components';
import { PluginComunicaIcon } from '@bubbles-ui/icons/outline';
import { isFunction } from 'lodash';

const ClassroomHeaderBar = ({
  classRoom,
  labels,
  locale,
  firstDayOfWeek = 1,
  onVirtualClassroomOpen = () => {},
  onChat,
  showChat,
  rightSide,
}) => {
  const { schedule, address, virtual_classroom, teacher, calendar } = classRoom;

  const onChatHandler = () => {
    isFunction(onChat) && onChat();
  };

  const { classes, cx } = ClassroomHeaderBarStyles({}, { name: 'ClassroomHeaderBar' });
  return (
    <Box className={classes.root}>
      <Box className={classes.root2}>
        {teacher ? (
          <Box className={cx(classes.infoWrapper, classes.clickable)} onClick={onChatHandler}>
            <UserDisplayItem
              name={teacher.name}
              surnames={teacher.surnames}
              avatar={teacher.avatar}
              size="sm"
              noBreak
              fullNameClassname={classes.label}
            />
            {onChat && showChat && (
              <PluginComunicaIcon height={20} width={20} style={{ minHeight: 20, minWidth: 20 }} />
            )}
          </Box>
        ) : null}

        {address ? <AddressItem address={address} classes={classes} cx={cx} /> : null}
        {virtual_classroom ? (
          <VirtualClassItem
            virtualClassroom={virtual_classroom}
            onVirtualClassroomOpen={onVirtualClassroomOpen}
            virtualClassroomLabel={labels.virtualClassroom}
            classes={classes}
            cx={cx}
          />
        ) : null}
        {calendar && (
          <CalendarItem
            calendar={calendar}
            calendarLabel={labels.calendar}
            classes={classes}
            cx={cx}
          />
        )}
        {schedule && schedule.length ? (
          <ScheduleItem
            schedule={schedule}
            scheduleLabel={labels.schedule}
            locale={locale}
            firstDayOfWeek={firstDayOfWeek}
            classes={classes}
            cx={cx}
          />
        ) : null}
      </Box>
      <Box>{rightSide ? rightSide : null}</Box>
    </Box>
  );
};

ClassroomHeaderBar.defaultProps = CLASSROOM_HEADER_BAR_DEFAULT_PROPS;
ClassroomHeaderBar.propTypes = CLASSROOM_HEADER_BAR_PROP_TYPES;

export { ClassroomHeaderBar };

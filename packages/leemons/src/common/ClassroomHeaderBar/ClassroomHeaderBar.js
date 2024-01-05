import React from 'react';
import { Box, Button, UserDisplayItem } from '@bubbles-ui/components';
import { ClassroomHeaderBarStyles } from './ClassroomHeaderBar.styles';
import {
  CLASSROOM_HEADER_BAR_DEFAULT_PROPS,
  CLASSROOM_HEADER_BAR_PROP_TYPES,
} from './ClassroomHeaderBar.constants';
import { AddressItem, CalendarItem, ScheduleItem, VirtualClassItem } from './components';
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
  leftSide,
}) => {
  const { schedule, address, virtual_classroom, teacher, calendar } = classRoom;

  const onChatHandler = () => {
    isFunction(onChat) && onChat();
  };

  const { classes, cx } = ClassroomHeaderBarStyles({}, { name: 'ClassroomHeaderBar' });
  return (
    <Box className={classes.root}>
      {leftSide ? leftSide : null}
      <Box className={classes.root2}>
        {teacher ? (
          <Box className={cx(classes.infoWrapper, classes.clickable)}>
            <UserDisplayItem
              name={teacher.name}
              surnames={teacher.surnames}
              avatar={teacher.avatar}
              size="sm"
              noBreak
              fullNameClassname={classes.label}
            />
          </Box>
        ) : null}

        {teacher &&
        ((onChat && showChat) ||
          virtual_classroom ||
          address ||
          calendar ||
          (schedule && schedule.length)) ? (
          <Box className={classes.separator} />
        ) : null}

        {onChat && showChat && (
          <Button
            leftIcon={
              <PluginComunicaIcon height={15} width={15} style={{ minHeight: 15, minWidth: 15 }} />
            }
            variant="link"
            onClick={onChatHandler}
          >
            {labels.chat}
          </Button>
        )}

        {virtual_classroom ? (
          <VirtualClassItem
            virtualClassroom={virtual_classroom}
            onVirtualClassroomOpen={onVirtualClassroomOpen}
            virtualClassroomLabel={labels.virtualClassroom}
            classes={classes}
            cx={cx}
          />
        ) : null}

        {((onChat && showChat) || virtual_classroom) &&
        (address || calendar || (schedule && schedule.length)) ? (
          <Box className={classes.separator} />
        ) : null}

        {address ? <AddressItem address={address} classes={classes} cx={cx} /> : null}

        {address && (calendar || (schedule && schedule.length)) ? (
          <Box className={classes.separator} />
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
        {rightSide ? rightSide : null}
      </Box>
    </Box>
  );
};

ClassroomHeaderBar.defaultProps = CLASSROOM_HEADER_BAR_DEFAULT_PROPS;
ClassroomHeaderBar.propTypes = CLASSROOM_HEADER_BAR_PROP_TYPES;

export { ClassroomHeaderBar };

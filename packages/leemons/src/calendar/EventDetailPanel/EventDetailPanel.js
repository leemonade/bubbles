import React from 'react';
import {
  Anchor,
  Box,
  Button,
  ContextContainer,
  Drawer,
  ImageLoader,
  Text,
  UserDisplayItem,
} from '@bubbles-ui/components';
import {
  MeetingCameraIcon,
  PluginClassesIcon,
  RedoIcon,
  SchoolTeacherMaleIcon,
  StopwatchIcon,
  StyleThreePinTableIcon,
} from '@bubbles-ui/icons/outline';
import { isFunction } from 'lodash';
import {
  EVENT_DETAIL_PANEL_DEFAULT_PROPS,
  EVENT_DETAIL_PANEL_PROP_TYPES,
} from './EventDetailPanel.constants';
import { EventDetailPanelStyles } from './EventDetailPanel.styles';

const EventDetailPanel = ({
  opened,
  event,
  labels,
  locale,
  onClose,
  onControl,
  onClickClassRoom = () => {},
  ...props
}) => {
  const handleOnClose = () => {
    isFunction(onClose) && onClose();
  };

  const handleOnControl = () => {
    isFunction(onControl) && onControl();
  };

  const renderDateRange = () => {
    const dateString = `${event.dateRange[0].toLocaleDateString(locale, {
      weekday: 'long',
    })}, ${event.dateRange[0].toLocaleDateString(locale, {
      day: 'numeric',
    })} ${event.dateRange[0].toLocaleDateString(locale, {
      month: 'short',
      year: 'numeric',
    })} — ${event.dateRange[0].toLocaleTimeString(locale, {
      hour12: false,
      timeStyle: 'short',
    })} - ${event.dateRange[1].toLocaleTimeString(locale, { hour12: false, timeStyle: 'short' })}`;

    return <Text role="productive">{`${dateString}`}</Text>;
  };

  const { classes, cx } = EventDetailPanelStyles({}, { name: 'EventDetailPanel' });

  let inside = null;
  if (event) {
    const { title, period, classGroup, subject, teacher, classroom, location } = event;
    inside = (
      <ContextContainer>
        <ContextContainer title={labels.subjectTitle}>
          <Box className={classes.sectionRow}>
            <Text role="productive">{title}</Text>
          </Box>
        </ContextContainer>

        <ContextContainer title={labels.subjectDates}>
          <Box className={classes.sectionRow}>{renderDateRange()}</Box>
          <Box className={classes.sectionRow}>
            <Text role="productive">{period}</Text>
          </Box>
        </ContextContainer>
        <ContextContainer title={labels.subjectName}>
          <Box className={classes.sectionRow}>
            <Text role="productive" color="primary">
              {classGroup}
            </Text>
          </Box>
          <Box className={classes.sectionRow}>
            {subject.icon ? (
              <ImageLoader
                className={classes.subjectIcon}
                height={16}
                width={16}
                src={subject.icon}
              />
            ) : null}
            <Text role="productive" color="primary">
              {subject.name}
            </Text>
          </Box>
        </ContextContainer>
        <ContextContainer title={labels.subjectTeacher}>
          <Box className={classes.sectionRow}>
            <UserDisplayItem
              textRole="productive"
              noBreak
              size="xs"
              name={teacher.name}
              surnames={teacher.surnames}
              avatar={teacher.image}
            />
            <Text role="productive" size="xs" color="soft">
              {labels.mainTeacher}
            </Text>
          </Box>
        </ContextContainer>

        {classroom || location ? (
          <ContextContainer title={labels.subjectClassroom}>
            <Box className={classes.section}>
              {classroom ? (
                <Box className={classes.sectionRow}>
                  <Anchor
                    style={{ textDecoration: 'none' }}
                    onClick={onClickClassRoom}
                    role="productive"
                  >
                    {classroom}
                  </Anchor>
                </Box>
              ) : null}

              {location ? (
                <Box className={classes.sectionRow}>
                  <Text role="productive" color="primary">
                    {location}
                  </Text>
                </Box>
              ) : null}
            </Box>
          </ContextContainer>
        ) : null}
      </ContextContainer>
    );
  }

  return (
    <Drawer opened={opened} onClose={handleOnClose} className={classes.root} size={500}>
      <Drawer.Header title={labels.detailEvent} />
      <Drawer.Content>{inside}</Drawer.Content>
      <Drawer.Footer>
        <Button style={{ marginBlock: 8 }} fullWidth position="center" onClick={handleOnControl}>
          {labels.attendanceControl}
        </Button>
      </Drawer.Footer>
    </Drawer>
  );
};

EventDetailPanel.defaultProps = EVENT_DETAIL_PANEL_DEFAULT_PROPS;
EventDetailPanel.propTypes = EVENT_DETAIL_PANEL_PROP_TYPES;

export { EventDetailPanel };

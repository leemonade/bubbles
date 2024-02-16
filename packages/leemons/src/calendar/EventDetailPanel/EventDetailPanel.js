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
    if (isFunction(onClose)) onClose();
  };

  const handleOnControl = () => {
    if (isFunction(onControl)) onControl();
  };

  const renderDateRange = () => {
    const longDay = event.startDate.toLocaleDateString(locale, {
      weekday: 'long',
    });
    const shortDay = event.startDate.toLocaleDateString(locale, {
      day: 'numeric',
    });
    const monthYear = event.startDate.toLocaleDateString(locale, {
      month: 'short',
      year: 'numeric',
    });
    const startHour = event.startDate.toLocaleTimeString(locale, {
      hour12: false,
      timeStyle: 'short',
    });
    const endHour = event.endDate.toLocaleTimeString(locale, { hour12: false, timeStyle: 'short' });
    const dateString = `${longDay}, ${shortDay} ${monthYear} — ${startHour} - ${endHour}`;

    return <Text role="productive">{`${dateString}`}</Text>;
  };

  const { classes, cx } = EventDetailPanelStyles({}, { name: 'EventDetailPanel' });

  let inside = null;
  if (event) {
    const { title, period, classGroup, subject, teacher, classroom, location } = event;
    inside = (
      <Box style={{ margin: -16 }}>
        <ContextContainer title={title} divided>
          <Box className={classes.section}>
            <Box className={classes.sectionRow}>
              <StopwatchIcon height={16} width={16} className={classes.icon} />
              {renderDateRange()}
            </Box>
            <Box className={classes.sectionRow}>
              <RedoIcon height={16} width={16} className={classes.icon} />
              <Text role="productive">{period}</Text>
            </Box>
            <Box className={classes.sectionRow}>
              <PluginClassesIcon height={16} width={16} className={classes.icon} />
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
            <Box className={classes.sectionRow}>
              <SchoolTeacherMaleIcon height={16} width={16} className={classes.icon} />
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
            <Button
              style={{ marginBlock: 8 }}
              fullWidth
              position="center"
              onClick={handleOnControl}
            >
              {labels.attendanceControl}
            </Button>
          </Box>
          <Box className={classes.section}>
            {classroom ? (
              <Box className={classes.sectionRow}>
                <MeetingCameraIcon height={16} width={16} className={classes.icon} />
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
                <StyleThreePinTableIcon height={16} width={16} className={classes.icon} />
                <Text role="productive" color="primary">
                  {location}
                </Text>
              </Box>
            ) : null}
          </Box>
        </ContextContainer>
      </Box>
    );
  }

  return (
    <Drawer opened={opened} onClose={handleOnClose} className={classes.root} size={500}>
      {inside}
    </Drawer>
  );
};

EventDetailPanel.defaultProps = EVENT_DETAIL_PANEL_DEFAULT_PROPS;
EventDetailPanel.propTypes = EVENT_DETAIL_PANEL_PROP_TYPES;

export { EventDetailPanel };

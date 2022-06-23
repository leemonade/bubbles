import React from 'react';
import { EventDetailPanelStyles } from './EventDetailPanel.styles';
import {
  Box,
  ContextContainer,
  Drawer,
  Text,
  Button,
  UserDisplayItem,
  Anchor,
} from '@bubbles-ui/components';
import {
  TimeClockCircleIcon,
  RedoIcon,
  PluginClassesIcon,
  SchoolTeacherMaleIcon,
  MeetingCameraIcon,
  StopwatchIcon,
  StyleThreePinTableIcon,
} from '@bubbles-ui/icons/outline';
import { LadybugIcon } from '@bubbles-ui/icons/solid';
import {
  EVENT_DETAIL_PANEL_DEFAULT_PROPS,
  EVENT_DETAIL_PANEL_PROP_TYPES,
} from './EventDetailPanel.constants';
import { isFunction } from 'lodash';

const EventDetailPanel = ({ opened, event, labels, locale, onClose, onControl, ...props }) => {
  const handleOnClose = () => {
    isFunction(onClose) && onClose();
  };

  const handleOnControl = () => {
    isFunction(onControl) && onControl();
  };

  const { title, dateRange, period, classGroup, subject, teacher, classroom, location } = event;

  const renderDateRange = () => {
    const dateString = `${dateRange[0].toLocaleDateString(locale, {
      weekday: 'long',
    })}, ${dateRange[0].toLocaleDateString(locale, {
      day: 'numeric',
    })} ${dateRange[0].toLocaleDateString(locale, {
      month: 'short',
      year: 'numeric',
    })} — ${dateRange[0].toLocaleTimeString(locale, {
      hour12: false,
      timeStyle: 'short',
    })} - ${dateRange[1].toLocaleTimeString(locale, { hour12: false, timeStyle: 'short' })}`;

    return <Text role="productive">{`${dateString}`}</Text>;
  };

  const { classes, cx } = EventDetailPanelStyles({}, { name: 'EventDetailPanel' });
  return (
    <Drawer opened={opened} onClose={handleOnClose} className={classes.root} size={500}>
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
              <LadybugIcon height={16} width={16} className={classes.icon} />
              <Text role="productive" color="primary">
                {subject}
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
            <Box className={classes.sectionRow}>
              <MeetingCameraIcon height={16} width={16} className={classes.icon} />
              <Anchor style={{ textDecoration: 'none' }} role="productive">
                {classroom}
              </Anchor>
            </Box>
            <Box className={classes.sectionRow}>
              <StyleThreePinTableIcon height={16} width={16} className={classes.icon} />
              <Text role="productive" color="primary">
                {location}
              </Text>
            </Box>
          </Box>
        </ContextContainer>
      </Box>
    </Drawer>
  );
};

EventDetailPanel.defaultProps = EVENT_DETAIL_PANEL_DEFAULT_PROPS;
EventDetailPanel.propTypes = EVENT_DETAIL_PANEL_PROP_TYPES;

export { EventDetailPanel };

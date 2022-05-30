import React, { useMemo } from 'react';
import { KanbanTaskCardStyles } from './KanbanTaskCard.styles';
import {
  Avatar,
  Box,
  ImageLoader,
  Paper,
  Paragraph,
  Text,
  TextClamp,
} from '@bubbles-ui/components';
import { filter, find } from 'lodash';
import dayjs from 'dayjs';

const emptyPixel =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

export const KANBAN_TASK_CARD_DEFAULT_PROPS = {
  onClick: () => {},
};
export const KANBAN_TASK_CARD_PROP_TYPES = {};

const ProgressBar = ({ value }) => {
  const { classes, cx } = KanbanTaskCardStyles({ progress: value });
  return (
    <Box className={classes.progress}>
      {value.toFixed(2)}%
      <Box className={classes.progressOut}>
        <Box className={classes.progressIn} />
      </Box>
    </Box>
  );
};

const KanbanTaskCard = ({ value, config, onClick, ...props }) => {
  const calendar = find(config.calendars, { id: value.calendar });
  if (!calendar) return null;

  const { classes, cx } = KanbanTaskCardStyles({ bgColor: value.bgColor || calendar.bgColor });

  const percentaje = useMemo(() => {
    if (value.data && value.data.subtask) {
      const total = value.data.subtask.length;
      const completed = filter(value.data.subtask, { checked: true }).length;
      return parseInt((completed / total) * 100);
    }
    return null;
  }, [value]);

  const avatar = {
    image: null,
    icon: value.icon ? (
      <Box className={classes.icon}>
        <ImageLoader
          height="14px"
          imageStyles={{
            width: 14,
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          src={value.icon}
          forceImage
        />
      </Box>
    ) : null,
    color: value.bgColor,
  };

  if (calendar.isUserCalendar) {
    avatar.fullName = calendar.fullName;
  } else if (!avatar.image && !avatar.icon) {
    avatar.image = emptyPixel;
  }

  return (
    <Paper shadow="none" className={classes.root} onClick={() => onClick(value)}>
      <Box className={classes.topSection}>
        <Box className={classes.title}>{value.title}</Box>

        {value.startDate ? (
          <Box>
            <Text size="xs">{dayjs(value.startDate).format('DD/MM/YYYY HH:mm')}</Text>
          </Box>
        ) : null}
      </Box>
      <Box className={classes.bottomSection}>
        <Box className={classes.bottomSectionBg} />
        <Box className={classes.bottomSectionContent}>
          {value.data && value.data.description ? (
            <Box className={classes.description}>
              <TextClamp lines={1} showTooltip>
                <Text role="productive">{value.data.description}</Text>
              </TextClamp>
            </Box>
          ) : null}
          <Box className={classes.avatar}>
            <Avatar mx="auto" size="xs" {...avatar} />
            {!calendar.isUserCalendar ? (
              <Paragraph size="xs" sx={(theme) => ({ marginLeft: theme.spacing[2], marginTop: 0 })}>
                {value.calendarName || calendar.name}
              </Paragraph>
            ) : null}
          </Box>
          {percentaje !== null ? (
            <Box>
              <ProgressBar value={percentaje} />
            </Box>
          ) : null}
        </Box>
      </Box>
    </Paper>
  );
};

KanbanTaskCard.defaultProps = KANBAN_TASK_CARD_DEFAULT_PROPS;
KanbanTaskCard.propTypes = KANBAN_TASK_CARD_PROP_TYPES;

export { KanbanTaskCard };

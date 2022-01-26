import React, { useMemo } from 'react';
import { KanbanTaskCardStyles } from './KanbanTaskCard.styles';
import { Paragraph, Text } from '../../typography';
import { Box, Paper } from '../../layout';
import { filter, find } from 'lodash';
import dayjs from 'dayjs';
import { Avatar } from '../../informative';
import { ImageLoader } from '../../../es';

export const KANBAN_TASK_CARD_DEFAULT_PROPS = {};
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

const KanbanTaskCard = ({ value, config, ...props }) => {
  const calendar = find(config.calendars, { id: value.calendar });
  if (!calendar) return null;

  const { classes, cx } = KanbanTaskCardStyles({ bgColor: calendar.bgColor });

  const percentaje = useMemo(() => {
    if (value.data && value.data.subtask) {
      const total = value.data.subtask.length;
      const completed = filter(value.data.subtask, { checked: true }).length;
      return (completed / total) * 100;
    }
    return 33;
  }, [value]);

  const getInitials = () => {
    const words = calendar.name.split(' ');
    return (
      <span>
        {words[0] ? words[0][0] : ''}
        {words[1] ? words[1][0] : ''}
      </span>
    );
  };

  const avatar = {
    image: calendar.icon ? null : 'http://daisyui.com/tailwind-css-component-profile-1@40w.png',
    icon: calendar.icon ? <ImageLoader strokeCurrent src={calendar.icon} /> : null,
    initials: getInitials(),
  };

  return (
    <Paper shadow="none" className={classes.root}>
      <Box className={classes.topSection}>
        <Box className={classes.title}>
          <Text>{value.title}</Text>
        </Box>
        <Box>
          <Text size="xs">{dayjs(value.endAt).format('DD/MM/YYYY')}</Text>
        </Box>
      </Box>
      <Box className={classes.bottomSection}>
        {value.data && value.data.description ? (
          <Box sx={(theme) => ({ marginBottom: theme.spacing[4] })}>{value.data.description}</Box>
        ) : null}
        <Box className={classes.avatar}>
          <Avatar mx="auto" size="xs" {...avatar} />
          <Paragraph size="xs" sx={(theme) => ({ marginLeft: theme.spacing[2] })}>
            {calendar.name}
          </Paragraph>
        </Box>
        {percentaje !== null ? (
          <Box>
            <ProgressBar value={percentaje} />
          </Box>
        ) : null}
      </Box>
    </Paper>
  );
};

KanbanTaskCard.defaultProps = KANBAN_TASK_CARD_DEFAULT_PROPS;
KanbanTaskCard.propTypes = KANBAN_TASK_CARD_PROP_TYPES;

export { KanbanTaskCard };

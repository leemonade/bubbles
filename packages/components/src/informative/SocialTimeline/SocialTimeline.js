import React, { useCallback } from 'react';
import { Box } from '../../layout';
import { Avatar } from '../Avatar';
import { Text } from '../../typography';
import { SocialTimelineStyles } from './SocialTimeline.styles';
import {
  SOCIAL_TIMELINE_DEFAULT_PROPS,
  SOCIAL_TIMELINE_PROP_TYPES,
} from './SocialTimeline.constants';

const SocialTimeline = ({ messages, ...props }) => {
  const { classes, cx } = SocialTimelineStyles({}, { name: 'SocialTimeline' });

  const getTimelineDays = useCallback(() => {
    let days = [];
    for (const message of messages) {
      const adjustedDate = new Date(message.timestamp).setHours(0, 0, 0, 0);
      if (!days.includes(adjustedDate)) {
        days.push(adjustedDate);
      }
    }
    return days.map((day) => new Date(day));
  }, [messages]);

  const message = (
    <Box className={classes.messageRoot}>
      <Box className={classes.avatarSide}>
        <Box className={classes.line} />
        <Box className={classes.avatarWrapper}>
          <Avatar src="https://s3-alpha-sig.figma.com/img/86f5/00bf/5087006856da2fdf6b83170bc7c6e193?Expires=1658707200&Signature=c40gVblB1b9Jklq8YagxF6Q3o6~x3p-EjSl9fCXZMZZfyA5CU8rbDUNfi69Xp2jKK54Y79DwPaI0-J0qy-7qgWD~GUfCqZ4AR50A20h3n0sgEsUVkZg4Pbbci43TZi36B~fmPBzp4qQHUCL808Ew3gQZ0JiFc-VH3ygW3tcFIYEEN33jHbhdqfYJahQumJHgNDiNqISdzYRQMLujlMMPGshZ6aneF5M9H~4GxkEiQ9B5Vn1cpIu1E0Ho1-~G6RhyDJHU8b~FbnCvGovWoNNJzPsJPoABxBx8n947df-8CXJrncsugglplPfiZmdyrWIlBTvqU8LRXv9UQ-n5JrfQXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        </Box>
      </Box>
      <Box className={classes.messageInfo}>
        <Text>{new Date('2012-07-05T18:30:32.360Z').toLocaleTimeString()}</Text>
        <Box className={classes.message}>
          <Text color="primary" role="productive" stronger>
            Martina{' '}
          </Text>
          <Text color="primary" role="productive">
            te ha añadido a la tarea{' '}
          </Text>
          <Text color="primary" role="productive" stronger>
            Casas Moriscas
          </Text>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box className={classes.root}>
      {message}
      {message}
    </Box>
  );
};

SocialTimeline.defaultProps = SOCIAL_TIMELINE_DEFAULT_PROPS;
SocialTimeline.propTypes = SOCIAL_TIMELINE_PROP_TYPES;

export { SocialTimeline };

import React from 'react';
import { Box } from '../../../layout';
import { Avatar } from '../../Avatar';
import { Text } from '../../../typography';
import { Menu } from '../../../navigation';
import { useHover } from '@mantine/hooks';
import { ActionButton } from '../../../form';
import { MessageItemStyles } from './MessageItem.styles';
import { SettingMenuVerticalIcon } from '@bubbles-ui/icons/solid';
import { MESSAGE_ITEM_DEFAULT_PROPS, MESSAGE_ITEM_PROP_TYPES } from './MessageItem.constants';

const MessageItem = ({ actor, timestamp, verb, object, index, locale, ...props }) => {
  const { hovered, ref } = useHover();

  const getTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const { classes, cx } = MessageItemStyles({}, { name: 'MessageItem' });
  return (
    <Box ref={ref} className={classes.messageRoot} key={`${timestamp} ${index}`}>
      <Box className={classes.avatarSide}>
        <Box className={classes.line} />
        <Box className={classes.avatarWrapper}>
          <Avatar src={actor.avatar} />
        </Box>
      </Box>
      <Box className={classes.messageInfo}>
        <Text color="quartiary">{getTime(timestamp)}</Text>
        <Box className={classes.message}>
          <Text color="primary" role="productive" stronger>
            {`${actor.name} `}
          </Text>
          <Text color="primary" role="productive">
            {`${verb} `}
          </Text>
          <Text color="primary" role="productive" stronger>
            {object.definition.name}
          </Text>
        </Box>
      </Box>
      {hovered && (
        <Box className={classes.messageMenu}>
          <Menu control={<ActionButton icon={<SettingMenuVerticalIcon />} />} />
        </Box>
      )}
    </Box>
  );
};

MessageItem.defaultProps = MESSAGE_ITEM_DEFAULT_PROPS;
MessageItem.propTypes = MESSAGE_ITEM_PROP_TYPES;

export { MessageItem };

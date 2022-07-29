import React from 'react';
import { Box } from '../../layout';
import { Text } from '../../typography';
import { UserDisplayItem } from '../UserDisplayItem';
import { ChatMessageStyles } from './ChatMessage.styles';
import { CHAT_MESSAGE_DEFAULT_PROPS, CHAT_MESSAGE_PROP_TYPES } from './ChatMessage.constants';

const ChatMessage = ({ message, user, isOwn, isOnline, locale, showUser = true, ...props }) => {
  const { classes, cx } = ChatMessageStyles({ isOwn }, { name: 'ChatMessage' });
  return (
    <Box className={classes.root}>
      {showUser ? <UserDisplayItem
        {...user}
        size='xs'
        layout={isOwn ? 'right' : 'left'}
        state={isOnline ? 'activity' : undefined}
      /> : null}

      <Box className={classes.messageBox}>
        {message?.type === 'text' && (
          <Text role='productive' color='primary' size='md'>
            {message?.content}
          </Text>
        )}
        <Text className={classes.messageDate}>
          {message?.date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </Box>
    </Box>
  );
};

ChatMessage.defaultProps = CHAT_MESSAGE_DEFAULT_PROPS;
ChatMessage.propTypes = CHAT_MESSAGE_PROP_TYPES;

export { ChatMessage };

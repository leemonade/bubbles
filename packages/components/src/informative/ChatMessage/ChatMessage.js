import React from 'react';
import { Box } from '../../layout';
import { UserDisplayItem } from '../UserDisplayItem';
import { ChatMessageStyles } from './ChatMessage.styles';
import { CHAT_MESSAGE_DEFAULT_PROPS, CHAT_MESSAGE_PROP_TYPES } from './ChatMessage.constants';

const ChatMessage = ({
                       message,
                       user,
                       isOwn,
                       isOnline,
                       locale,
                       showUser = true,
                       isTeacher,
                       isAdmin,
                       ...props
                     }) => {
  const { classes, cx } = ChatMessageStyles({ isOwn, isTeacher, isAdmin }, { name: 'ChatMessage' });
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
          <Box className={classes.message}>
            {message?.content}
          </Box>
        )}
        <Box className={classes.messageDate}>
          {message?.date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })}
        </Box>
      </Box>
    </Box>
  );
};

ChatMessage.defaultProps = CHAT_MESSAGE_DEFAULT_PROPS;
ChatMessage.propTypes = CHAT_MESSAGE_PROP_TYPES;

export { ChatMessage };

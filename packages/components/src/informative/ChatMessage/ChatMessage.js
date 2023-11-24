import React from 'react';
import { Box } from '../../layout';
import { UserDisplayItem } from '../UserDisplayItem';
import { ChatMessageStyles } from './ChatMessage.styles';
import { CHAT_MESSAGE_DEFAULT_PROPS, CHAT_MESSAGE_PROP_TYPES } from './ChatMessage.constants';
import { Highlight } from '@mantine/core';

const ChatMessage = ({
                       message,
                       user,
                       isOwn,
                       isOnline,
                       locale,
                        selected,
                       highlight,
                       showUser = true,
                       isTeacher,
                       isAdmin,
                       ...props
                     }) => {
  const { classes, cx } = ChatMessageStyles({ isOwn, isTeacher, isAdmin, selected }, { name: 'ChatMessage' });
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
            <Highlight highlight={highlight}>
              {message?.content}
            </Highlight>
          </Box>
        )}
        {message?.type === 'img' && (
          <Box className={classes.message}>
            <img style={{width: '100%'}} src={message?.content}/>
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

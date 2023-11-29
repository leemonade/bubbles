import React from 'react';
import { Highlight } from '@mantine/core';
import { Box } from '../../layout/Box';
import { Avatar } from '../Avatar';
import { getUserFullName } from '../../navigation/MainNav/helpers/getUserFullName';
import { ChatMessageStyles } from './ChatMessage.styles';
import { CHAT_MESSAGE_DEFAULT_PROPS, CHAT_MESSAGE_PROP_TYPES } from './ChatMessage.constants';

const ChatMessage = ({
  message,
  user,
  isOwn,
  isOnline,
  locale,
  selected,
  highlight,
  showUser = true,
  showUserName = true,
  isTeacher,
  isAdmin,
}) => {
  const { classes } = ChatMessageStyles(
    { isOwn, isTeacher, isAdmin, selected },
    { name: 'ChatMessage' },
  );
  const fullName = getUserFullName(user);
  return (
    <Box className={classes.root}>
      {showUser && !isOwn ? (
        <Box className={classes.avatar}>
          <Avatar image={user.avatar} size="sm" state={user.state} />
        </Box>
      ) : null}

      <Box className={classes.messageBox}>
        {!isOwn && showUserName && fullName && (
          <Highlight className={classes.name} highlight={highlight}>
            {fullName}
          </Highlight>
        )}
        <Box className={classes.messageBoxInner}>
          {message?.type === 'text' && message?.content && (
            <Highlight className={classes.message} highlight={highlight}>
              {message?.content}
            </Highlight>
          )}
          {message?.type === 'img' && (
            <Box className={classes.message}>
              <img style={{ width: '100%' }} src={message?.content} />
            </Box>
          )}
          <Box className={classes.messageDate}>
            {message?.date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

ChatMessage.defaultProps = CHAT_MESSAGE_DEFAULT_PROPS;
ChatMessage.propTypes = CHAT_MESSAGE_PROP_TYPES;

export { ChatMessage };

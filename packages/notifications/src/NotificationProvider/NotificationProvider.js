import React from 'react';
import PropTypes from 'prop-types';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Portal, getDefaultZIndex, Box } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';
import { NotificationsContext, ChatContext, CONTEXT_TYPES } from './context';
import { getPositionStyles, getNotificationStateStyles } from './helpers';
import { useNotificationsState } from './hooks';
import { NotificationContainer } from './NotificationContainer';
import { NotificationProviderStyles } from './NotificationProvider.styles';

const NOTIFICATION_PROVIDER_PROP_TYPES = {
  /** Auto close timeout for all notifications, false to disable auto close, can be overwritten for individual notifications by showNotification function */
  autoClose: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

  /** Notification transitions duration, 0 to turn transitions off */
  transitionDuration: PropTypes.number,

  /** Notification width in px, cannot exceed 100% */
  containerWidth: PropTypes.number,

  /** Notification max-height in px, used for transitions */
  notificationMaxHeight: PropTypes.number,

  /** Maximum amount of notifications displayed at a time, other new notifications will be added to queue */
  limit: PropTypes.number,

  /** Notifications container z-index */
  zIndex: PropTypes.number,

  /** Notification position left offset */
  leftOffset: PropTypes.number,

  /** Notification position X offset */
  xOffset: PropTypes.number,

  /** Notification type */
  type: PropTypes.string,
};
export const NOTIFICATION_PROVIDER_DEFAULT_PROPS = {
  autoClose: 4000,
  transitionDuration: 250,
  containerWidth: 440,
  notificationMaxHeight: 200,
  limit: 5,
  zIndex: 999,
  leftOffset: 0,
  xOffset: 0,
  type: CONTEXT_TYPES.DEFAULT,
};

const NotificationProvider = ({
  className,
  position: positionProp,
  autoClose,
  transitionDuration,
  containerWidth,
  notificationMaxHeight,
  limit,
  zIndex: zIndexProp,
  style,
  children,
  leftOffset,
  xOffset,
  type,
  ...props
}) => {
  const {
    notifications,
    queue,
    showNotification,
    updateNotification,
    hideNotification,
    clean,
    cleanQueue,
  } = useNotificationsState({ limit });
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;
  const { classes, cx, theme } = NotificationProviderStyles(
    {},
    { name: `NotificationProvider_${type}` }
  );

  let positioning = 'bottom-left'.split('-');
  let zIndex = Math.min(zIndexProp, getDefaultZIndex('overlay'));
  let Provider = NotificationsContext.Provider;

  if (type === CONTEXT_TYPES.CHAT) {
    positioning = 'bottom-right'.split('-');
    zIndex += 1;
    Provider = ChatContext.Provider;
  }

  const items = notifications.map((notification) => (
    <Transition
      key={notification.id}
      timeout={duration}
      unmountOnExit
      mountOnEnter
      onEnter={(node) => node.offsetHeight}
    >
      {(state) => (
        <NotificationContainer
          notification={notification}
          onHide={hideNotification}
          className={classes.notification}
          autoClose={autoClose}
          type={type}
          sx={{
            ...getNotificationStateStyles({
              state,
              positioning,
              transitionDuration: duration,
              maxHeight: notificationMaxHeight,
            }),
          }}
        />
      )}
    </Transition>
  ));

  return (
    <Provider
      value={{
        notifications,
        queue,
        showNotification,
        hideNotification,
        updateNotification,
        clean,
        cleanQueue,
      }}
    >
      <Portal zIndex={zIndex}>
        <Box
          {...props}
          className={cx(classes.notifications, className)}
          style={style}
          sx={{
            maxWidth: containerWidth,
            ...getPositionStyles(
              positioning,
              containerWidth,
              theme.spacing.md,
              Math.max(leftOffset, xOffset)
            ),
          }}
        >
          <TransitionGroup>{items}</TransitionGroup>
        </Box>
      </Portal>
      {children}
    </Provider>
  );
};

NotificationProvider.propTypes = NOTIFICATION_PROVIDER_PROP_TYPES;
NotificationProvider.defaultProps = NOTIFICATION_PROVIDER_DEFAULT_PROPS;

export { NotificationProvider };

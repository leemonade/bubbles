import { useContext } from 'react';
import { useQueue, randomId } from '@mantine/hooks';
import { isFunction } from 'lodash';
import { NotificationsContext, ChatContext, CONTEXT_TYPES } from '../context';

export function useNotifications(type = CONTEXT_TYPES.DEFAULT) {
  const context = useContext(type === CONTEXT_TYPES.CHAT ? ChatContext : NotificationsContext);

  if (!context) {
    throw new Error('NotificationsProvider was not found in tree');
  }

  return context;
}

export function useNotificationsState({ limit }) {
  const { state, queue, update, cleanQueue } = useQueue({
    initialValues: [],
    limit,
  });

  const showNotification = (notification) => {
    const id = notification.id || randomId();

    update((notifications) => {
      if (notification.id && notifications.some((n) => n.id === notification.id)) {
        return notifications;
      }

      return [...notifications, { ...notification, id }];
    });

    return id;
  };

  const updateNotification = (id, notification) =>
    update((notifications) => {
      const index = notifications.findIndex((n) => n.id === id);

      if (index === -1) {
        return notifications;
      }

      const newNotifications = [...notifications];
      newNotifications[index] = notification;

      return newNotifications;
    });

  const hideNotification = (id) =>
    update((notifications) =>
      notifications.filter((notification) => {
        if (notification.id === id) {
          if (isFunction(notification.onClose)) notification.onClose(notification);
          return false;
        }

        return true;
      }),
    );

  const clean = () => update(() => []);

  return {
    notifications: state,
    queue,
    showNotification,
    updateNotification,
    hideNotification,
    cleanQueue,
    clean,
  };
}

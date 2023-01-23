import React, { useEffect, useRef } from 'react';
import { Notification } from '../Notification';
import { getAutoClose } from './helpers';

const NotificationContainer = ({ className, sx, notification, autoClose, onHide, type }) => {
  const autoCloseTimeout = getAutoClose(autoClose, notification);
  const hideTimeout = useRef();

  const handleHide = () => {
    onHide(notification.id);
    window.clearTimeout(hideTimeout.current);
  };

  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current);
  };

  const handleDelayedHide = () => {
    if (typeof autoCloseTimeout === 'number') {
      hideTimeout.current = window.setTimeout(handleHide, autoCloseTimeout);
    }
  };

  useEffect(() => {
    if (typeof notification.onOpen === 'function') {
      notification.onOpen(notification);
    }
  }, []);

  useEffect(() => {
    handleDelayedHide();
    return cancelDelayedHide;
  }, [autoClose, notification.autoClose]);

  return (
    <Notification
      sx={sx}
      type={type}
      className={className}
      title={notification.title}
      onClose={handleHide}
      severity={notification.severity}
      avatar={notification.avatar}
      loading={notification.loading}
      disallowClose={notification.disallowClose}
      onMouseEnter={cancelDelayedHide}
      onMouseLeave={handleDelayedHide}
    >
      {notification.message}
    </Notification>
  );
};

export { NotificationContainer };

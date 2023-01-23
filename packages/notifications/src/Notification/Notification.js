import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Notification as MantineNotification } from '@mantine/core';
import { Box, Text, ALERT_SEVERITIES, Avatar } from '@bubbles-ui/components';
import {
  CheckIcon,
  AlertWarningTriangleIcon,
  AlertInformationCircleIcon,
  BlockIcon,
} from '@bubbles-ui/icons/solid';
import { NotificationStyles } from './Notification.styles';
import { CONTEXT_TYPES } from '../NotificationProvider/context';

export const NOTIFICATION_DEFAULT_PROPS = {
  severity: 'none',
  loading: false,
  disallowClose: false,
  icon: null,
  type: CONTEXT_TYPES.DEFAULT,
  avatar: '',
};

export const NOTIFICATION_PROP_TYPES = {
  /** Called when close button is clicked */
  onClose: PropTypes.func,

  /** Notification line or icon color */
  severity: PropTypes.oneOf(['none', ...ALERT_SEVERITIES]),

  /** Notification icon, displayed at left of body */
  icon: PropTypes.node,

  /** Notification title, displayed before body */
  title: PropTypes.string,

  /** Notification message, place main text here */
  message: PropTypes.string,

  /** Notification body, place main text here */
  children: PropTypes.node,

  /** Replaces colored line or icon with Loader component */
  loading: PropTypes.bool,

  /** Removes close button */
  disallowClose: PropTypes.bool,

  /** Notification type */
  type: PropTypes.string,

  /** Notification avatar */
  avatar: PropTypes.string,
};

const SEVERITY_ICONS = {
  info: AlertInformationCircleIcon,
  success: CheckIcon,
  error: BlockIcon,
  warning: AlertWarningTriangleIcon,
};

const Notification = forwardRef(
  ({ children, message, severity, icon: iconProp, type, avatar, ...props }, ref) => {
    const icon = useMemo(() => {
      if (!isEmpty(avatar)) {
        return <></>;
      }
      if (!isEmpty(severity) && severity !== 'none') {
        const IconComp = SEVERITY_ICONS[severity];
        return <IconComp />;
      }
      return iconProp;
    }, [severity, iconProp, avatar]);

    const { classes, cx } = NotificationStyles(
      { hasIcon: !isEmpty(icon), severity, type },
      { name: `Notification_${type}` }
    );

    return (
      <MantineNotification {...props} ref={ref} classNames={classes} icon={icon}>
        {!isEmpty(avatar) && (
          <Box style={{ position: 'absolute', left: 15, top: 15 }}>
            <Avatar image={avatar} />
          </Box>
        )}
        {!isEmpty(message) && (
          <Box>
            <Text role="productive" size="xs" className={classes.message}>
              {message}
            </Text>
          </Box>
        )}
        {children}
      </MantineNotification>
    );
  }
);

Notification.defaultProps = NOTIFICATION_DEFAULT_PROPS;
Notification.propTypes = NOTIFICATION_PROP_TYPES;

export { Notification };

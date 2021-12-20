import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isNil, isString } from 'lodash';
import { Alert as MantineAlert, Box, Button, CloseButton } from '@mantine/core';
import {
  CheckIcon,
  AlertWarningTriangleIcon,
  AlertInformationCircleIcon,
  BlockIcon,
} from '@bubbles-ui/icons/solid';
import { AlertStyles } from './Alert.styles';

export const ALERT_SEVERITIES = ['info', 'success', 'warning', 'error'];
export const ALERT_VARIANTS = ['inline', 'block'];

const ALERT_ICONS = {
  info: AlertInformationCircleIcon,
  success: CheckIcon,
  error: BlockIcon,
  warning: AlertWarningTriangleIcon,
};

const Alert = ({
  children,
  severity,
  title,
  variant,
  action,
  closeable,
  onClose,
  onAction,
  ...props
}) => {
  variant = ALERT_VARIANTS.includes(variant) ? variant : 'inline';
  severity = ALERT_SEVERITIES.includes(severity) ? severity : 'info';
  const isCloseable = useMemo(() => !isNil(closeable) && closeable !== '', [closeable]);
  const { classes, cx } = AlertStyles({ variant, severity }, { name: 'Alert' });

  return (
    <MantineAlert
      {...props}
      icon={ALERT_ICONS[severity]()}
      classNames={classes}
      closebuttonlabel={isCloseable && isString(closeable) ? closeable : 'Close'}
    >
      <Box>
        <Box className={classes.variant}>
          <Box className={classes.title}>{title}</Box>
          <Box className={classes.content}>{children}</Box>
          <Box>
            <Button variant="link" className={classes.action} onClick={onAction}>
              {action}
            </Button>
          </Box>
        </Box>
        {isCloseable && (
          <CloseButton className={classes.closeButton} onClick={onClose} variant="transparent" />
        )}
      </Box>
    </MantineAlert>
  );
};

Alert.defaultProps = {
  variant: 'inline',
  severity: 'info',
  closeable: true,
};

Alert.propTypes = {
  title: PropTypes.node,
  severity: PropTypes.oneOf(ALERT_SEVERITIES),
  icon: PropTypes.node,
  variant: PropTypes.string,
  closeable: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  action: PropTypes.node,
  onAction: PropTypes.func,
  onClose: PropTypes.func,
};

export { Alert };

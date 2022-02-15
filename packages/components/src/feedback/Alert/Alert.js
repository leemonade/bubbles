import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isNil, isString } from 'lodash';
import { Alert as MantineAlert, Box } from '@mantine/core';
import {
  CheckIcon,
  AlertWarningTriangleIcon,
  AlertInformationCircleIcon,
  BlockIcon,
} from '@bubbles-ui/icons/solid';
import { RemoveIcon } from '@bubbles-ui/icons/outline';
import { AlertStyles } from './Alert.styles';
import { Button } from '../../form/Button';
import { ActionButton } from '../../form/ActionButton';

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
  const isCloseable = useMemo(
    () => closeable && !isNil(closeable) && closeable !== '',
    [closeable]
  );
  const { classes, cx } = AlertStyles({ variant, severity }, { name: 'Alert' });

  return (
    <MantineAlert {...props} icon={ALERT_ICONS[severity]()} classNames={classes}>
      <Box className={classes.wrapper}>
        <Box className={classes.variant}>
          {!isNil(title) && title !== '' && <Box className={classes.title}>{title}</Box>}
          {!isNil(children) && children !== '' && <Box className={classes.content}>{children}</Box>}
          {!isNil(action) && action !== '' && (
            <Box className={classes.action}>
              <Button variant="link" size="xs" onClick={onAction}>
                {action}
              </Button>
            </Box>
          )}
        </Box>
        {isCloseable && (
          <Box className={classes.closeButton}>
            <ActionButton
              icon={<RemoveIcon />}
              tooltip={isString(closeable) ? closeable : 'Close'}
              onClick={onClose}
            />
          </Box>
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

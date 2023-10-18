/* eslint-disable import/no-cycle */
import React, { useMemo } from 'react';
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
import { ActionButton } from '../../form/ActionButton';
import { Button } from '../../form/Button';
import {
  ALERT_DEFAULT_PROPS,
  ALERT_PROP_TYPES,
  ALERT_SEVERITIES,
  ALERT_VARIANTS,
} from './Alert.constants';

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
  useAria,
  ...props
}) => {
  const variantCheked = ALERT_VARIANTS.includes(variant) ? variant : 'inline';
  const severityChecked = ALERT_SEVERITIES.includes(severity) ? severity : 'info';
  const isCloseable = useMemo(
    () => closeable && !isNil(closeable) && closeable !== '',
    [closeable]
  );
  const { classes } = AlertStyles({ variantCheked, severityChecked }, { name: 'Alert' });

  return (
    <MantineAlert
      {...props}
      icon={ALERT_ICONS[severityChecked]()}
      classNames={classes}
      role={useAria ? 'alert' : undefined}
    >
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

Alert.defaultProps = ALERT_DEFAULT_PROPS;
Alert.propTypes = ALERT_PROP_TYPES;
Alert.displayName = 'Alert';

export default Alert;

export { Alert };

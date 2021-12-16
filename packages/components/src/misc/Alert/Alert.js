import React from 'react';
import PropTypes from 'prop-types';
import { Alert as MantineAlert, Box, Button, CloseButton } from '@mantine/core';
import { AlertStyles } from './Alert.styles';

export const ALERT_COLORS = ['info', 'success', 'warning', 'error'];
export const ALERT_VARIANTS = ['inline', 'block'];

const Alert = ({
  children,
  color,
  title,
  variant,
  action,
  withCloseButton = true,
  onClose,
  onAction,
  ...props
}) => {
  variant = ALERT_VARIANTS.includes(variant) ? variant : 'inline';
  color = ALERT_COLORS.includes(color) ? color : 'info';

  const { classes, cx } = AlertStyles({ variant, color }, { name: 'Alert' });

  return (
    <MantineAlert
      {...props}
      classNames={classes}
      closebuttonlabel={withCloseButton ? 'Close alert' : null}
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
        {withCloseButton ? (
          <CloseButton
            className={classes.closeButton}
            onClick={onClose}
            variant="transparent"
          ></CloseButton>
        ) : null}
      </Box>
    </MantineAlert>
  );
};

Alert.propTypes = {
  title: PropTypes.node,
  color: PropTypes.oneOf(ALERT_COLORS),
  icon: PropTypes.node,
  variant: PropTypes.string,
  withCloseButton: PropTypes.bool,
  action: PropTypes.node,
  onAction: PropTypes.func,
};

export { Alert };

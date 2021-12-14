import React from 'react';
import PropTypes from 'prop-types';
import { Alert as MantineAlert } from '@mantine/core';
import { AlertStyles } from './Alert.styles';
import { CheckIcon } from '@heroicons/react/outline';
import { InformationCircleIcon, ExclamationIcon, XIcon } from '@heroicons/react/solid';

export const ALERT_COLORS = ['info', 'success', 'warning', 'error'];
export const ALERT_ICONS = [InformationCircleIcon(), CheckIcon(), ExclamationIcon(), XIcon()];

const Alert = ({ children, color, ...props }) => {
  const { classes, cx } = AlertStyles({ color });

  return (
    <MantineAlert {...props} classNames={classes}>
      {children}
    </MantineAlert>
  );
};

Alert.propTypes = {
  //
};

export { Alert };

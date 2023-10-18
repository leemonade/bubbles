import React from 'react';
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { AlertWarningTriangleIcon } from '@bubbles-ui/icons/solid';
import { useStyles } from './FatIcons.styles';

export const IconError = () => {
  const { classes } = useStyles();

  return <ExclamationCircleIcon className={classes.errorIcon} />;
};

export const IconWarning = () => {
  const { classes } = useStyles();

  return <AlertWarningTriangleIcon className={classes.warningIcon} />;
};

export const IconSuccess = () => {
  const { classes } = useStyles();

  return <CheckCircleIcon className={classes.sucessIcon} />;
};

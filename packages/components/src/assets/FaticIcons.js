import React from 'react';
import { createStyles } from '@mantine/core';
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { AlertWarningTriangleIcon } from '@bubbles-ui/icons/solid';

const useStyles = createStyles((theme) => {
  const iconProps = {
    width: 10,
    height: 10,
    marginLeft: theme.spacing['1'],
    transform: `translateY(-${theme.spacing['1']}px)`,
  };

  return {
    errorIcon: {
      ...iconProps,
      color: theme.colors.fatic01,
    },
    warningIcon: {
      ...iconProps,
      color: theme.colors.fatic03,
    },
    sucessIcon: {
      ...iconProps,
      color: theme.colors.fatic02,
    },
  };
});

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

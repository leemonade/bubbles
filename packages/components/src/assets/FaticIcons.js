import { createStyles } from '@mantine/core';
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/solid';

const useStyles = createStyles((theme) => {
  return {
    errorIcon: {
      width: 10,
      color: theme.colors.fatic01,
      marginLeft: theme.spacing['1'],
      transform: `translateY(-${theme.spacing['1']}px)`,
    },
    sucessIcon: {
        width: 10,
        color: theme.colors.fatic02,
        marginLeft: theme.spacing['1'],
        transform: `translateY(-${theme.spacing['1']}px)`,
    },
  };
});

export const IconError = () => {
  const { classes } = useStyles();

  return (
    <ExclamationCircleIcon className={classes.errorIcon} />
  );
}

export const IconSuccess = () => {
  const { classes } = useStyles();

  return <CheckCircleIcon className={classes.sucessIcon} />;
};

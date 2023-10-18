/* eslint-disable import/prefer-default-export */
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
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

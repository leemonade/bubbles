import React from 'react';
import { Group } from '@mantine/core';
import { InputErrorStyles } from './InputError.styles';
import { AlertWarningTriangleIcon } from '../../../../icons/solid';
import { Text } from '../../typography';
import { isNil } from 'lodash';

const InputError = ({ error }) => {
  const { classes } = InputErrorStyles({});

  return (
    <Group spacing="xs">
      <AlertWarningTriangleIcon className={classes.errorIcon} />
      <Text as="span" className={classes.error}>
        {!isNil(error.message) ? error.message : error}
      </Text>
    </Group>
  );
};

InputError.propTypes = {
  //
};

export { InputError };

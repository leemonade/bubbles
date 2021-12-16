import React from 'react';
import PropTypes from 'prop-types';
import { isObjectLike } from 'lodash';
import { Group } from '@mantine/core';
import { AlertWarningTriangleIcon } from '@bubbles-ui/icons/solid';
import { InputErrorStyles } from './InputError.styles';
import { Text } from '../../typography';

const InputError = ({ message }) => {
  const { classes } = InputErrorStyles({});

  return (
    <Group spacing="xs">
      <AlertWarningTriangleIcon className={classes.errorIcon} />
      <Text as="span" className={classes.error}>
        {isObjectLike(message) ? message.message : message}
      </Text>
    </Group>
  );
};

InputError.propTypes = {
  message: PropTypes.any,
};

export { InputError };

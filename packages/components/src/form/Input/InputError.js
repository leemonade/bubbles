import React from 'react';
import { Group } from '@mantine/core';
import { AlertWarningTriangleIcon } from '@bubbles-ui/icons/solid';
import { isNil } from 'lodash';
import { Text } from '../../typography';

export const InputError = ({ classNames, error }) => {
  return (
    <Group spacing="xs">
      <AlertWarningTriangleIcon className={classNames.errorIcon} />
      <Text as="span" className={classNames.error}>
        {!isNil(error.message) ? error.message : error}
      </Text>
    </Group>
  );
};

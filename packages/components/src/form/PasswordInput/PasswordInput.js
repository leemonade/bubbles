import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ExclamationIcon } from '@heroicons/react/solid';
import { PasswordInput as MantinePasswordInput, Group, Text } from '@mantine/core';
import { INPUT_SIZES } from '../Input';
import { PasswordInputStyles } from './PasswordInput.styles';

export const PASSWORD_INPUT_SIZES = INPUT_SIZES;

const InputDescription = ({ className, message }) => {
  return <Text className={className}>{message}</Text>;
};

const InputError = ({ className, message }) => {
  return (
    <Group>
      <ExclamationIcon style={{ height: '0.85rem', paddingTop: '2px', margin: '0 0 0 8px' }} />
      <Text component="span" className={className}>
        {message}
      </Text>
    </Group>
  );
};

export const PasswordInput = forwardRef(
  ({ radius, label, description, error, size: sizeProp = 'sm', ...props }, ref) => {
    const size = PASSWORD_INPUT_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const { classes, cx } = PasswordInputStyles({ size });
    const customError = error ? (
      <InputError className={classes.error} message={error} />
    ) : undefined;

    return (
      <MantinePasswordInput
        {...props}
        description={<InputDescription className={classes.description} message={description} />}
        error={customError}
        label={label}
        classNames={classes}
      />
    );
  }
);

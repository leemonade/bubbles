import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ExclamationIcon } from '@heroicons/react/solid';
import { TextInput as MantineTextInput, Group, Text } from '@mantine/core';
import { TextInputStyles } from './TextInput.styles';
export const TINPUT_SIZES = ['xs', 'sm'];

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

export const TextInput = forwardRef(
  (
    {
      radius,
      variant,
      icon,
      label,
      input,
      description,
      showRightSection = false,
      rightSection,
      error,
      size: sizeProp = 'sm',
      ...props
    },
    ref
  ) => {
    const size = TINPUT_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const { classes, cx } = TextInputStyles({ size });
    const buttonRightSection = showRightSection ? rightSection : undefined;
    const customError = error ? (
      <InputError className={classes.error} message={error} />
    ) : undefined;

    return (
      <MantineTextInput
        {...props}
        size={size}
        description={<InputDescription className={classes.description} message={description} />}
        error={customError}
        label={label}
        rightSection={buttonRightSection}
        classNames={{
          input: classes.input,
          label: classes.label,
          required: classes.required,
          rightSection: classes.rightSection,
        }}
      />
    );
  }
);


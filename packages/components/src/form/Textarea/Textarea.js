import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ExclamationIcon } from '@heroicons/react/solid';
import { Group, Text } from '@mantine/core';
import { Textarea as MantineTextarea } from '@mantine/core'; 
import { TextareaStyles } from './Textarea.styles';

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



export const Textarea = forwardRef(
  (
    {
      radius,
      variant,
      icon,
      label,
      input, 
      description,
      error,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = TextareaStyles({});
    const customError = error ? (
      <InputError className={classes.error} message={error} />
    ) : undefined;

     
    return (
      <MantineTextarea
        {...props}
        description={<InputDescription className={classes.description} message={description} />}
        error={customError}
        label={label} 
        classNames={{input: classes.input, label: classes.label, required:classes.required}}
      />
    );
  }
);
 
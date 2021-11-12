import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ExclamationIcon } from '@heroicons/react/solid';
import { TextInput as MantineTextInput, Group, Text } from '@mantine/core';
import {Input} from './../Input/Input'
import { TextInputStyles } from './TextInput.styles';
export const TINPUT_SIZES = ['xs', 'sm'];
export const TINPUT_ORIENTATION = ['horizontal', 'vertical'];

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
      orientation: orientationProp = 'vertical',
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
    const orientation = TINPUT_ORIENTATION.includes(orientationProp) ? orientationProp : 'vertical';
    const { classes, cx } = TextInputStyles({ size, orientation });
    const buttonRightSection = showRightSection ? rightSection : undefined;
    console.log(orientation);
    const customError = error ? (
      <InputError className={classes.error} message={error} />
    ) : undefined;

    return ( 
        <MantineTextInput
          {...props}
          size={size}
          orientation={orientation}
          description={<InputDescription className={classes.description} message={description} />}
          error={customError}
          label={label}
          rightSection={buttonRightSection}
          className={orientation}
          classNames={classes}
        /> 
    );
  }
);


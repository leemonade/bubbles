import React, { forwardRef } from 'react'; 
import { useId } from '@mantine/hooks';
import { ExclamationIcon } from '@heroicons/react/solid'; 
import { InputWrapper as MantineInputWrapper, Group, Text, Input } from '@mantine/core';
import { InputWrapperStyles } from './InputWrapper.styles';

export const WINPUT_SIZES = ['xs', 'sm'];
export const WINPUT_ORIENTATION = ['horizontal', 'vertical'];
export const WINPUT_AS = ['input', 'select', 'textarea'];

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


export const InputWrapper = forwardRef(
  (
    {
      radius,
      variant,
      icon,
      orientation: orientationProp = 'vertical',
      as = 'input',
      label,
      input, 
      description,
      error,
      size: sizeProp = 'sm',
      placeholder,
      ...props
    },
    ref
  ) => {
    const size = WINPUT_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const orientation = WINPUT_ORIENTATION.includes(orientationProp) ? orientationProp : 'vertical';
    const component = WINPUT_AS.includes(as) ? as : 'input'; 
    const uuid = useId();
    const { classes, cx } = InputWrapperStyles({ size, orientation });
    const customError = error ? (
      <InputError className={classes.error} message={error} />
    ) : undefined;

    return (
      <MantineInputWrapper
        {...props}
        description={<InputDescription className={classes.description} message={description} />}
        error={customError}
        label={label}
        id={uuid}
        classNames={classes}
      >
        <Input
          id={uuid}
          ref={ref}
          component={component}
          size={size}
          placeholder={placeholder}
          classNames={{ root: classes.inputRoot }}
        />
      </MantineInputWrapper>
    );
  }
);

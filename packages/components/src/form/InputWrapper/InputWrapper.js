import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useId } from '@mantine/hooks';
import { AlertWarningTriangleIcon } from '@bubbles-ui/icons/solid';
import { InputWrapper as MantineInputWrapper, Group } from '@mantine/core';
import { isNil } from 'lodash';
import { Text } from '../../typography';
import { Input, InputError } from '../Input';
import { InputWrapperStyles } from './InputWrapper.styles';

export const INPUT_WRAPPER_SIZES = ['xs', 'sm'];
export const INPUT_WRAPPER_ORIENTATION = ['horizontal', 'vertical'];
export const INPUT_WRAPPER_AS = ['input', 'select', 'textarea'];

const InputDescription = ({ className, message }) => {
  return <Text className={className}>{message}</Text>;
};

export const InputWrapper = forwardRef(
  (
    {
      radius,
      as = 'input',
      orientation: orientationProp = 'vertical',
      size: sizeProp = 'sm',
      label,
      description,
      error,
      placeholder,
      rightSection,
      ...props
    },
    ref
  ) => {
    const size = INPUT_WRAPPER_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const orientation = INPUT_WRAPPER_ORIENTATION.includes(orientationProp)
      ? orientationProp
      : 'vertical';
    const component = INPUT_WRAPPER_AS.includes(as) ? as : 'input';
    const uuid = useId();
    const { classes, cx } = InputWrapperStyles({ size, orientation });
    const customError = error ? <InputError classNames={classes} error={error} /> : undefined;

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
          rightSection={rightSection}
          invalid={!isNil(error) && error != ''}
        />
      </MantineInputWrapper>
    );
  }
);

InputWrapper.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  as: PropTypes.oneOf(INPUT_WRAPPER_AS),
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATION),
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

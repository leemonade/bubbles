import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useId } from '@mantine/hooks';
import { InputWrapper as MantineInputWrapper } from '@mantine/core';
import { isNil } from 'lodash';
import { Input } from '../Input';
import { InputError } from '../InputError';
import { InputDescription } from '../InputDescription';
import { InputWrapperStyles } from './InputWrapper.styles';

export const INPUT_WRAPPER_SIZES = ['xs', 'sm'];
export const INPUT_WRAPPER_ORIENTATION = ['horizontal', 'vertical'];
export const INPUT_WRAPPER_AS = ['input', 'select', 'textarea'];

const InputWrapper = forwardRef(
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
    console.log('error:', error);
    return (
      <MantineInputWrapper
        {...props}
        description={!isNil(description) ? <InputDescription message={description} /> : null}
        error={!isNil(error) ? <InputError message={error} /> : null}
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
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATION),
  error: PropTypes.string,
};

export { InputWrapper };

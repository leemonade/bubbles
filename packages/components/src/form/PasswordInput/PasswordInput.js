import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { PasswordInput as MantinePasswordInput } from '@mantine/core';
import { isEmpty } from 'lodash';
import { useId } from '@mantine/hooks';
import {
  InputWrapper,
  INPUT_WRAPPER_SIZES,
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SHARED_PROPS,
} from '../InputWrapper';
import { PasswordInputStyles } from './PasswordInput.styles';

export const PASSWORD_INPUT_SIZES = INPUT_WRAPPER_SIZES;
export const PASSWORD_INPUT_ORIENTATIONS = INPUT_WRAPPER_ORIENTATIONS;

export const PASSWORD_INPUT_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  ariaLabel: PropTypes.string,
};
export const PASSWORD_INPUT_DEFAULT_PROPS = {
  label: '',
  description: '',
  help: '',
  error: '',
  size: PASSWORD_INPUT_SIZES[1],
  orientation: PASSWORD_INPUT_ORIENTATIONS[0],
  required: false,
};

const PasswordInput = forwardRef(
  (
    {
      radius, // Just to pick it up to not pass to props
      error,
      size,
      label,
      help,
      icon,
      description,
      placeholder,
      required,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const uuid = useId();
    const hasIcon = !!icon;
    const { classes, cx } = PasswordInputStyles({ size, hasIcon });

    return (
      <InputWrapper
        uuid={uuid}
        size={size}
        label={label}
        description={description}
        help={help}
        error={error}
        required={required}
      >
        <MantinePasswordInput
          {...props}
          ref={ref}
          id={uuid}
          size={size}
          icon={icon}
          placeholder={placeholder}
          classNames={classes}
          error={!isEmpty(error)}
          aria-label={ariaLabel}
        />
      </InputWrapper>
    );
  }
);

PasswordInput.propTypes = PASSWORD_INPUT_PROP_TYPES;
PasswordInput.defaultProps = PASSWORD_INPUT_DEFAULT_PROPS;

export { PasswordInput };

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper as MantineInputWrapper } from '@mantine/core';
import { isNil, isString } from 'lodash';
import { InputError } from '../InputError';
import { InputDescription } from '../InputDescription';
import { InputHelp } from '../InputHelp';
import { InputWrapperStyles } from './InputWrapper.styles';

export const INPUT_WRAPPER_SIZES = ['xs', 'sm'];
export const INPUT_WRAPPER_ORIENTATION = ['horizontal', 'vertical'];

export const PROP_TYPES = {
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATION),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  help: PropTypes.string,
};
export const DEFAULT_PROPS = {
  as: 'input',
  orientation: 'vertical',
  size: 'sm',
};

const InputWrapper = forwardRef(
  (
    {
      radius, // Just to pick it up to not pass to props
      as,
      orientation: orientationProp,
      size: sizeProp,
      uuid,
      label,
      description,
      error,
      placeholder,
      rightSection,
      help,
      children,
      ...props
    },
    ref
  ) => {
    const size = INPUT_WRAPPER_SIZES.includes(sizeProp) ? sizeProp : 'sm';
    const orientation = INPUT_WRAPPER_ORIENTATION.includes(orientationProp)
      ? orientationProp
      : 'vertical';
    const hasError = useMemo(() => !isNil(error) && error !== '', [error]);

    const { classes, cx } = InputWrapperStyles({ size, orientation });

    return (
      <MantineInputWrapper
        {...props}
        description={!isNil(description) ? <InputDescription message={description} /> : null}
        error={hasError ? <InputError message={error} /> : null}
        label={label}
        id={uuid}
        classNames={classes}
      >
        {children}
        {isString(help) && help !== '' && !hasError && <InputHelp message={help} />}
      </MantineInputWrapper>
    );
  }
);

InputWrapper.defaultProps = DEFAULT_PROPS;

InputWrapper.propTypes = PROP_TYPES;

export { InputWrapper };

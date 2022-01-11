import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { NumberInput as MantineNumberInput } from '@mantine/core';
import { isEmpty } from 'lodash';
import { useId } from '@mantine/hooks';
import {
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SIZES,
  InputWrapper,
  INPUT_WRAPPER_SHARED_PROPS,
} from '../InputWrapper';
import { Paragraph } from '../../typography';
import { NumberInputStyles } from './NumberInput.styles';

export const NUMBER_INPUT_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
};

export const NUMBER_INPUT_DEFAULT_PROPS = {
  label: '',
  description: '',
  size: INPUT_WRAPPER_SIZES[1],
  orientation: INPUT_WRAPPER_ORIENTATIONS[1],
  error: '',
  required: false,
};

const NumberInput = forwardRef(
  ({ error, size, label, orientation, description, help, readOnly, required, ...props }, ref) => {
    const uuid = useId();
    const { classes, cx } = NumberInputStyles({ size });

    return (
      <InputWrapper
        uuid={uuid}
        size={size}
        error={error}
        label={label}
        description={description}
        orientation={orientation}
        required={required}
        help={help}
      >
        {readOnly ? (
          <Paragraph clean>{value || defaultValue || ''}</Paragraph>
        ) : (
          <MantineNumberInput {...props} ref={ref} classNames={classes} error={!isEmpty(error)} />
        )}
      </InputWrapper>
    );
  }
);

NumberInput.propTypes = NUMBER_INPUT_PROP_TYPES;
NumberInput.defaultProps = NUMBER_INPUT_DEFAULT_PROPS;

export { NumberInput };

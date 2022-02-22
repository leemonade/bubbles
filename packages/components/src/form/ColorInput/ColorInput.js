import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { ColorInput as MantineColorInput } from '@mantine/core';
import { useId } from '@mantine/hooks';
import {
  INPUT_WRAPPER_ORIENTATIONS,
  INPUT_WRAPPER_SHARED_PROPS,
  INPUT_WRAPPER_SIZES,
  InputWrapper,
} from '../InputWrapper';
import { ColorInputStyles } from './ColorInput.styles';

export const COLOR_INPUT_PROP_TYPES = {
  ...INPUT_WRAPPER_SHARED_PROPS,
  orientation: PropTypes.oneOf(INPUT_WRAPPER_ORIENTATIONS),
  size: PropTypes.oneOf(INPUT_WRAPPER_SIZES),
};

export const COLOR_INPUT_DEFAULT_PROPS = {
  label: '',
  description: '',
  size: INPUT_WRAPPER_SIZES[1],
  orientation: INPUT_WRAPPER_ORIENTATIONS[1],
  error: '',
  required: false,
};

const ColorInput = forwardRef(
  (
    {
      error,
      size,
      label,
      orientation,
      description,
      help,
      readOnly,
      required,
      headerStyle,
      contentStyle,
      headerClassName,
      contentClassName,
      ...props
    },
    ref
  ) => {
    const uuid = useId();
    const { classes, cx } = ColorInputStyles({ size }, { name: 'ColorInput' });

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
        headerStyle={headerStyle}
        contentStyle={contentStyle}
        headerClassName={headerClassName}
        contentClassName={contentClassName}
      >
        <MantineColorInput
          {...props}
          ref={ref}
          size={size}
          classNames={classes}
          autoComplete="off"
          error={!isEmpty(error)}
        />
      </InputWrapper>
    );
  }
);

ColorInput.defaultProps = COLOR_INPUT_DEFAULT_PROPS;
ColorInput.propTypes = COLOR_INPUT_PROP_TYPES;

export { ColorInput };

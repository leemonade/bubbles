import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useId } from '@mantine/hooks';
import { Textarea as MantineTextarea } from '@mantine/core';
import { isNil } from 'lodash';
import { InputWrapper, INPUT_WRAPPER_SIZES, INPUT_WRAPPER_ORIENTATION } from '../InputWrapper';
import { TextareaStyles } from './Textarea.styles';

export const TEXTAREA_SIZES = INPUT_WRAPPER_SIZES;
export const TEXTAREA_ORIENTATIONS = INPUT_WRAPPER_ORIENTATION;

const Textarea = forwardRef(
  (
    {
      radius, // Just to pick it up to not pass to props
      placeholder,
      error,
      size,
      autosize,
      minRows,
      ...props
    },
    ref
  ) => {
    const uuid = useId();

    const { classes, cx } = TextareaStyles({ size });

    return (
      <InputWrapper {...props} uuid={uuid} size={size} error={error}>
        <MantineTextarea
          id={uuid}
          ref={ref}
          size={size}
          autosize={autosize}
          placeholder={placeholder}
          classNames={classes}
          error={!isNil(error) && error != ''}
        />
      </InputWrapper>
    );
  }
);

Textarea.defaultProps = {
  minRows: 2,
};

Textarea.propTypes = {
  minRows: PropTypes.number,
};

export { Textarea };

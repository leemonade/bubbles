import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useId } from '@mantine/hooks';
import { Textarea as MantineTextarea } from '@mantine/core';
import { isNil } from 'lodash';
import { InputWrapper, INPUT_WRAPPER_SIZES, INPUT_WRAPPER_ORIENTATIONS } from '../InputWrapper';
import { TextareaStyles } from './Textarea.styles';
import { TEXT_INPUT_PROP_TYPES, TEXT_INPUT_DEFAULT_PROPS } from '../TextInput';
import { Paragraph } from '../../typography';

export const TEXTAREA_SIZES = INPUT_WRAPPER_SIZES;
export const TEXTAREA_ORIENTATIONS = INPUT_WRAPPER_ORIENTATIONS;

export const TEXTAREA_DEFAULT_PROPS = {
  ...TEXT_INPUT_DEFAULT_PROPS,
  minRows: 2,
  autosize: true,
};

export const TEXTAREA_PROP_TYPES = {
  ...TEXT_INPUT_PROP_TYPES,
  autosize: PropTypes.bool,
  minRows: PropTypes.number,
};

const Textarea = forwardRef(
  (
    {
      radius, // Just to pick it up to not pass to props
      placeholder,
      error,
      size,
      autosize,
      minRows,
      name,
      onBlur,
      onChange,
      value,
      defaultValue,
      disabled,
      readOnly,
      ...props
    },
    ref
  ) => {
    const uuid = useId();

    const { classes, cx } = TextareaStyles({ size });

    return (
      <InputWrapper {...props} uuid={uuid} size={size} error={error}>
        {readOnly ? (
          <Paragraph clean>{value || defaultValue || ''}</Paragraph>
        ) : (
          <MantineTextarea
            id={uuid}
            ref={ref}
            size={size}
            autosize={autosize}
            placeholder={placeholder}
            name={name}
            disabled={disabled}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            classNames={classes}
            error={!isNil(error) && error != ''}
          />
        )}
      </InputWrapper>
    );
  }
);

Textarea.defaultProps = TEXTAREA_DEFAULT_PROPS;
Textarea.propTypes = TEXTAREA_PROP_TYPES;

export { Textarea };

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { useId } from '@mantine/hooks';
import { Input } from '../Input';
import { INPUT_WRAPPER_ORIENTATIONS, INPUT_WRAPPER_SIZES, InputWrapper } from '../InputWrapper';
import { Paragraph } from '../../typography';

export const TEXT_INPUT_SIZES = INPUT_WRAPPER_SIZES;
export const TEXT_INPUT_ORIENTATION = INPUT_WRAPPER_ORIENTATIONS;

export const TEXT_INPUT_PROP_TYPES = {
  name: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.oneOf(TEXT_INPUT_SIZES),
  orientation: PropTypes.oneOf(TEXT_INPUT_ORIENTATION),
  placeholder: PropTypes.string,
  rightSection: PropTypes.node,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

export const TEXT_INPUT_DEFAULT_PROPS = {
  size: 'sm',
  orientation: TEXT_INPUT_ORIENTATION[1],
  disabled: false,
  required: false,
  readOnly: false,
  onChange: () => {},
};

const TextInput = forwardRef(
  (
    {
      error,
      size,
      placeholder,
      rightSection,
      name,
      value,
      onBlur,
      onChange,
      defaultValue,
      disabled,
      readOnly,
      className,
      ...props
    },
    ref
  ) => {
    const uuid = useId();
    return (
      <InputWrapper {...props} uuid={uuid} size={size} error={error}>
        {readOnly ? (
          <Paragraph clean>{value || defaultValue || ''}</Paragraph>
        ) : (
          <Input
            id={uuid}
            ref={ref}
            size={size}
            name={name}
            disabled={disabled}
            onBlur={onBlur}
            onChange={(e) => onChange(e.target.value)}
            defaultValue={defaultValue}
            value={value || ''}
            placeholder={placeholder}
            rightSection={rightSection}
            invalid={!isEmpty(error)}
            className={className}
          />
        )}
      </InputWrapper>
    );
  }
);

TextInput.defaultProps = TEXT_INPUT_DEFAULT_PROPS;
TextInput.propTypes = TEXT_INPUT_PROP_TYPES;

export { TextInput };

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isFunction } from 'lodash';
import { useId } from '@mantine/hooks';
import { Input } from '../Input';
import { INPUT_WRAPPER_ORIENTATIONS, INPUT_WRAPPER_SIZES, InputWrapper } from '../InputWrapper';
import { Paragraph } from '../../typography';

export const TEXT_INPUT_SIZES = INPUT_WRAPPER_SIZES;
export const TEXT_INPUT_ORIENTATION = INPUT_WRAPPER_ORIENTATIONS;
export const TEXT_INPUT_VARIANTS = ['default', 'filled'];

export const TEXT_INPUT_PROP_TYPES = {
  name: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  size: PropTypes.oneOf(TEXT_INPUT_SIZES),
  variant: PropTypes.oneOf(TEXT_INPUT_VARIANTS),
  orientation: PropTypes.oneOf(TEXT_INPUT_ORIENTATION),
  placeholder: PropTypes.string,
  rightSection: PropTypes.node,
  defaultValue: PropTypes.string,
  icon: PropTypes.node,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  autoComplete: PropTypes.string,
};

export const TEXT_INPUT_DEFAULT_PROPS = {
  size: 'sm',
  orientation: TEXT_INPUT_ORIENTATION[1],
  variant: TEXT_INPUT_VARIANTS[0],
  disabled: false,
  required: false,
  readOnly: false,
  autoComplete: 'off',
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
      onKeyDown,
      defaultValue,
      disabled,
      readOnly,
      className,
      maxLength,
      icon,
      variant,
      autoComplete,
      ...props
    },
    ref
  ) => {
    const uuid = useId();

    const variantProps = useMemo(() => {
      const vprops = {
        variant,
      };

      if (variant === TEXT_INPUT_VARIANTS[1]) {
        vprops.onFocus = () => {
          vprops.variant = TEXT_INPUT_VARIANTS[0];
        };

        vprops.onBlur = () => {
          vprops.variant = TEXT_INPUT_VARIANTS[1];
          if (isFunction(onBlur)) onBlur();
        };
      }

      return vprops;
    }, [variant]);

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
            icon={icon}
            disabled={disabled}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            {...variantProps}
            onChange={(e) => onChange(e.target.value)}
            defaultValue={defaultValue}
            value={value || ''}
            placeholder={placeholder}
            rightSection={rightSection}
            invalid={!isEmpty(error)}
            className={className}
            maxLength={maxLength}
            autoComplete={autoComplete}
          />
        )}
      </InputWrapper>
    );
  }
);

TextInput.defaultProps = TEXT_INPUT_DEFAULT_PROPS;
TextInput.propTypes = TEXT_INPUT_PROP_TYPES;

export { TextInput };

import React from 'react';
import PropTypes from 'prop-types';
import { clone, isDate, isString } from 'lodash';
import { DatePicker, NumberInput, PasswordInput, TextInput } from '@bubbles-ui/components';

function validateProps(props) {
  if (!props.id) {
    throw new Error(`no id for props ${JSON.stringify(props)}`);
  }
}

function getInputProps(props) {
  const { options, schema, ...inputProps } = props;

  if (options.inputType) {
    inputProps.type = options.inputType;
  } else if (!inputProps.type) {
    if (schema.type === 'number') {
      inputProps.type = 'number';
      inputProps.step = 'any';
    } else if (schema.type === 'integer') {
      inputProps.type = 'number';
      inputProps.step = '1';
    } else {
      inputProps.type = 'text';
    }
  }

  if (options.autocomplete) {
    inputProps.autoComplete = options.autocomplete;
  }

  if (schema.multipleOf) {
    inputProps.step = schema.multipleOf;
  }

  if (typeof schema.minimum !== 'undefined') {
    inputProps.min = schema.minimum;
  }

  if (typeof schema.maximum !== 'undefined') {
    inputProps.max = schema.maximum;
  }

  return inputProps;
}

function handleDateInputProps(inputProps, schema) {
  ['minDate', 'maxDate'].forEach((key) => {
    if (schema[key]) {
      try {
        inputProps[key] = new Date(schema[key]);
      } catch (e) {
        // ignore
      }
      if (!isDate(inputProps[key])) {
        delete inputProps[key];
      }
    }
  });
}

function getInputComponent(inputProps, schema) {
  let Input = null;
  switch (inputProps.type) {
    case 'number':
      Input = NumberInput;
      break;
    case 'date':
      Input = DatePicker;
      handleDateInputProps(inputProps, schema);
      delete inputProps.type;
      break;
    case 'password':
      Input = PasswordInput;
      delete inputProps.type;
      break;
    default:
      Input = TextInput;
  }
  return Input;
}

function handleOnChange(event, finalType, options, value, props) {
  let newVal;
  switch (finalType) {
    case 'number':
      newVal = event;
      break;
    case 'date':
      newVal = event?.toISOString ? event.toISOString() : event;
      break;
    default:
      newVal = event;
  }
  return props.onChange({
    ...value,
    value: newVal === '' ? options.emptyValue : newVal,
  });
}

function BaseInput(props) {
  validateProps(props);

  const { value, readonly, disabled, autofocus, onBlur, onFocus, options, schema, rawErrors } =
    props;

  const inputProps = getInputProps(props);
  const finalType = clone(inputProps.type);

  const _onChange = (event) => handleOnChange(event, finalType, options, value, props);

  const Input = getInputComponent(inputProps, schema);
  let finalValue = value?.value ?? '';

  if (inputProps.type === 'date') {
    finalValue = finalValue ? new Date(finalValue) : undefined;
  }

  return [
    <Input
      {...inputProps}
      key={inputProps.id}
      readOnly={readonly}
      disabled={disabled}
      autoFocus={autofocus}
      help={options.help}
      description={schema.description}
      value={finalValue}
      error={rawErrors ? rawErrors[0] : null}
      list={schema.examples ? `examples_${inputProps.id}` : null}
      onChange={_onChange}
      onBlur={onBlur && ((event) => onBlur(inputProps.id, { ...value, value: event.target.value }))}
      onFocus={
        onFocus && ((event) => onFocus(inputProps.id, { ...value, value: event.target.value }))
      }
    />,
    schema.examples ? (
      <datalist key={`datalist_${inputProps.id}`} id={`examples_${inputProps.id}`}>
        {[...new Set(schema.examples.concat(schema.default ? [schema.default] : []))].map(
          (example) => (
            <option key={example} value={example} />
          ),
        )}
      </datalist>
    ) : null,
  ];
}

BaseInput.defaultProps = {
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false,
};

if (process.env.NODE_ENV !== 'production') {
  BaseInput.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };
}

export default BaseInput;

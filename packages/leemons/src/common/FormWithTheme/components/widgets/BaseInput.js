import React from 'react';
import PropTypes from 'prop-types';
import { clone, isDate } from 'lodash';
import { DatePicker, NumberInput, PasswordInput, TextInput } from '@bubbles-ui/components';

function BaseInput(props) {
  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
  // exclude the "options" and "schema" ones here.
  if (!props.id) {
    throw new Error(`no id for props ${JSON.stringify(props)}`);
  }

  const {
    value,
    readonly,
    disabled,
    autofocus,
    onBlur,
    onFocus,
    options,
    schema,
    uiSchema,
    formContext,
    registry,
    rawErrors,
    ...inputProps
  } = props;

  const help = options.help;
  const description = schema.description;

  // If options.inputType is set use that as the input type
  if (options.inputType) {
    inputProps.type = options.inputType;
  } else if (!inputProps.type) {
    // If the schema is of type number or integer, set the input type to number
    if (schema.type === 'number') {
      inputProps.type = 'number';
      // Setting step to 'any' fixes a bug in Safari where decimals are not
      // allowed in number inputs
      inputProps.step = 'any';
    } else if (schema.type === 'integer') {
      inputProps.type = 'number';
      // Since this is integer, you always want to step up or down in multiples
      // of 1
      inputProps.step = '1';
    } else {
      inputProps.type = 'text';
    }
  }

  if (options.autocomplete) {
    inputProps.autoComplete = options.autocomplete;
  }

  // If multipleOf is defined, use this as the step value. This mainly improves
  // the experience for keyboard users (who can use the up/down KB arrows).
  if (schema.multipleOf) {
    inputProps.step = schema.multipleOf;
  }

  if (typeof schema.minimum !== 'undefined') {
    inputProps.min = schema.minimum;
  }

  if (typeof schema.maximum !== 'undefined') {
    inputProps.max = schema.maximum;
  }

  const finalType = clone(inputProps.type);

  const _onChange = (event) => {
    let newVal;
    switch (finalType) {
      case 'number':
        newVal = event;
        break;
      case 'date':
        newVal = event ? event.toString() : event;
        break;
      default:
        newVal = event;
    }
    return props.onChange({
      ...value,
      value: newVal === '' ? options.emptyValue : newVal,
    });
  };

  let Input = null;
  let finalValue = !value || value.value == null ? '' : value.value;

  switch (inputProps.type) {
    case 'number':
      Input = NumberInput;
      break;
    case 'date':
      Input = DatePicker;
      finalValue = finalValue ? new Date(finalValue) : undefined;
      delete inputProps.type;
      if (schema.minDate || schema.maxDate) {
        try {
          inputProps.minDate = new Date(schema.minDate);
          if (!isDate(inputProps.minDate)) {
            delete inputProps.minDate;
          }
        } catch (e) {}
        try {
          inputProps.maxDate = new Date(schema.maxDate);
          if (!isDate(inputProps.maxDate)) {
            delete inputProps.maxDate;
          }
        } catch (e) {}
      }
      break;
    case 'password':
      Input = PasswordInput;
      delete inputProps.type;
      break;
    default:
      Input = TextInput;
  }

  return [
    <Input
      {...inputProps}
      key={inputProps.id}
      readOnly={readonly}
      disabled={disabled}
      autoFocus={autofocus}
      help={help}
      description={description}
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
          )
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

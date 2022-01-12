import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import { asNumber, guessType } from '../../utils';
import { Select } from '../../../../../form';
import { MultiSelect } from '../../../../../form/MultiSelect';

const nums = new Set(['number', 'integer']);

/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */
function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  const { type, items } = schema;
  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return asNumber(value);
  }

  // If type is undefined, but an enum is present, try and infer the type from
  // the enum values
  if (schema.enum) {
    if (schema.enum.every((x) => guessType(x) === 'number')) {
      return asNumber(value);
    } else if (schema.enum.every((x) => guessType(x) === 'boolean')) {
      return value === 'true';
    }
  }

  return value;
}

function getValue(event, multiple) {
  if (multiple) {
    return [].slice
      .call(event.target.options)
      .filter((o) => o.selected)
      .map((o) => o.value);
  } else {
    return event.target.value;
  }
}

function SelectWidget(props) {
  console.log('SelectWidget', props);
  const {
    id,
    options,
    value,
    schema,
    required,
    disabled,
    readonly,
    multiple,
    autofocus,
    label,
    onChange,
    rawErrors,
    placeholder,
  } = props;

  const { enumOptions, enumDisabled } = options;
  const emptyValue = multiple ? [] : '';

  const help = options.help;
  const description = schema.description;

  const Field = multiple ? MultiSelect : Select;

  return (
    <Field
      id={id}
      value={
        typeof value === 'undefined' ? emptyValue : multiple ? map(value, 'value') : value?.value
      }
      required={required}
      placeholder={placeholder}
      disabled={disabled || readonly}
      help={help}
      description={description}
      autoFocus={autofocus}
      data={enumOptions || []}
      label={label}
      error={rawErrors ? rawErrors[0] : null}
      onChange={(event) => {
        multiple
          ? onChange(map(event, (d) => ({ value: d })))
          : onChange({ ...props.value, value: event });
      }}
    />
  );
}

SelectWidget.defaultProps = {
  autofocus: false,
};

if (process.env.NODE_ENV !== 'production') {
  SelectWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.shape({
      enumOptions: PropTypes.array,
    }).isRequired,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    multiple: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };
}

export default SelectWidget;

import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { Select, MultiSelect } from '@bubbles-ui/components';

function SelectWidget(props) {
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

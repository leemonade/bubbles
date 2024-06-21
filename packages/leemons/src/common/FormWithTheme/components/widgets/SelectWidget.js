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

  const { help } = options;
  const { description } = schema;

  const Field = multiple ? MultiSelect : Select;

  const handleChange = (event) => {
    (() =>
      multiple
        ? onChange(map(event, (d) => ({ value: d })))
        : onChange({ ...props.value, value: event }))();
  };

  const fieldValue = React.useMemo(() => {
    if (typeof value === 'undefined') {
      return emptyValue;
    }
    return multiple ? map(value, 'value') : value?.value;
  }, [value, multiple, emptyValue]);

  return (
    <Field
      id={id}
      value={fieldValue}
      required={required}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readonly}
      help={help}
      description={description}
      autoFocus={autofocus}
      data={enumOptions || []}
      label={label}
      error={rawErrors ? rawErrors[0] : null}
      onChange={handleChange}
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
      enumDisabled: PropTypes.array,
      help: PropTypes.string,
      description: PropTypes.string,
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
    label: PropTypes.string,
    rawErrors: PropTypes.array,
    placeholder: PropTypes.string,
  };
}

export default SelectWidget;

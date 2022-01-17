import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from '../../../../../form';

function CheckboxWidget(props) {
  const {
    schema,
    id,
    value,
    disabled,
    readonly,
    label,
    autofocus,
    rawErrors,
    options,
    onBlur,
    onFocus,
    onChange,
  } = props;

  // Because an unchecked checkbox will cause html5 validation to fail, only add
  // the "required" attribute if the field value must be "true", due to the
  // "const" or "enum" keywords
  const required = schemaRequiresTrueValue(schema);

  const help = options.help;
  const description = schema.description;

  return (
    <Checkbox
      type="checkbox"
      id={id}
      checked={typeof value === 'undefined' ? false : value?.value}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      label={label}
      help={help}
      description={description}
      error={rawErrors ? rawErrors[0] : null}
      onChange={(event) => {
        onChange({ ...value, value: event });
      }}
      onBlur={onBlur && ((event) => onBlur(id, { ...value, value: event.target.checked }))}
      onFocus={onFocus && ((event) => onFocus(id, { ...value, value: event.target.checked }))}
    />
  );
}

CheckboxWidget.defaultProps = {
  autofocus: false,
};

if (process.env.NODE_ENV !== 'production') {
  CheckboxWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };
}

export default CheckboxWidget;
import { schemaRequiresTrueValue } from '../../utils';

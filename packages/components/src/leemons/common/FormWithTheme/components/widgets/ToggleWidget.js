import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from '../../../../../form';

function ToggleWidget(props) {
  const {
    id,
    value,
    readonly,
    required,
    disabled,
    autofocus,
    onBlur,
    onFocus,
    options,
    schema,
    onChange,
    rawErrors,
    label,
  } = props;

  const help = options.help;
  const description = schema.description;

  return (
    <Switch
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
        onChange({ ...value, value: event.target.checked });
      }}
      onBlur={onBlur && ((event) => onBlur(id, { ...value, value: event.target.checked }))}
      onFocus={onFocus && ((event) => onFocus(id, { ...value, value: event.target.checked }))}
    />
  );
}

ToggleWidget.defaultProps = {
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false,
};

if (process.env.NODE_ENV !== 'production') {
  ToggleWidget.propTypes = {
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

export default ToggleWidget;

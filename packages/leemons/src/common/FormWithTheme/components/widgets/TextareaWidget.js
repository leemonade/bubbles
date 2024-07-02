import React from 'react';
import PropTypes from 'prop-types';
import { TextEditorInput } from '@bubbles-ui/editors';

function TextareaWidget(props) {
  const {
    id,
    options,
    placeholder,
    value,
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
    onBlur,
    onFocus,
    label,
    rawErrors,
  } = props;
  const _onChange = (val) =>
    onChange({ ...props.value, value: val === '' ? options.emptyValue : val });

  return (
    <TextEditorInput
      id={id}
      label={label}
      value={value?.value ? value.value : ''}
      error={rawErrors ? rawErrors[0] : null}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      readOnly={readonly}
      autoFocus={autofocus}
      rows={options.rows}
      onBlur={onBlur && ((event) => onBlur(id, event.target.value))}
      onFocus={onFocus && ((event) => onFocus(id, event.target.value))}
      onChange={_onChange}
    />
  );
}

TextareaWidget.defaultProps = {
  autofocus: false,
  options: {},
};

if (process.env.NODE_ENV !== 'production') {
  TextareaWidget.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.shape({
      rows: PropTypes.number,
      emptyValue: PropTypes.string,
    }),
    value: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    label: PropTypes.string,
    rawErrors: PropTypes.array,
  };
}

export default TextareaWidget;

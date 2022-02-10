import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { RadioGroup } from '@bubbles-ui/components';

function RadioWidget(props) {
  const {
    schema,
    id,
    disabled,
    options,
    value,
    readonly,
    onChange,
    rawErrors,
    label,
    placeholder,
  } = props;
  const { enumOptions, enumDisabled, inline } = options;

  const help = options.help;
  const description = schema.description;

  const data = map(enumOptions, (option) => {
    const itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    const disabledCls = disabled || itemDisabled || readonly ? 'disabled' : '';
    const checked = value && value.value === option.value;
    return { ...option, checked, disabled: disabledCls };
  });

  return (
    <RadioGroup
      id={id}
      data={data}
      label={label}
      error={rawErrors ? rawErrors[0] : null}
      placeholder={placeholder}
      help={help}
      description={description}
      onChange={(event) => {
        onChange({ ...value, value: event });
      }}
    />
  );
}

RadioWidget.defaultProps = {
  autofocus: false,
};

if (process.env.NODE_ENV !== 'production') {
  RadioWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.shape({
      enumOptions: PropTypes.array,
      inline: PropTypes.bool,
    }).isRequired,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };
}
export default RadioWidget;

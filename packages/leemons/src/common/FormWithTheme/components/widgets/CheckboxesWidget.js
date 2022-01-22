import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { CheckBoxGroup } from '@bubbles-ui/components';

function CheckboxesWidget(props) {
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
  const values = map(value, 'value');

  const data = map(enumOptions, (option) => {
    const itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    const disabledCls = disabled || itemDisabled || readonly ? 'disabled' : '';
    const checked = values.indexOf(option.value) !== -1;
    return { ...option, checked, disabled: disabledCls };
  });

  return (
    <CheckBoxGroup
      id={id}
      data={data}
      label={label}
      error={rawErrors ? rawErrors[0] : null}
      placeholder={placeholder}
      help={help}
      description={description}
      onChange={(event) => {
        onChange(map(event, (d) => ({ value: d })));
      }}
    />
  );
}

CheckboxesWidget.defaultProps = {
  autofocus: false,
  options: {
    inline: false,
  },
};

if (process.env.NODE_ENV !== 'production') {
  CheckboxesWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.shape({
      enumOptions: PropTypes.array,
      inline: PropTypes.bool,
    }).isRequired,
    value: PropTypes.any,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };
}

export default CheckboxesWidget;

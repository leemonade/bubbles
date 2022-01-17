import { Textarea, TextInput } from '../../../../../../form';
import { ListInput } from '../../../../../../form/ListInput';
import React from 'react';

const ListField = (props) => {
  const {
    options,
    uiSchema,
    schema,
    readonly,
    canAdd,
    formData,
    disabled,
    rawErrors,
    required,
    title,
    onChange,
  } = props;

  const help = options?.help;

  const config = {
    inputRender: (props) => {
      return <TextInput {...props} />;
    },
  };

  if (schema.frontConfig.blockData.listType === 'textarea') {
    config.inputRender = (props) => {
      return <Textarea {...props} />;
    };
  }

  return (
    <>
      <ListInput
        label={uiSchema['ui:title'] || title}
        help={help}
        description={uiSchema['ui:description'] || schema.description}
        required={required}
        readonly={readonly}
        disabled={disabled}
        canAdd={canAdd}
        value={formData}
        error={rawErrors ? rawErrors[0] : null}
        onChange={onChange}
        valueKey="value"
        {...config}
      />
    </>
  );
};

export { ListField };

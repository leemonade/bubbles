import React from 'react';
import { TextEditor } from '@bubbles-ui/editors';
import { ListInput, ListItem } from '@bubbles-ui/components';
import { Box } from '@bubbles-ui/components/src/layout/Box';
import { map } from 'lodash';

const ItemValueRender = ({ item }) => {
  return <Box sx={() => ({ width: '100%' })} dangerouslySetInnerHTML={{ __html: item.value }} />;
};

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
      const onChange = (value) => {
        console.log('value', value);
        return props.onChange({ ...props.value, value: value === '' ? options.emptyValue : value });
      };
      return <TextEditor {...props} onChange={onChange} />;
    },
  };

  if (schema.frontConfig.blockData.listType === 'textarea') {
    config.inputRender = (props) => {
      const onChange = (value) => {
        console.log('value', value);
        return props.onChange({ ...props.value, value: value === '' ? options.emptyValue : value });
      };
      return <TextEditor {...props} onChange={onChange} />;
    };
  }

  function _onChange(e) {
    onChange(map(e, 'value'));
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
        value={map(formData, (item) => ({ value: item }))}
        listRender={(e) => <ListItem {...e} itemValueRender={ItemValueRender} />}
        error={rawErrors ? rawErrors[0] : null}
        onChange={_onChange}
        valueKey="value"
        {...config}
      />
    </>
  );
};

export { ListField };

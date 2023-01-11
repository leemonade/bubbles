import React, { useContext } from 'react';
import { TextEditorInput } from '@bubbles-ui/editors';
import { Box, ListInput, ListItem } from '@bubbles-ui/components';
import { map } from 'lodash';
import { FormContext } from '../../../FormContext';

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
  const { t } = useContext(FormContext);

  const help = options?.help;

  const config = {
    inputRender: (props) => {
      const onChange = (value) => {
        return props.onChange({ ...props.value, value: value === '' ? options.emptyValue : value });
      };
      return <TextEditorInput {...props} value={props?.value?.value} onChange={onChange} />;
    },
  };

  if (schema.frontConfig.blockData.listType === 'textarea') {
    config.inputRender = (props) => {
      const onChange = (value) => {
        return props.onChange({ ...props.value, value: value === '' ? options.emptyValue : value });
      };
      return <TextEditorInput {...props} value={props?.value?.value} onChange={onChange} />;
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
        addButtonLabel={t('add')}
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

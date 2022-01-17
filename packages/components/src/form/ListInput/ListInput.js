import React, { useEffect, useState } from 'react';
import uuidv4 from 'uuid/v4';
import { forEach, map } from 'lodash';
import { Box } from '@mantine/core';
import { ListInputStyles } from './ListInput.styles';
import { InputWrapper } from '../InputWrapper';
import { useId } from '@mantine/hooks';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { SortableList } from '../../informative';
import { Paragraph } from '../../typography';

export const LIST_INPUT_DEFAULT_PROPS = {
  inputRender: ({ value, onChange }) => {
    return <TextInput value={value} onChange={(event) => onChange(event.target.value)} />;
  },
  listRender: ({ value }) => {
    return (
      <Box
        sx={(theme) => ({ flex: 1, paddingLeft: theme.spacing[4], paddingRight: theme.spacing[4] })}
      >
        <Paragraph>{value.value}</Paragraph>
      </Box>
    );
  },
  onChange: () => {},
  valueKey: 'value',
};
export const LIST_INPUT_PROP_TYPES = {};

const ListInput = ({
  label,
  description,
  help,
  error,
  size,
  valueKey,
  inputRender: InputRender,
  listRender: ListRender,
  required,
  readonly,
  disabled,
  canAdd,
  value: originalValue,
  onChange,
}) => {
  const { classes, cx } = ListInputStyles({});

  const [value, setValue] = useState(originalValue || []);

  useEffect(() => {
    onChange(map(value, ({ __key, ...props }) => ({ ...props })));
  }, [value]);

  useEffect(() => {
    console.log('originalValue change');
    let set = true;
    if (!originalValue) set = false;
    if (set && originalValue.length === value.length) set = false;
    if (!set) {
      forEach(originalValue, (val, index) => {
        if (originalValue) {
          set = true;
          return false;
        }
      });
    }
    if (set) {
      console.log('Seteamos alor');
      setValue(originalValue);
    }
  }, [originalValue]);

  const [activeItem, setActiveItem] = useState({ [valueKey]: '' });
  const uuid = useId();

  function addItem() {
    const __key = uuidv4();
    setValue([
      ...value,
      {
        ...activeItem,
        __key,
      },
    ]);
    setActiveItem({ [valueKey]: '' });
  }

  function onEdit() {}

  return (
    <InputWrapper
      label={label}
      description={description}
      help={help}
      uuid={uuid}
      size={size}
      error={error}
      required={required}
    >
      <SortableList
        sortable={true}
        removable={true}
        editable={true}
        value={['wefwef', 'ergerg', 'trhrth']}
        onChange={setValue}
        onEdit={onEdit}
      />
      {canAdd ? (
        <Box>
          <InputRender
            value={valueKey ? activeItem[valueKey] : activeItem}
            onChange={(event) => {
              setActiveItem(valueKey ? { ...activeItem, [valueKey]: event } : event);
            }}
          />
          <Button size="xs" onClick={addItem}>
            Add
          </Button>
        </Box>
      ) : null}
    </InputWrapper>
  );
};

ListInput.defaultProps = LIST_INPUT_DEFAULT_PROPS;
ListInput.propTypes = LIST_INPUT_PROP_TYPES;

export { ListInput };

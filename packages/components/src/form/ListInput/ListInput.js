import React, { useEffect, useState } from 'react';
import uuidv4 from 'uuid/v4';
import { findIndex, map } from 'lodash';
import { Box } from '@mantine/core';
import { ListInputStyles } from './ListInput.styles';
import { InputWrapper } from '../InputWrapper';
import { useId } from '@mantine/hooks';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { SortableList } from '../../informative';
import { ListItem } from './components/ListItem';

export const LIST_INPUT_DEFAULT_PROPS = {
  inputRender: (props) => {
    return <TextInput {...props} />;
  },
  listRender: ListItem,
  onChange: () => {},
  valueKey: 'value',
  addButtonLabel: 'Add',
  errorRequiredMessage: 'Required',
};
export const LIST_INPUT_PROP_TYPES = {};

const ListInput = ({
  label,
  description,
  addButtonLabel,
  errorRequiredMessage,
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

  const [hasError, setHasError] = useState(false);
  const [editingKey, setEditingKey] = useState(null);
  const [activeItem, setActiveItem] = useState({ [valueKey]: '' });
  const [value, _setValue] = useState(
    originalValue
      ? map(originalValue, (item) => ({
          ...item,
          __key: uuidv4(),
        }))
      : []
  );

  const uuid = useId();

  function setValue(newValue, fromParent = false) {
    _setValue(newValue);
    if (!fromParent) onChange(map(newValue, ({ __key, ...props }) => ({ ...props })));
  }

  function addItem() {
    if (activeItem[valueKey]) {
      const __key = uuidv4();
      setValue([
        ...value,
        {
          ...activeItem,
          __key,
        },
      ]);
      setActiveItem({ [valueKey]: '' });
      setHasError(false);
    } else {
      setHasError(true);
    }
  }

  function editItem(item) {
    setEditingKey(item.__key);
  }

  useEffect(() => {
    setValue(
      map(originalValue, (item) => ({
        ...item,
        __key: uuidv4(),
      })),
      true
    );
  }, [originalValue]);

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
      <Box>
        <SortableList
          value={value}
          onChange={setValue}
          dragDisabled={!!editingKey}
          itemRender={(props) => {
            return (
              <ListRender
                {...props}
                inputRender={InputRender}
                editingKey={editingKey}
                valueKey={valueKey}
                errorRequiredMessage={errorRequiredMessage}
                editItem={() => editItem(props.item)}
                stopEdit={() => setEditingKey(null)}
                onChange={(event) => {
                  const index = findIndex(value, { __key: props.item.__key });
                  value[index][valueKey] = event;
                  setValue([...value]);
                  setEditingKey(null);
                }}
              />
            );
          }}
        />
      </Box>
      {canAdd ? (
        <Box>
          <InputRender
            value={valueKey ? activeItem[valueKey] : activeItem}
            onChange={(event) => {
              setActiveItem(valueKey ? { ...activeItem, [valueKey]: event } : event);
              if (event) setHasError(false);
            }}
            required={true}
            error={hasError ? errorRequiredMessage : null}
          />
          <Button size="xs" onClick={addItem}>
            {addButtonLabel}
          </Button>
        </Box>
      ) : null}
    </InputWrapper>
  );
};

ListInput.defaultProps = LIST_INPUT_DEFAULT_PROPS;
ListInput.propTypes = LIST_INPUT_PROP_TYPES;

export { ListInput };

import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { findIndex, isFunction, map } from 'lodash';
import { AddCircleIcon } from '@bubbles-ui/icons/outline';
import { Box } from '../../layout';
import { ListInputStyles } from './ListInput.styles';
import { InputWrapper } from '../InputWrapper';
import { useId } from '@mantine/hooks';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { SortableList } from '../../informative';
import { ListItem } from './components/ListItem';

export const LIST_INPUT_DEFAULT_PROPS = {
  inputRender: (props) => {
    return <TextInput {...props} style={{ flex: 1 }} />;
  },
  listRender: <ListItem />,
  onChange: () => {},
  valueKey: 'value',
  addButtonLabel: 'Add',
  errorRequiredMessage: 'Required',
  hideAddButton: false,
  useAria: true,
};
export const LIST_INPUT_PROP_TYPES = {
  hideAddButton: PropTypes.bool,
  useAria: PropTypes.bool,
};

const ListInput = ({
  label,
  description,
  addButtonLabel,
  errorRequiredMessage,
  help,
  error,
  size,
  valueKey,
  inputRender: IInputRender,
  listRender: LListRender,
  required,
  readonly,
  disabled,
  canAdd,
  hideAddButton,
  value: originalValue,
  onChange,
  useAria,
}) => {
  const { classes, cx } = ListInputStyles({});

  const isCustomInputRender = isFunction(IInputRender);
  const InputRender = isCustomInputRender ? <IInputRender /> : IInputRender;
  const ListRender = isFunction(LListRender) ? <LListRender /> : LListRender;

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
            return React.cloneElement(ListRender, {
              ...props,
              readonly,
              inputRender: InputRender,
              editingKey,
              valueKey,
              errorRequiredMessage,
              editItem: () => editItem(props.item),
              stopEdit: () => setEditingKey(null),
              onChange: (event) => {
                const index = findIndex(value, { __key: props.item.__key });
                value[index][valueKey] = event;
                setValue([...value]);
                setEditingKey(null);
              },
            });
          }}
          useAria={useAria}
        />
      </Box>
      {canAdd && !readonly ? (
        <Box
          sx={(theme) =>
            !hideAddButton
              ? {
                  display: 'flex',
                  flexDirection: 'row',
                  gap: theme.spacing[4],
                  width: '100%',
                  flex: 1,
                }
              : {}
          }
        >
          <Box style={{ width: '100%' }}>
            {React.cloneElement(InputRender, {
              value: valueKey ? activeItem[valueKey] : activeItem,
              onChange: (event) => {
                setActiveItem(valueKey ? { ...activeItem, [valueKey]: event } : event);
                if (event) setHasError(false);
              },
              required: true,
              error: hasError ? errorRequiredMessage : null,
              addItem,
            })}
          </Box>
          {!hideAddButton ? (
            <Box style={{ flex: 0 }}>
              <Button variant="light" size="sm" leftIcon={<AddCircleIcon />} onClick={addItem}>
                {addButtonLabel}
              </Button>
            </Box>
          ) : null}
        </Box>
      ) : null}
    </InputWrapper>
  );
};

ListInput.defaultProps = LIST_INPUT_DEFAULT_PROPS;
ListInput.propTypes = LIST_INPUT_PROP_TYPES;

export { ListInput };

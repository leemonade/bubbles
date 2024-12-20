import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { findIndex, isFunction, map } from 'lodash';
import { AddCircleIcon } from '@bubbles-ui/icons/solid';
import { useId } from '@mantine/hooks';
import { Box } from '../../layout';
import { ListInputStyles } from './ListInput.styles';
import { InputWrapper } from '../InputWrapper';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { SortableList } from '../../informative';
import { ListItem, ItemWrapperWithBorder } from './components/ListItem';

export const LIST_INPUT_DEFAULT_PROPS = {
  inputRender: (props) => <TextInput {...props} style={{ flex: 1 }} />,
  listRender: <ListItem />,
  onChange: () => {},
  valueKey: 'value',
  addButtonLabel: 'Add',
  errorRequiredMessage: 'Required',
  hideAddButton: false,
  useAria: true,
  hideInput: false,
  withItemBorder: false,
  withInputBorder: false,
};
export const LIST_INPUT_PROP_TYPES = {
  hideAddButton: PropTypes.bool,
  useAria: PropTypes.bool,
  valueKey: PropTypes.string,
  addButtonLabel: PropTypes.string,
  errorRequiredMessage: PropTypes.string,
  inputRender: PropTypes.func,
  listRender: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  readonly: PropTypes.bool,
  disabled: PropTypes.bool,
  canAdd: PropTypes.bool,
  size: PropTypes.any,
  value: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  help: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  hideInput: PropTypes.bool,
  withItemBorder: PropTypes.bool,
  withInputBorder: PropTypes.bool,
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
  hideInput,
  withItemBorder,
  withInputBorder,
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
      : [],
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
      true,
    );
  }, [originalValue]);

  useEffect(() => {
    if (
      !value.find((item) => item.__key === editingKey) &&
      editingKey !== null &&
      value.length > 0
    ) {
      setEditingKey(null);
    }
  }, [value]);

  const ListInputWrapper = withInputBorder ? ItemWrapperWithBorder : React.Fragment;

  return (
    <InputWrapper
      label={label}
      description={description}
      help={help}
      uuid={uuid}
      size={size}
      error={error}
      required={required}
      readOnly={readonly}
    >
      <Box>
        <SortableList
          value={value}
          onChange={setValue}
          dragDisabled={!!editingKey}
          itemRender={(itemProps) =>
            React.cloneElement(ListRender, {
              ...itemProps,
              readonly,
              withBorder: withItemBorder,
              inputRender: InputRender,
              editingKey,
              valueKey,
              errorRequiredMessage,
              editItem: () => editItem(itemProps.item),
              stopEdit: () => setEditingKey(null),
              onChange: (event) => {
                const index = findIndex(value, { __key: itemProps.item.__key });
                value[index][valueKey] = event;
                setValue([...value]);
                setEditingKey(null);
              },
            })
          }
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
                  gap: theme.spacing[2],
                  width: '100%',
                  flex: 1,
                }
              : {}
          }
        >
          {hideInput ? null : (
            <ListInputWrapper>
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
                <Box style={{ flex: 0, textAlign: 'right' }}>
                  <Button variant="link" leftIcon={<AddCircleIcon />} onClick={addItem}>
                    {addButtonLabel}
                  </Button>
                </Box>
              ) : null}
            </ListInputWrapper>
          )}
        </Box>
      ) : null}
    </InputWrapper>
  );
};

ListInput.defaultProps = LIST_INPUT_DEFAULT_PROPS;
ListInput.propTypes = LIST_INPUT_PROP_TYPES;

export { ListInput };

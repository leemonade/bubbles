import React, { useEffect, useMemo, useState } from 'react';
import update from 'immutability-helper';
import { map, forEach, isEmpty, isFunction, noop } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { Box } from '../../layout/Box';
import { InputError } from '../InputError';
import { TableInputDisplay } from './TableInputDisplay';
import { TABLE_INPUT_DEFAULT_PROPS, TABLE_INPUT_PROP_TYPES } from './TableInput.constants';
import { TableInputStyles } from './TableInput.styles';

// ----------------------------------------------------------------
// HELP FUNCTIONS

function serializeItem(value) {
  return { tableInputRowId: uuidv4(), ...value };
}

function serializeData(data) {
  return data.map((value) => serializeItem(value));
}

function deserializeData(data) {
  return data.map((item) => {
    const { tableInputRowId, ...value } = item;
    return value;
  });
}

// ----------------------------------------------------------------
// COMPONENT

const TableInput = ({
  data,
  form: formProp,
  error,
  unique,
  showHeaders,
  forceShowInputs,
  resetOnAdd,
  rowsExpanded,
  rowStyles,
  onChange = noop,
  onChangeData = noop,
  onBeforeRemove = noop,
  onBeforeAdd = noop,
  onAdd = noop,
  onUpdate = noop,
  onRemove = noop,
  onItemAdd = noop,
  onSort = noop,
  renderRowSubComponent = noop,
  disabled,
  isOneInput,
  actionLabel,
  ...props
}) => {
  const [tableData, setTableData] = useState([]);
  const hasError = useMemo(() => !isEmpty(error), [error]);

  const form = formProp ?? useForm();

  useEffect(() => {
    const newData = serializeData(data);
    setTableData(newData);
  }, [data]);

  // ··················
  // HANDLERS

  const handleOnChange = (newData, event) => {
    setTableData(newData);
    if (isFunction(onChangeData)) onChangeData(deserializeData(newData), event);
    if (isFunction(onChange)) onChange(deserializeData(newData), event);
  };

  const parseItem = (item) => {
    const result = {};
    forEach(props.columns, ({ accessor }) => {
      result[accessor] = item[accessor];
    });
    return result;
  };

  const handleOnAdd = async (item) => {
    if (unique) {
      const values = map(tableData, (d) => JSON.stringify(parseItem(d)));
      if (values.includes(JSON.stringify(parseItem(item)))) {
        return;
      }
    }
    let canAdd = true;
    if (isFunction(onBeforeAdd)) {
      const result = await onBeforeAdd(item);
      canAdd = !(result === false);
    }
    if (canAdd) {
      const newData = update(tableData, { $push: [serializeItem(item)] });
      onAdd(serializeItem(item));
      handleOnChange(newData, { type: 'add' });
    }
  };

  React.useEffect(() => {
    if (form.formState.isSubmitSuccessful && resetOnAdd) {
      form.reset();
    }
  }, [form.formState, form.reset]);

  const handleOnEdit = (newItem, index) => {
    const newData = [...tableData];
    const oldItem = newData[index];
    newData[index] = { ...oldItem, ...newItem };
    onUpdate({ oldItem, newItem, index });
    handleOnChange(newData, { type: 'edit', index, newItem, oldItem });
  };

  const handleOnRemove = async (index) => {
    let canRemove = true;
    if (isFunction(onBeforeRemove)) {
      const result = await onBeforeRemove(tableData[index]);
      canRemove = !(result === false);
    }
    if (canRemove) {
      tableData.splice(index, 1);
      onRemove(index);
      handleOnChange([...tableData], { type: 'remove' });
    }
  };

  const handleOnSort = (from, to) => {
    const record = tableData[from];
    const newData = update(tableData, {
      $splice: [
        [from, 1],
        [to, 0, record],
      ],
    });
    onSort({ from, to });
    handleOnChange(newData, { type: 'sort' });
  };

  const { classes, cx } = TableInputStyles(
    { hasError, disabled, rowStyles, isOneInput },
    { name: 'TableInput' },
  );

  return (
    <Box>
      <Box className={classes.wrapper}>
        <TableInputDisplay
          {...props}
          disabled={disabled}
          isOneInput={isOneInput}
          form={form}
          rowStyles={rowStyles}
          data={tableData}
          onAdd={handleOnAdd}
          onRemove={handleOnRemove}
          onItemAdd={onItemAdd}
          onEdit={handleOnEdit}
          onSort={handleOnSort}
          rowsExpanded={rowsExpanded}
          showHeaders={showHeaders}
          forceShowInputs={forceShowInputs}
          classes={classes}
          renderRowSubComponent={renderRowSubComponent}
          actionLabel={actionLabel}
        />
      </Box>
      {hasError && <InputError message={error} />}
    </Box>
  );
};

TableInput.defaultProps = TABLE_INPUT_DEFAULT_PROPS;
TableInput.propTypes = TABLE_INPUT_PROP_TYPES;

export { TableInput };

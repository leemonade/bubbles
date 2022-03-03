import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { find, isFunction } from 'lodash';
import { useTable } from 'react-table';
import { Controller, useForm } from 'react-hook-form';
import { AddCircleIcon } from '@bubbles-ui/icons/outline';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Text } from '../../typography/Text';
import { TableStyles } from '../../informative/Table/Table.styles';
import { TABLE_INPUT_DEFAULT_PROPS, TABLE_INPUT_PROP_TYPES } from './TableInput.constants';
import { Button } from '../Button';
import { TableInputRow } from './TableInputRow';

export const TABLE_INPUT_DISPLAY_DEFAULT_PROPS = {
  ...TABLE_INPUT_DEFAULT_PROPS,
  onAdd: () => {},
  onRemove: () => {},
  classes: {},
};
export const TABLE_INPUT_DISPLAY_PROP_TYPES = {
  ...TABLE_INPUT_PROP_TYPES,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  classes: PropTypes.any,
};

const TableInputDisplay = ({
  labels,
  columns,
  form,
  data,
  onAdd,
  onRemove,
  onSort,
  onEdit,
  sortable,
  editable,
  removable,
  disabled,
  disabledAddButton,
  classes,
  onChangeRow = () => {},
}) => {
  const [editing, setEditing] = useState(false);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  let _form = form;

  if (!_form) {
    _form = useForm();
  }
  const {
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = _form;

  const formValues = watch();

  const { classes: tableClasses, cx } = TableStyles({}, { name: 'Table' });

  const getColumnInput = useCallback(
    (accessor) => {
      if (disabled) {
        return null;
      }

      const column = find(columns, { accessor });
      if (column && column.input) {
        const { node, rules, ...inputProps } = column.input;
        return (
          <Controller
            control={control}
            name={accessor}
            rules={rules}
            render={({ field }) =>
              React.cloneElement(node, {
                placeholder: column.Header,
                ...field,
                ...inputProps,
                formValues,
                error: errors[accessor],
                form,
              })
            }
          />
        );
      }

      return null;
    },
    [columns, disabled, errors, formValues]
  );

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (isFunction(onSort)) onSort(source.index, destination.index);
  };

  const handleOnAdd = async () => {
    const result = await trigger();
    if (result) {
      handleSubmit(onAdd)();
    }
  };

  return (
    <table
      {...getTableProps({
        className: tableClasses.root,
      })}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps({})}>
            {sortable && !disabled && <th style={{ width: 20 }}></th>}
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps({
                  className: cx(tableClasses.th, column.className),
                  style: { ...column.style, paddingLeft: 0 },
                })}
              >
                <Text size="xs" role="productive" color="primary" strong>
                  {column.render('Header')}
                </Text>
              </th>
            ))}
            <th style={{ width: '1%' }}></th>
          </tr>
        ))}

        <tr className={rows.length > 0 ? tableClasses.tr : ''}>
          {sortable && !disabled && <th></th>}
          {columns.map((column, i) => (
            <th
              key={`in-${i}`}
              className={cx(tableClasses.td, classes.inputCell)}
              style={{ paddingLeft: 0 }}
            >
              {getColumnInput(column.accessor)}
            </th>
          ))}
          <th
            className={cx(tableClasses.td, classes.inputCell)}
            style={{ paddingLeft: 0, paddingBottom: 4 }}
          >
            {!disabled && (
              <Button
                variant="light"
                size="sm"
                disabled={disabledAddButton}
                leftIcon={<AddCircleIcon />}
                onClick={handleOnAdd}
              >
                {labels.add}
              </Button>
            )}
          </th>
        </tr>
      </thead>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="table-body">
          {(provided, snapshot) => (
            <tbody ref={provided.innerRef} {...provided.droppableProps} {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <TableInputRow
                    {...row.getRowProps()}
                    index={i}
                    row={row}
                    labels={labels}
                    onRemove={onRemove}
                    classes={classes}
                    tableClasses={tableClasses}
                    cx={cx}
                    totalRows={rows.length}
                    sortable={sortable && !disabled}
                    editable={editable && !disabled}
                    removable={removable && !disabled}
                    disabled={disabled}
                    editing={editing}
                    onEditing={setEditing}
                    onEdit={onEdit}
                    onChangeRow={onChangeRow}
                  />
                );
              })}
              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    </table>
  );
};

TableInputDisplay.defaultProps = TABLE_INPUT_DISPLAY_DEFAULT_PROPS;
TableInputDisplay.propTypes = TABLE_INPUT_DISPLAY_PROP_TYPES;

export { TableInputDisplay };

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { find, isFunction } from 'lodash';
import { useTable, useExpanded } from 'react-table';
import { Controller } from 'react-hook-form';
import { AddIcon } from '@bubbles-ui/icons/outline';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Text } from '../../typography/Text';
import { TableStyles } from '../../informative/Table/Table.styles';
import { TABLE_INPUT_DEFAULT_PROPS, TABLE_INPUT_PROP_TYPES } from './TableInput.constants';
import { Button } from '../Button';
import { TableInputRow } from './TableInputRow';
import { ActionButton } from '../ActionButton';

export const TABLE_INPUT_DISPLAY_DEFAULT_PROPS = {
  ...TABLE_INPUT_DEFAULT_PROPS,
  onAdd: () => {},
  onRemove: () => {},
  classes: {},
  showHeaders: true,
};
export const TABLE_INPUT_DISPLAY_PROP_TYPES = {
  ...TABLE_INPUT_PROP_TYPES,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onItemAdd: PropTypes.func,
  classes: PropTypes.any,
  showHeaders: PropTypes.bool,
};

const TableInputDisplay = ({
  labels,
  columns,
  form,
  data,
  onAdd,
  onRemove,
  onItemAdd,
  onSort,
  onEdit,
  sortable,
  forceSortable,
  editable,
  addable,
  removable,
  disabled,
  disabledAddButton,
  showHeaders,
  forceShowInputs,
  rowsExpanded,
  rowStyles,
  classes,
  onChangeRow = () => {},
  renderRowSubComponent = () => {},
}) => {
  const [editing, setEditing] = useState(false);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, visibleColumns } =
    useTable({
      columns,
      data,
    });

  const {
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = form;

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
      <thead className={classes.tHead}>
        {!!showHeaders &&
          headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps({})}>
              {(sortable && !disabled) || forceSortable ? <th style={{ width: 20 }}></th> : null}
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
              {!disabled ? <th style={{ width: '1%' }}></th> : null}
            </tr>
          ))}

        {(showHeaders || forceShowInputs) && (
          <tr style={rowStyles} className={rows.length > 0 ? tableClasses.tr : ''}>
            {(sortable && !disabled) || forceSortable ? <th></th> : null}
            {columns.map((column, i) => (
              <th
                key={`in-${i}`}
                className={cx(tableClasses.td, classes.inputCell)}
                style={{ ...column.style, paddingLeft: 0 }}
              >
                {getColumnInput(column.accessor)}
              </th>
            ))}
            <th
              className={cx(tableClasses.td, classes.inputCell)}
              style={{ paddingLeft: 0, paddingBottom: 4 }}
            >
              {!disabled && (
                <ActionButton
                  disabled={disabledAddButton}
                  onClick={handleOnAdd}
                  icon={<AddIcon />}
                />
              )}
            </th>
          </tr>
        )}
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
                    onItemAdd={onItemAdd}
                    classes={classes}
                    tableClasses={tableClasses}
                    cx={cx}
                    totalRows={rows.length}
                    visibleColumns={visibleColumns}
                    rowsExpanded={rowsExpanded}
                    sortable={(sortable && !disabled) || forceSortable}
                    editable={editable && !disabled}
                    addable={addable && !disabled}
                    removable={removable && !disabled}
                    disabled={disabled}
                    editing={editing}
                    onEditing={setEditing}
                    onEdit={onEdit}
                    onChangeRow={onChangeRow}
                    renderRowSubComponent={renderRowSubComponent}
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

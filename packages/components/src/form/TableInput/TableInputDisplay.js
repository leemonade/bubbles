import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { find, isFunction, noop } from 'lodash';
import { useTable } from 'react-table';
import { Controller } from 'react-hook-form';
import { AddIcon } from '@bubbles-ui/icons/outline';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Text } from '../../typography/Text';
import { Box } from '../../layout/Box';
import { TableStyles } from '../../informative/Table/Table.styles';
import { TABLE_INPUT_DEFAULT_PROPS, TABLE_INPUT_PROP_TYPES } from './TableInput.constants';
import { TableInputRow } from './TableInputRow';
import { Button } from '../Button';

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
  renderActionButton: PropTypes.func,
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
  canAdd,
  renderActionButton,
  onChangeRow = noop,
  renderRowSubComponent = noop,
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

  const { classes: tableClasses, cx } = TableStyles({ disabled, canAdd }, { name: 'Table' });

  const getColumnInput = useCallback(
    (accessor) => {
      if (disabled) {
        return null;
      }

      const column = find(columns, { accessor });
      if (column?.input) {
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
    [columns, disabled, errors, formValues],
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
          headerGroups.map((headerGroup, i) => (
            <tr key={`hg-${i}`} {...headerGroup.getHeaderGroupProps({})}>
              {(sortable && !disabled) || forceSortable ? <th style={{ width: 40 }}></th> : null}
              {headerGroup.headers.map((column, j) => (
                <th
                  key={`hgh-${j}`}
                  {...column.getHeaderProps({
                    className: cx(tableClasses.th, column.className),
                    style: {
                      paddingLeft: 0,
                      ...column.style,
                    },
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

        {canAdd && (showHeaders || forceShowInputs) && (
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
              {!disabled && !isFunction(renderActionButton) && (
                <Button variant="link" disabled={disabledAddButton} onClick={handleOnAdd}>
                  <AddIcon />
                </Button>
              )}
              {!disabled &&
                isFunction(renderActionButton) &&
                renderActionButton({ disabled: disabledAddButton, onAdd: handleOnAdd })}
            </th>
          </tr>
        )}
      </thead>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="table-body">
          {(provided, snapshot) => (
            <tbody ref={provided.innerRef} {...provided.droppableProps} {...getTableBodyProps()}>
              {rows.map((row, k) => {
                prepareRow(row);

                return (
                  <TableInputRow
                    key={`row-${k}`}
                    {...row.getRowProps()}
                    index={k}
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

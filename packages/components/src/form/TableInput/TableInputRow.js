import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get, isFunction } from 'lodash';
import {
  CheckIcon,
  DeleteBinIcon,
  DeleteIcon,
  EditWriteIcon,
  AddCircleIcon,
} from '@bubbles-ui/icons/solid';
import { Controller, useForm } from 'react-hook-form';
import { SortDragIcon } from '@bubbles-ui/icons/outline';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '../../layout/Box';
import { TableCell } from '../../informative/Table/TableCell/TableCell';
import { ActionButton } from '../ActionButton';
import { TextInput } from '../TextInput';

const TableInputRow = ({
  labels,
  row,
  index,
  onItemAdd,
  onRemove,
  classes,
  tableClasses,
  visibleColumns,
  cx,
  totalRows,
  sortable,
  editable,
  addable,
  removable,
  disabled,
  rowsExpanded,
  editing: _editing,
  onEditing,
  onEdit,
  renderRowSubComponent = () => {},
  onChangeRow = () => {},
}) => {
  const [editing, setEditing] = useState(false);

  const form = useForm();
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = form;

  React.useEffect(() => {
    const subscription = form.watch((value, ev) => {
      onChangeRow(value, ev, form);
    });
    return () => subscription.unsubscribe();
  });

  const getColumCellValue = (cell) => {
    if (editing && cell.column.editable !== false) {
      const { column, row: _row } = cell;
      const fieldName = `${_row.original.tableInputRowId}.${column.id}`;
      let node = null;
      let rules = [];
      let inputProps = {};

      if (!column.input) {
        node = <TextInput />;
        rules = [];
        inputProps = {};
      } else {
        node = column.input.node;
        rules = column.input.rules;
        const { node: _, rules: __, ..._inputProps } = column.input;
        inputProps = _inputProps;
      }

      return (
        <Box className={classes.inputCell} style={{ paddingTop: 4 }}>
          <Controller
            name={fieldName}
            control={control}
            rules={rules}
            defaultValue={cell.value}
            render={({ field }) =>
              React.cloneElement(node, {
                placeholder: column.Header,
                ...field,
                ...inputProps,
                error: get(errors, fieldName),
                form,
              })
            }
          />
        </Box>
      );
    }
    return <TableCell cell={cell} row={row} form={form} />;
  };

  const cancelEditing = () => {
    setEditing(false);
    if (isFunction(onEditing)) onEditing(false);
  };

  const handleOnEdit = async () => {
    const result = await trigger();
    if (result) {
      handleSubmit((data) => {
        cancelEditing();
        const itemId = row.original.tableInputRowId;
        const item = data[itemId];
        if (isFunction(onEdit)) onEdit(item, index);
      })();
    }
  };

  const initEditing = () => {
    setEditing(true);
    if (isFunction(onEditing)) onEditing(true);
  };

  return (
    <Draggable
      draggableId={row.original.tableInputRowId}
      key={row.original.tableInputRowId}
      index={row.index}
      isDragDisabled={!sortable || _editing}
    >
      {(provided, snapshot) => (
        <>
          <tr
            {...row.getRowProps({
              className: cx(classes.row, {
                [tableClasses.tr]: index < totalRows - 1,
                [classes.rowDragging]: snapshot.isDragging,
              }),
            })}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {sortable && (
              <td>
                <Box
                  className={classes.sortIcon}
                  style={{ paddingLeft: snapshot.isDragging ? 10 : 0 }}
                >
                  <SortDragIcon />
                </Box>
              </td>
            )}
            {row.cells.map((cell, i) => (
              <td
                key={`rc-${i}`}
                style={cell.column.cellTdStyle}
                {...cell.getCellProps({
                  className: tableClasses.td,
                })}
              >
                {getColumCellValue(cell)}
              </td>
            ))}
            <td
              style={{ textAlign: 'right', textWrap: 'nowrap' }}
              className={cx(tableClasses.td, classes.actionCell)}
            >
              {editing ? (
                <>
                  <ActionButton
                    icon={<CheckIcon />}
                    tooltip={labels.accept || 'Accept'}
                    onClick={handleOnEdit}
                  />
                  <ActionButton
                    icon={<DeleteIcon />}
                    tooltip={labels.cancel || 'Cancel'}
                    onClick={cancelEditing}
                  />
                </>
              ) : (
                row.original.editable !== false && (
                  <>
                    {addable && (
                      <ActionButton
                        icon={<AddCircleIcon />}
                        tooltip={labels.add || 'Add'}
                        onClick={() => onItemAdd(row)}
                      />
                    )}
                    {editable && (
                      <ActionButton
                        icon={<EditWriteIcon />}
                        tooltip={labels.edit || 'Edit'}
                        onClick={initEditing}
                      />
                    )}
                    {removable && (
                      <ActionButton
                        icon={<DeleteBinIcon />}
                        tooltip={labels.remove || 'Remove'}
                        onClick={() => onRemove(index)}
                      />
                    )}
                  </>
                )
              )}
            </td>
          </tr>
          {rowsExpanded?.includes(row.id) ? (
            <tr>
              <td colSpan={visibleColumns.length + 1 + (sortable ? 1 : 0)}>
                {renderRowSubComponent({ row })}
              </td>
            </tr>
          ) : null}
        </>
      )}
    </Draggable>
  );
};

TableInputRow.propTypes = {
  labels: PropTypes.object,
  row: PropTypes.object,
  index: PropTypes.number,
  onItemAdd: PropTypes.func,
  onRemove: PropTypes.func,
  classes: PropTypes.object,
  tableClasses: PropTypes.object,
  visibleColumns: PropTypes.array,
  cx: PropTypes.func,
  totalRows: PropTypes.number,
  sortable: PropTypes.bool,
  editable: PropTypes.bool,
  addable: PropTypes.bool,
  removable: PropTypes.bool,
  disabled: PropTypes.bool,
  rowsExpanded: PropTypes.array,
  editing: PropTypes.bool,
  onEditing: PropTypes.func,
  onEdit: PropTypes.func,
  renderRowSubComponent: PropTypes.func,
  onChangeRow: PropTypes.func,
};

export { TableInputRow };

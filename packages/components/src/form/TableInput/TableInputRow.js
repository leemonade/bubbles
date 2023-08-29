import React, { useState } from 'react';
import { Box } from '../../layout';
import { get, isFunction } from 'lodash';
import { CheckIcon, DeleteBinIcon, DeleteIcon, EditWriteIcon } from '@bubbles-ui/icons/solid';
import { Controller, useForm } from 'react-hook-form';
import { SortDragIcon, AddCircleIcon } from '@bubbles-ui/icons/outline';
import { Draggable } from 'react-beautiful-dnd';
import { TableCell } from '../../informative/Table/TableCell/TableCell';
import { ActionButton, TextInput } from '../../form';

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
      const { column, row } = cell;
      const fieldName = `${row.original.tableInputRowId}.${column.id}`;
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
        let { node: _, rules: __, ..._inputProps } = column.input;
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

  const cancelEditing = () => {
    setEditing(false);
    if (isFunction(onEditing)) onEditing(false);
  };

  return (
    <Draggable
      draggableId={row.original.tableInputRowId}
      key={row.original.tableInputRowId}
      index={row.index}
      isDragDisabled={!sortable || _editing}
    >
      {(provided, snapshot) => {
        return (
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
              {row.cells.map((cell) => (
                <td
                  style={cell.column.cellTdStyle}
                  {...cell.getCellProps({
                    className: tableClasses.td,
                  })}
                >
                  {getColumCellValue(cell)}
                </td>
              ))}
              <td
                style={{ textAlign: 'right' }}
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
        );
      }}
    </Draggable>
  );
};

export { TableInputRow };

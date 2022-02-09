import React, { useState } from 'react';
import { Box } from '@mantine/core';
import { isFunction } from 'lodash';
import { CheckIcon, DeleteBinIcon, DeleteIcon, EditWriteIcon } from '@bubbles-ui/icons/solid';
import { Controller, useForm } from 'react-hook-form';
import { SortDragIcon } from '@bubbles-ui/icons/outline';
import { Draggable } from 'react-beautiful-dnd';
import { TableCell } from '../../informative/Table/TableCell/TableCell';
import { ActionButton, TextInput } from '../../form';

const TableInputRow = ({
  labels,
  row,
  index,
  onRemove,
  classes,
  tableClasses,
  cx,
  totalRows,
  sortable,
  editable,
  removable,
  disabled,
  editing: _editing,
  onEditing,
  onEdit,
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
    if (editing) {
      const { column, row } = cell;
      const fieldName = `${row.original.tableInputRowId}.${column.id}`;
      let { node, rules, ...inputProps } = column.input;

      if (!column.input) {
        node = <TextInput />;
        rules = [];
        inputProps = {};
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
                error: errors[fieldName],
              })
            }
          />
        </Box>
      );
    }
    return <TableCell cell={cell} />;
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
                {...cell.getCellProps({
                  className: tableClasses.td,
                })}
              >
                {getColumCellValue(cell)}
              </td>
            ))}
            <td className={cx(tableClasses.td, classes.actionCell)}>
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
                <>
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
              )}
            </td>
          </tr>
        );
      }}
    </Draggable>
  );
};

export { TableInputRow };

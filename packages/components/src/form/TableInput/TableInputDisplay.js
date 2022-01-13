import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { find } from 'lodash';
import { useTable } from 'react-table';
import { useForm, Controller } from 'react-hook-form';
import { AddCircleIcon } from '@bubbles-ui/icons/outline';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Text } from '../../typography';
import { TableStyles } from '../../informative/Table/Table.styles';
import { TABLE_INPUT_PROP_TYPES, TABLE_INPUT_DEFAULT_PROPS } from './TableInput';
import { Button } from '../../form';
import { TableInputStyles } from './TableInput.styles';
import { TableInputRow } from './TableInputRow';

export const TABLE_INPUT_DISPLAY_DEFAULT_PROPS = {
  ...TABLE_INPUT_DEFAULT_PROPS,
  onAdd: () => {},
  onRemove: () => {},
};
export const TABLE_INPUT_DISPLAY_PROP_TYPES = {
  ...TABLE_INPUT_PROP_TYPES,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

const TableInputDisplay = ({ labels, columns, data, onAdd, onRemove, onSort, sortable }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { classes, cx } = TableInputStyles({ name: 'TableInput' });
  const { classes: tableClasses } = TableStyles({}, { name: 'Table' });

  const getColumnInput = useCallback(
    (accessor) => {
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
                error: errors[accessor],
              })
            }
          />
        );
      }
      return null;
    },
    [columns]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <form onSubmit={handleSubmit(onAdd)}>
        <table
          {...getTableProps({
            className: tableClasses.root,
          })}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps({})}>
                {sortable && <th style={{ width: 20 }}></th>}
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps({
                      className: cx(tableClasses.th, column.className),
                      style: column.style,
                    })}
                  >
                    <Text size="xs" role="productive" color="primary" strong>
                      {column.render('Header')}
                    </Text>
                  </th>
                ))}
                <th></th>
              </tr>
            ))}

            <tr className={tableClasses.tr}>
              {sortable && <th></th>}
              {columns.map((column, i) => (
                <th key={`in-${i}`} className={cx(tableClasses.td, classes.inputCell)}>
                  {getColumnInput(column.accessor)}
                </th>
              ))}
              <th className={cx(tableClasses.td, classes.inputCell)}>
                <Button variant="light" size="sm" leftIcon={<AddCircleIcon />} type="submit">
                  {labels.add}
                </Button>
              </th>
            </tr>
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(
              (row, i) =>
                prepareRow(row) || (
                  <TableInputRow
                    {...row.getRowProps()}
                    index={i}
                    row={row}
                    moveRow={onSort}
                    labels={labels}
                    onRemove={onRemove}
                    classes={classes}
                    tableClasses={tableClasses}
                    cx={cx}
                    totalRows={rows.length}
                    sortable={sortable}
                  />
                )
            )}
          </tbody>
        </table>
      </form>
    </DndProvider>
  );
};

TableInputDisplay.defaultProps = TABLE_INPUT_DISPLAY_DEFAULT_PROPS;
TableInputDisplay.propTypes = TABLE_INPUT_DISPLAY_PROP_TYPES;

export { TableInputDisplay };

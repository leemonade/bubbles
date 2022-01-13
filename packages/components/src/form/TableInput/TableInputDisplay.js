import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { find } from 'lodash';
import { useTable } from 'react-table';
import { useForm, Controller } from 'react-hook-form';
import { AddCircleIcon } from '@bubbles-ui/icons/outline';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid';
import { Text } from '../../typography';
import { TableStyles } from '../../informative/Table/Table.styles';
import { TableCell } from '../../informative/Table/TableCell/TableCell';
import { TABLE_INPUT_PROP_TYPES, TABLE_INPUT_DEFAULT_PROPS } from './TableInput';
import { ActionButton, Button } from '../../form';
import { TableInputStyles } from './TableInput.styles';

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

const TableInputDisplay = ({ labels, columns, data, onAdd, onRemove }) => {
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

  const getColumCellValue = (cell, row, index) => {
    return <TableCell cell={cell} />;
  };

  return (
    <form onSubmit={handleSubmit(onAdd)}>
      <table
        {...getTableProps({
          className: tableClasses.root,
        })}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps({})}>
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
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps({
                  className: cx({ [tableClasses.tr]: i < rows.length - 1 }),
                })}
              >
                {row.cells.map((cell, index) => (
                  <td
                    {...cell.getCellProps({
                      className: tableClasses.td,
                    })}
                  >
                    {getColumCellValue(cell)}
                  </td>
                ))}
                <td className={cx(tableClasses.td, classes.actionCell)}>
                  <ActionButton
                    icon={<DeleteBinIcon />}
                    tooltip={labels.remove}
                    onClick={() => onRemove(i)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
};

TableInputDisplay.defaultProps = TABLE_INPUT_DISPLAY_DEFAULT_PROPS;
TableInputDisplay.propTypes = TABLE_INPUT_DISPLAY_PROP_TYPES;

export { TableInputDisplay };

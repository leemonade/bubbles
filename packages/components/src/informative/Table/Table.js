import React from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { useTable } from 'react-table';
import update from 'immutability-helper';
import { Text } from '../../typography';
import { TableCell } from './TableCell/TableCell';
import { TableStyles } from './Table.styles';

export const TABLE_DEFAULT_PROPS = {
  columns: [],
  data: [],
  useAria: true,
  headerStyles: {},
};
export const TABLE_PROP_TYPES = {
  columns: PropTypes.arrayOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.any),
  onChangeData: PropTypes.func,
  useAria: PropTypes.bool,
  headerStyles: PropTypes.object,
};

const Table = ({
  columns,
  data,
  styleRow,
  onClickRow = () => {},
  onChangeData,
  useAria,
  headerStyles,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const onChangeCell = (oldCell, newCell) => {
    const newData = update(data, {
      [oldCell.row.index]: { [oldCell.column.id]: { $merge: newCell.value } },
    });

    if (isFunction(onChangeData)) {
      onChangeData({
        changedField: oldCell.column.id,
        oldData: data,
        newData,
        oldItem: oldCell.value,
        newItem: newCell.value,
        itemIndex: oldCell.row.index,
      });
    }
  };

  const { classes, cx } = TableStyles({ headerStyles }, { name: 'Table' });

  // Render the UI for your table
  return (
    <table
      {...getTableProps({
        className: classes.root,
      })}
      role={useAria ? 'table' : undefined}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps({
              className: cx(classes.tr, classes.trHeader),
            })}
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps({
                  className: cx(classes.th, column.className),
                  style: column.style,
                })}
              >
                <Text size="xs" role="productive" color="primary" strong>
                  {column.render('Header')}
                </Text>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps({
                className: cx({ [classes.tr]: i < rows.length - 1 }),
              })}
              style={styleRow}
              onClick={() => onClickRow(row)}
            >
              {row.cells.map((cell, index) => {
                return (
                  <td
                    {...cell.getCellProps({
                      className: classes.td,
                    })}
                  >
                    <TableCell cell={cell} onChangeCell={onChangeCell} useAria={useAria} />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.defaultProps = TABLE_DEFAULT_PROPS;
Table.propTypes = TABLE_PROP_TYPES;

export { Table };

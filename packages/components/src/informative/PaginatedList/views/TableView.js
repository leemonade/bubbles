import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../typography';
import { TableStyles } from '../../Table';
import { TableItemRender } from './TableItemRender';

const TABLE_VIEW_DEFAULT_PROPS = {
  itemRender: ({ ...props }) => <TableItemRender {...props} />,
};
const TABLE_VIEW_PROP_TYPES = {
  itemRender: PropTypes.func,
};

const TableView = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  itemRender,
}) => {
  const { classes: tableClasses, cx: tableCx } = TableStyles({}, { name: 'TableView' });
  return (
    <table
      {...getTableProps({
        className: tableClasses.root,
      })}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps({
              className: tableClasses.tr,
            })}
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps({
                  className: tableCx(tableClasses.th, column.className),
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
                className: tableCx({ [tableClasses.tr]: i < rows.length - 1 }),
              })}
            >
              {itemRender && itemRender({ item: row, className: tableClasses.td })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TableView.defaultProps = TABLE_VIEW_DEFAULT_PROPS;
TableView.propTypes = TABLE_VIEW_PROP_TYPES;

export { TableView };

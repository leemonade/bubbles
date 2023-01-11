import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Text } from '../../../typography';
import { TableStyles } from '../../Table';
import { TableItemRender } from './TableItemRender';

const TABLE_VIEW_DEFAULT_PROPS = {
  itemRender: ({ ...props }) => <TableItemRender {...props} />,
  headerStyles: {},
};
const TABLE_VIEW_PROP_TYPES = {
  itemRender: PropTypes.func,
  headerStyles: PropTypes.object,
};

const TableView = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  itemRender,
  onSelect,
  selectable,
  selected,
  headerStyles,
  useAria,
}) => {
  const [currentItem, setCurrentItem] = useState(selected);

  useEffect(() => {
    if (selected?.id !== currentItem?.id) setCurrentItem(selected);
  }, [selected]);

  const handleOnSelect = (item) => {
    if (selectable) {
      setCurrentItem(item);
      if (isFunction(onSelect)) {
        onSelect(item);
      }
    }
  };

  const { classes: tableClasses, cx: tableCx } = TableStyles(
    { headerStyles },
    { name: 'TableView' }
  );
  return (
    <table
      {...getTableProps({
        className: tableClasses.root,
      })}
      role={useAria ? 'table' : undefined}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps({
              className: tableCx(tableClasses.tr, tableClasses.trHeader),
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
          const selected = row.original.id === currentItem?.id;
          return (
            itemRender &&
            itemRender({
              key: `k-${i}`,
              item: row,
              className: tableCx({
                [tableClasses.tr]: i < rows.length - 1,
                [tableClasses.trSelectable]: selectable,
                [tableClasses.trActive]: selected,
              }),
              selected,
              onClick: () => handleOnSelect(row.original),
            })
          );
        })}
      </tbody>
    </table>
  );
};

TableView.defaultProps = TABLE_VIEW_DEFAULT_PROPS;
TableView.propTypes = TABLE_VIEW_PROP_TYPES;

export { TableView };

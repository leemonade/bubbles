import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Text } from '../../../typography';
import { TableStyles } from '../../Table/Table.styles';
import { TableItemRender } from './TableItemRender';

const TABLE_VIEW_DEFAULT_PROPS = {
  itemRender: ({ ...props }) => <TableItemRender {...props} />,
  headerStyles: {},
};
const TABLE_VIEW_PROP_TYPES = {
  itemRender: PropTypes.func,
  headerStyles: PropTypes.object,
  useAria: PropTypes.bool,
  onStyleRow: PropTypes.func,
  selectable: PropTypes.bool,
  selected: PropTypes.object,
  onSelect: PropTypes.func,
  getTableProps: PropTypes.func,
  getTableBodyProps: PropTypes.func,
  headerGroups: PropTypes.array,
  rows: PropTypes.array,
  prepareRow: PropTypes.func,
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
  onStyleRow,
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

  const {
    theme,
    classes: tableClasses,
    cx: tableCx,
  } = TableStyles({ headerStyles }, { name: 'TableView' });
  return (
    <table
      {...getTableProps({
        className: tableClasses.root,
      })}
      role={useAria ? 'table' : undefined}
    >
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr
            key={`hg-${i}`}
            {...headerGroup.getHeaderGroupProps({
              className: tableCx(tableClasses.tr, tableClasses.trHeader),
            })}
          >
            {headerGroup.headers.map((column, j) => (
              <th
                key={`hgh-${j}`}
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
          const isSelected = row.original.id === currentItem?.id;
          return itemRender?.({
            key: `k-${i}`,
            item: row,
            className: tableCx({
              [tableClasses.tr]: i < rows.length - 1,
              [tableClasses.trSelectable]: selectable,
              [tableClasses.trActive]: selectable && isSelected,
            }),
            style: onStyleRow({ row, theme }),
            selected: isSelected,
            onClick: () => handleOnSelect(row.original),
          });
        })}
      </tbody>
    </table>
  );
};

TableView.defaultProps = TABLE_VIEW_DEFAULT_PROPS;
TableView.propTypes = TABLE_VIEW_PROP_TYPES;

export { TableView };

import React from 'react';
import { TableCell } from '../../Table';

const TableItemRender = ({ item, className }) => {
  return item.cells.map((cell, index) => {
    return (
      <td
        key={`item-${index}`}
        {...cell.getCellProps({
          className,
        })}
      >
        <TableCell cell={cell} />
      </td>
    );
  });
};

export { TableItemRender };

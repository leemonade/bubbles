import React from 'react';
import { TableCell } from '../../Table';

const TableItemRender = ({ item, className, selected, ...props }) => {
  return (
    <tr
      {...item.getRowProps({
        className,
      })}
      {...props}
    >
      {item.cells.map((cell, index) => {
        return (
          <td key={`item-${index}`} {...cell.getCellProps({})}>
            <TableCell cell={cell} />
          </td>
        );
      })}
    </tr>
  );
};

export { TableItemRender };

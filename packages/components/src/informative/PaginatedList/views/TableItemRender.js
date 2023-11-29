import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from '../../Table/TableCell/TableCell';

const TableItemRender = ({ item, className, selected, ...props }) => (
  <tr
    {...item.getRowProps({
      className,
    })}
    {...props}
  >
    {item.cells.map((cell, index) => (
      <td key={`item-${index}`} {...cell.getCellProps({})} style={{ verticalAlign: 'middle' }}>
        <TableCell cell={cell} />
      </td>
    ))}
  </tr>
);

TableItemRender.propTypes = {
  item: PropTypes.any,
  className: PropTypes.string,
  selected: PropTypes.bool,
};

export { TableItemRender };

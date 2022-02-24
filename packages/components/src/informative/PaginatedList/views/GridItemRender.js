import React from 'react';
import { Box } from '../../../layout';
import { TableCell } from '../../Table';

const GridItemRender = ({ item, className }) => {
  return item.cells.map((cell, index) => {
    return (
      <Box
        key={`item-${index}`}
        {...cell.getCellProps({
          className,
        })}
      >
        <TableCell cell={cell} />
      </Box>
    );
  });
};

export { GridItemRender };

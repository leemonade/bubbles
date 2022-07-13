import React from 'react';
import { Box } from '../../../layout';
import { TableCell } from '../../Table';

const GridItemRender = ({ item, className, useAria }) => {
  return item.cells.map((cell, index) => {
    return (
      <Box
        key={`item-${index}`}
        {...cell.getCellProps({
          className,
        })}
        role={useAria ? 'row' : undefined}
      >
        <TableCell cell={cell} useAria={useAria} />
      </Box>
    );
  });
};

export { GridItemRender };

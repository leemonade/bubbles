import React from 'react';
import { Box } from '../../../layout/Box';
import { TableCell } from '../../Table/TableCell/TableCell';

const GridItemRender = ({ item, className, useAria }) =>
  item.cells.map((cell, index) => (
    <Box
      key={`item-${index}`}
      {...cell.getCellProps({
        className,
      })}
      role={useAria ? 'row' : undefined}
    >
      <TableCell cell={cell} useAria={useAria} />
    </Box>
  ));

export { GridItemRender };

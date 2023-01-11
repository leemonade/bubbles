import React from 'react';
import { Box } from '../../../layout/Box';

const DroppableDefault = ({ provided, snapshot, children, useAria }) => {
  return (
    <Box {...provided.droppableProps} ref={provided.innerRef} role={useAria ? 'group' : undefined}>
      {children}
    </Box>
  );
};

export { DroppableDefault };

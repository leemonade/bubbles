import React from 'react';
import { Box } from '@mantine/core';

const DroppableDefault = ({ provided, snapshot, children }) => {
  return (
    <Box {...provided.droppableProps} ref={provided.innerRef}>
      {children}
    </Box>
  );
};

export { DroppableDefault };

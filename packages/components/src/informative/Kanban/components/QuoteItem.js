import React from 'react';
import { Box } from '@mantine/core';

const QuoteItem = ({
  value,
  provided,
  isDragging,
  isGroupedOver,
  itemRender: ItemRender,
  ...props
}) => {
  return (
    <Box
      isDragging={isDragging}
      isGroupedOver={isGroupedOver}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      sx={(theme) => ({ marginTop: theme.spacing[2], marginBottom: theme.spacing[2] })}
    >
      <ItemRender isDragging={isDragging} isGroupedOver={isGroupedOver} value={value} />
    </Box>
  );
};

export { QuoteItem };

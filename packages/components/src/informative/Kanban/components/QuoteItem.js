import React from 'react';
import { Box } from '../../../layout/Box';

const QuoteItem = ({ value, provided, isDragging, isGroupedOver, itemRender: ItemRender }) => {
  let props = {};
  if (!value.disableDrag) {
    props = provided.draggableProps;
  }
  return (
    <Box
      isDragging={isDragging}
      isGroupedOver={isGroupedOver}
      ref={provided.innerRef}
      {...props}
      {...provided.dragHandleProps}
      sx={(theme) => ({
        marginTop: theme.spacing[2],
        marginBottom: theme.spacing[2],
        zIndex: 2,
      })}
    >
      <ItemRender isDragging={isDragging} isGroupedOver={isGroupedOver} value={value} />
    </Box>
  );
};

export { QuoteItem };

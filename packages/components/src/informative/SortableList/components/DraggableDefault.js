import React from 'react';
import { Box } from '@mantine/core';
import { ActionButton } from '../../../form';
import { DeleteBinIcon } from '../../../../../icons/solid';
import { SortDragIcon } from '../../../../../icons/outline';

const DraggableDefault = ({ provided, snapshot, item, removeItem }) => {
  return (
    <Box
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      sx={() => ({ display: 'flex', alignItems: 'center' })}
    >
      <Box sx={(theme) => ({ marginRight: theme.spacing[4] })}>
        <ActionButton icon={<SortDragIcon />} onClick={removeItem} />
      </Box>
      <Box sx={() => ({ width: '100%' })}>{item}</Box>
      <ActionButton icon={<DeleteBinIcon />} onClick={removeItem} />
    </Box>
  );
};

export { DraggableDefault };

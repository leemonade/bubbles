import React, { forwardRef } from 'react';
import { Box } from '@mantine/core';
import { ActionButton } from '../../../form';
import { DeleteBinIcon } from '../../../../../icons/solid';
import { SortDragIcon } from '../../../../../icons/outline';

const DraggableDefault = forwardRef(
  ({ provided, snapshot, item, removeItem, classes, useRef }, ref) => {
    return (
      <Box
        ref={(e) => {
          provided.innerRef(e);
          if (ref) ref(e);
          if (useRef) useRef(e);
        }}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        sx={() => ({ display: 'flex', alignItems: 'center' })}
      >
        <Box sx={(theme) => ({ marginRight: theme.spacing[4] })}>
          <SortDragIcon className={classes.sortableIcon} />
        </Box>
        <Box sx={() => ({ width: '100%' })}>{item}</Box>
        <ActionButton icon={<DeleteBinIcon />} onClick={removeItem} />
      </Box>
    );
  }
);

export { DraggableDefault };

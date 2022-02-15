import React, { forwardRef } from 'react';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid';
import { SortDragIcon } from '@bubbles-ui/icons/outline';
import { Box } from '../../../layout';
import { ActionButton } from '../../../form/ActionButton';

const DraggableDefault = forwardRef(({ provided, snapshot, item, removeItem, classes }, ref) => {
  return (
    <Box
      ref={(e) => {
        provided.innerRef(e);
        if (ref) ref(e);
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
});

export { DraggableDefault };

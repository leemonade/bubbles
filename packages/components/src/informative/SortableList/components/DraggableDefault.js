import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid';
import { SortDragIcon } from '@bubbles-ui/icons/outline';
import { Box } from '../../../layout/Box';
import { ActionButton } from '../../../form/ActionButton';

const DraggableDefault = forwardRef(
  ({ provided, item, removeItem, classes, useAria, removeLabel }, ref) => (
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
      <ActionButton
        icon={<DeleteBinIcon />}
        onClick={removeItem}
        tooltip={removeLabel}
        useAria={useAria}
      />
    </Box>
  ),
);

DraggableDefault.displayName = 'DraggableDefault';
DraggableDefault.propTypes = {
  provided: PropTypes.object,
  snapshot: PropTypes.object,
  item: PropTypes.node,
  removeItem: PropTypes.func,
  classes: PropTypes.object,
  useAria: PropTypes.bool,
  removeLabel: PropTypes.string,
};

export { DraggableDefault };

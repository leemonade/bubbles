import React from 'react';
import { Box } from '@mantine/core';
import { KanbanStyles } from '../Kanban.styles';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { QuoteItem } from './QuoteItem';

const InnerQuoteList = ({ value, itemRender }) => {
  return value.map((quote, index) => (
    <Draggable key={quote.id} draggableId={quote.id} index={index} shouldRespectForceTouch={false}>
      {(dragProvided, dragSnapshot) => (
        <QuoteItem
          key={quote.id}
          value={quote}
          isDragging={dragSnapshot.isDragging}
          isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
          provided={dragProvided}
          itemRender={itemRender}
        />
      )}
    </Draggable>
  ));
};

const QuoteList = ({
  value,
  index,
  listId,
  listType,
  ignoreContainerClipping,
  isDropDisabled,
  isCombineEnabled,
  internalScroll,
  itemRender,
  ...props
}) => {
  const { classes, cx } = KanbanStyles({});

  return (
    <Droppable
      droppableId={listId}
      type={listType}
      ignoreContainerClipping={ignoreContainerClipping}
      isDropDisabled={isDropDisabled}
      isCombineEnabled={isCombineEnabled}
    >
      {(dropProvided, dropSnapshot) => (
        <Box
          {...dropProvided.droppableProps}
          className={dropSnapshot.isDraggingOver ? classes.listDraggingOver : classes.list}
          ref={dropProvided.innerRef}
        >
          <InnerQuoteList value={value} itemRender={itemRender} />
          {dropProvided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};

export { QuoteList };

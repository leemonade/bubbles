import React from 'react';
import { Box } from '../../../layout/Box';
import { KanbanStyles } from '../Kanban.styles';
import { Draggable } from 'react-beautiful-dnd';
import { QuoteList } from './QuoteList';

const Column = ({ value, index, isScrollable, isCombineEnabled, itemRender, ...props }) => {
  const { classes, cx } = KanbanStyles({});

  return (
    <Draggable draggableId={value.id} index={index} isDragDisabled={true}>
      {(provided, snapshot) => (
        <Box ref={provided.innerRef} {...provided.draggableProps} className={classes.column}>
          <Box className={classes.columnHeader}>
            <Box isDragging={snapshot.isDragging} {...provided.dragHandleProps}>
              {value.title}
              <strong className={classes.columnHeaderCount}>{value.cards.length}</strong>
            </Box>
          </Box>
          <Box>
            <QuoteList
              listId={value.id}
              listType="QUOTE"
              value={value.cards}
              internalScroll={isScrollable}
              isCombineEnabled={Boolean(isCombineEnabled)}
              itemRender={itemRender}
            />
          </Box>
        </Box>
      )}
    </Draggable>
  );
};

export { Column };

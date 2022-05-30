import React from 'react';
import { Box } from '../../../layout/Box';
import { KanbanStyles } from '../Kanban.styles';
import { Draggable } from 'react-beautiful-dnd';
import { QuoteList } from './QuoteList';
import { Text } from '../../../typography';
import { ImageLoader } from '../../../misc';

const Column = ({ value, index, isScrollable, isCombineEnabled, itemRender, icon, ...props }) => {
  const { classes, cx } = KanbanStyles({});

  return (
    <Draggable draggableId={value.id} index={index} isDragDisabled={true}>
      {(provided, snapshot) => (
        <Box ref={provided.innerRef} {...provided.draggableProps} className={classes.column}>
          {index === 0 && icon ? (
            <Box className={classes.iconBig}>
              <ImageLoader
                height="150"
                imageStyles={{
                  width: 150,
                }}
                src={icon}
                forceImage
              />
            </Box>
          ) : null}
          <Box className={classes.columnHeader}>
            <Box isDragging={snapshot.isDragging} {...provided.dragHandleProps}>
              <Text role="productive" strong>
                {value.title}
              </Text>
            </Box>
            <Text color="primary">{value.cards.length}</Text>
          </Box>
          <Box style={{ position: 'relative', zIndex: 2 }}>
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

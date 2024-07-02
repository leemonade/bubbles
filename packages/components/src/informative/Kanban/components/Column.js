import React from 'react';
import PropTypes from 'prop-types';
import { ScrollArea } from '@mantine/core';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '../../../layout/Box';
import { KanbanStyles } from '../Kanban.styles';
import { QuoteList } from './QuoteList';
import { ImageLoader } from '../../../misc';
import { NewItem } from './NewItem';

const Column = ({
  value,
  index,
  isScrollable,
  isCombineEnabled,
  itemRender,
  icon,
  onNew,
  showNew,
  newItemLabel,
}) => {
  const { classes } = KanbanStyles({});

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
            <Box {...provided.dragHandleProps}>
              <Box>{value.title}</Box>
            </Box>
            <Box>{value.cards.length}</Box>
          </Box>
          <ScrollArea className={classes.scroll} style={{ width: '100%', height: '100%' }}>
            {showNew && !value.cards?.length ? (
              <Box className={classes.newItem}>
                <NewItem label={newItemLabel} onClick={onNew} />
              </Box>
            ) : (
              <QuoteList
                listId={value.id}
                listType="QUOTE"
                value={value.cards}
                internalScroll={isScrollable}
                isCombineEnabled={Boolean(isCombineEnabled)}
                itemRender={itemRender}
              />
            )}
          </ScrollArea>
        </Box>
      )}
    </Draggable>
  );
};

Column.propTypes = {
  value: PropTypes.object,
  index: PropTypes.number,
  isScrollable: PropTypes.bool,
  isCombineEnabled: PropTypes.bool,
  itemRender: PropTypes.func,
  icon: PropTypes.string,
  onNew: PropTypes.func,
  showNew: PropTypes.bool,
  newItemLabel: PropTypes.string,
};

export { Column };

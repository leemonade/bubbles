import React from 'react';
import { cloneDeep } from 'lodash';
import { Box } from '@mantine/core';
import { KanbanStyles } from './Kanban.styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Column } from './components/Column';
import reorder, { reorderQuoteMap } from './helpers/reorder';

export const KANBAN_DEFAULT_PROPS = {
  itemRender: ({ value }) => {
    return <>{value.title}</>;
  },
};
export const KANBAN_PROP_TYPES = {};

const Kanban = ({ value, isCombineEnabled, onChange, itemRender, ...props }) => {
  const { classes, cx } = KanbanStyles({});

  const onDragEnd = (result) => {
    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    // did not move anywhere - can bail early
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // reordering column
    if (result.type === 'COLUMN') {
      value.columns = reorder(value.columns, source.index, destination.index);
      onChange(value);

      return;
    }

    value.columns = reorderQuoteMap({
      columns: value.columns,
      source,
      destination,
    });

    onChange(cloneDeep(value));
  };

  if (!value) return null;

  const board = (
    <Droppable droppableId="board" type="COLUMN" direction="horizontal">
      {(provided) => (
        <Box ref={provided.innerRef} {...provided.droppableProps} className={classes.root}>
          {value.columns.map((column, index) => (
            <Column key={column.id} value={column} index={index} itemRender={itemRender} />
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );

  return (
    <React.Fragment>
      <DragDropContext onDragEnd={onDragEnd}>{board}</DragDropContext>
    </React.Fragment>
  );
};

Kanban.defaultProps = KANBAN_DEFAULT_PROPS;
Kanban.propTypes = KANBAN_PROP_TYPES;

export { Kanban };

import React from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Box } from '../../layout/Box';
import { KanbanStyles } from './Kanban.styles';
import { Column } from './components/Column';
import reorder, { reorderQuoteMap } from './helpers/reorder';

export const KANBAN_DEFAULT_PROPS = {
  itemRender: ({ value }) => <>{value.title}</>,
};
export const KANBAN_PROP_TYPES = {
  value: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        cards: PropTypes.arrayOf(PropTypes.object),
      }),
    ),
  }),
  isCombineEnabled: PropTypes.bool,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  itemRender: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

const Kanban = ({ value, onChange, icon, itemRender }) => {
  const { classes } = KanbanStyles({});

  const onDragEnd = (result) => {
    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const { source } = result;
    const { destination } = result;

    // did not move anywhere - can bail early
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // reordering column
    if (result.type === 'COLUMN') {
      value.columns = reorder(value.columns, source.index, destination.index);
      onChange(value, result);

      return;
    }

    value.columns = reorderQuoteMap({
      columns: value.columns,
      source,
      destination,
    });

    onChange(cloneDeep(value), result);
  };

  if (!value) return null;

  const board = (
    <Droppable droppableId="board" type="COLUMN" direction="horizontal">
      {(provided) => (
        <Box ref={provided.innerRef} {...provided.droppableProps} className={classes.root}>
          {value.columns.map((column, index) => (
            <Column
              key={column.id}
              value={column}
              index={index}
              itemRender={itemRender}
              icon={icon}
            />
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );

  return <DragDropContext onDragEnd={onDragEnd}>{board}</DragDropContext>;
};

Kanban.defaultProps = KANBAN_DEFAULT_PROPS;
Kanban.propTypes = KANBAN_PROP_TYPES;

export { Kanban };

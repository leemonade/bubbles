import React from 'react';
import PropTypes from 'prop-types';
import { SortableListStyles } from './SortableList.styles';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useId } from '@mantine/hooks';
import { DroppableDefault } from './components/DroppableDefault';
import { DraggableDefault } from './components/DraggableDefault';

export const SORTABLE_LIST_DEFAULT_PROPS = {
  value: [],
  onChange: () => {},
  container: DroppableDefault,
  item: DraggableDefault,
  onRemove: () => {},
};
export const SORTABLE_LIST_PROP_TYPES = {
  value: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  container: PropTypes.node,
  item: PropTypes.node,
};

const SortableList = ({ value, onChange, onRemove, container: Container, item: Item }) => {
  const { classes, cx } = SortableListStyles({});

  const uuid = useId();

  function removeItem(index) {
    const [removed] = value.splice(index, 1);
    onChange([...value]);
    onRemove({
      index,
      item: removed,
    });
  }

  function onDragEnd(result) {
    const { source, destination } = result;
    if (!destination) return;

    const newData = [...value];
    const [removed] = newData.splice(source.index, 1);
    newData.splice(destination.index, 0, removed);
    onChange(newData);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={uuid}>
        {(provided, snapshot) => {
          return (
            <Container provided={provided} snapshot={snapshot}>
              {value.map((item, index) => {
                return (
                  <Draggable key={index} draggableId={index.toString()} index={index}>
                    {(provided, snapshot) => {
                      return (
                        <Item
                          provided={provided}
                          snapshot={snapshot}
                          item={item}
                          removeItem={() => removeItem(index)}
                        />
                      );
                    }}
                  </Draggable>
                );
              })}
            </Container>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

SortableList.defaultProps = SORTABLE_LIST_DEFAULT_PROPS;

SortableList.propTypes = SORTABLE_LIST_PROP_TYPES;

export { SortableList };

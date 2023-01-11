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
  onDragStart: () => {},
  onDragEnd: () => {},
  onBeforeDragStart: () => {},
  containerRender: DroppableDefault,
  itemRender: DraggableDefault,
  onRemove: () => {},
  dragDisabled: false,
  useRefs: () => {},
  useAria: true,
  removeLabel: 'Remove',
};
export const SORTABLE_LIST_PROP_TYPES = {
  value: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  container: PropTypes.node,
  item: PropTypes.node,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  onBeforeDragStart: PropTypes.func,
  dragDisabled: PropTypes.bool,
  useRefs: PropTypes.func,
  useAria: PropTypes.bool,
  removeLabel: PropTypes.string,
};

const SortableList = ({
  value,
  onChange,
  onRemove,
  onDragStart,
  onDragEnd,
  onBeforeDragStart,
  dragDisabled,
  containerRender: Container,
  itemRender: Item,
  useRefs,
  useAria,
  removeLabel,
}) => {
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

  function _onDragEnd(result) {
    onDragEnd(result);
    const { source, destination } = result;
    if (!destination) return;

    const newData = [...value];
    const [removed] = newData.splice(source.index, 1);
    newData.splice(destination.index, 0, removed);
    onChange(newData);
  }

  return (
    <DragDropContext
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragEnd={_onDragEnd}
    >
      <Droppable droppableId={uuid}>
        {(provided, snapshot) => {
          return (
            <Container provided={provided} snapshot={snapshot} useAria={useAria}>
              {value.map((item, index) => {
                return (
                  <Draggable
                    isDragDisabled={dragDisabled}
                    key={index}
                    draggableId={index.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => {
                      return (
                        <Item
                          provided={provided}
                          snapshot={snapshot}
                          item={item}
                          index={index}
                          removeItem={() => removeItem(index)}
                          classes={classes}
                          removeLabel={removeLabel}
                        />
                      );
                    }}
                  </Draggable>
                );
              })}
              {provided.placeholder}
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

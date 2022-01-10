import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import update from 'immutability-helper';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SortableListStyles } from './SortableList.styles';
import { isBoolean } from 'lodash';
import { DeleteBinIcon } from '@bubbles-ui/icons/solid';
import { SortDragIcon } from '@bubbles-ui/icons/outline';
import { ActionButton } from '../../form';
import { Text } from '../../typography';

export const SORTABLE_LIST_DEFAULT_PROPS = {
  value: [],
  onChange: () => {},
  render: ({ value }) => (
    <Box sx={(theme) => ({ paddingLeft: theme.spacing[3], paddingRight: theme.spacing[2] })}>
      <Text>{value}</Text>
    </Box>
  ),
};
export const SORTABLE_LIST_PROP_TYPES = {
  value: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func,
  sortable: PropTypes.bool,
  removable: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  render: PropTypes.node,
  mapKey: PropTypes.string,
};

const ListItem = ({ children, sortable, index, reorder, classes, t }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'bubbles-sortable-list-item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      reorder(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'bubbles-sortable-list-item',
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  preview(drop(ref));
  return (
    <Box ref={ref} style={{ opacity }} className={classes.item} data-handler-id={handlerId}>
      {sortable ? <ActionButton icon={<SortDragIcon />} ref={drag} tooltip={''} /> : null}
      {children}
    </Box>
  );
};

const SortableList = ({
  value,
  onChange,
  render: Render,
  sortable,
  removable: _removable,
  mapKey,
}) => {
  const { classes, cx } = SortableListStyles({});

  let Removable = () => null;
  if (_removable) {
    Removable = isBoolean(_removable)
      ? ({ onClick }) => {
          return <ActionButton icon={<DeleteBinIcon />} onClick={onClick} tooltip={''} />;
        }
      : _removable;
  }

  function removeItem(i) {
    value.splice(i, 1);
    onChange([...value]);
  }

  function renderChange(i, val) {
    value[i] = val;
    onChange([...value]);
  }

  const reorder = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = value[dragIndex];
      onChange(
        update(value, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [value]
  );

  return (
    <Box>
      <DndProvider backend={HTML5Backend}>
        {value.map((val, i) => (
          <ListItem
            key={mapKey ? val[mapKey] : val}
            index={i}
            sortable={sortable}
            classes={classes}
            t={val}
            reorder={reorder}
          >
            <Render value={val} index={i} onChange={(v) => renderChange(i, v)} />
            <Removable onClick={() => removeItem(i)} />
          </ListItem>
        ))}
      </DndProvider>
    </Box>
  );
};

SortableList.defaultProps = SORTABLE_LIST_DEFAULT_PROPS;

SortableList.propTypes = SORTABLE_LIST_PROP_TYPES;

export { SortableList };

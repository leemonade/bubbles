import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { Box } from '@mantine/core';
// import hooks from 'leemons-hooks';

const DndItem = ({ children, className, item, type, emptyLayout }) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type,
    item: {
      ...item,
      _tempId: Math.random().toString(16).slice(2),
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
    end: (dragItem, monitor) => {
      // hooks.fireEvent('dnd:end', { dragItem, monitor });
    },
  }));

  useEffect(() => {
    if (emptyLayout) {
      preview(getEmptyImage(), { captureDraggingState: true });
    }
  }, []);

  const goodChildren = _.isFunction(children) ? children({ isDragging, canDrag: true }) : children;

  return (
    <Box ref={drag} className={className}>
      {goodChildren}
    </Box>
  );
};

DndItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  item: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  emptyLayout: PropTypes.bool,
};

export { DndItem };

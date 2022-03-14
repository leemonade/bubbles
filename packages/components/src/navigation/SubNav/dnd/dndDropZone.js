import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Box } from '../../../layout/Box';

const DndDropZone = ({ children, className, type, onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: type,
      drop: onDrop,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [onDrop]
  );

  return (
    <Box ref={drop} className={className}>
      {_.isFunction(children) ? children({ canDrop, isOver }) : children}
    </Box>
  );
};

DndDropZone.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onDrop: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export { DndDropZone };

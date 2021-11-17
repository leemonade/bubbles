import React from 'react';
import { useDragLayer } from 'react-dnd';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Box } from '@mantine/core';

const dndLayers = {};

function registerDndLayer(type, component) {
  dndLayers[type] = component;
}

function getDndLayer(type) {
  if (Object.prototype.hasOwnProperty.call(dndLayers, type)) {
    return dndLayers[type];
  }
  return null;
}

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

function getItemStyles(initialOffset, currentOffset) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }
  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

const DndLayer = () => {
  const { isDragging, item, initialOffset, currentOffset, itemType } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) {
    return null;
  }

  function renderItem() {
    const layer = getDndLayer(itemType);
    return _.isFunction(layer) ? layer({ item, isDragging }) : layer;
  }

  return (
    <Box style={layerStyles}>
      <Box style={getItemStyles(initialOffset, currentOffset)}>{renderItem()}</Box>
    </Box>
  );
};

DndLayer.propTypes = {
  children: PropTypes.any,
};

export { registerDndLayer, getDndLayer, DndLayer };

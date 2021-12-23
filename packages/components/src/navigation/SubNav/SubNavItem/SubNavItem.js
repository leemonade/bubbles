import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import { SubNavItemStyles } from './SubNavItem.styles';
import { ImageLoader } from './../../../misc';

export const SubNavItem = ({
  item,
  active,
  isDragging,
  isLayer,
  editMode,
  editItemMode,
  changeToEditItem,
  updateItem,
  remove,
  state,
  setState,
  onClick,
  ...props
}) => {
  const key = `label-${item.id}`;

  const onItemClick = () => {
    if (!editMode && !editItemMode) {
      onClick(item.url);
    } else {
      changeToEditItem(item);
    }
  };

  const onNewLabelChange = (event) => {
    setNewLabel(event.target.value);
  };

  const onUpdateItem = () => {
    if (state[key]) {
      updateItem(item, { label: state[key] });
    }
  };

  const { classes, cx } = SubNavItemStyles({
    active,
    disabled: item.disabled,
    hasError: !state[key],
  });

  if (!isLayer && !editMode && !editItemMode && !isDragging) {
    return (
      <a
        href={item.url}
        className={cx(classes.root, {
          [classes.active]: active,
          [classes.editMode]: editMode,
          [classes.dragging]: isDragging,
          [classes.layer]: isLayer,
          [classes.editItemMode]: editItemMode,
        })}
        onClick={(e) => item.disabled && e.preventDefault()}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Box
      className={`relative w-full font-lexend text-sm cursor-pointer ${styles}`}
      style={isLayer ? { width: '190px' } : {}}
      onClick={onClick}
    >
      {(editMode || isLayer) && (
        <Box
          className={`absolute left-2 top-2/4 transform -translate-y-1/2 hover:text-primary cursor-move ${
            isLayer ? 'text-primary' : ''
          }`}
          style={{ width: '10px', height: '5px' }}
        >
          <ImageLoader className="stroke-current" src={'/public/assets/svgs/re-order.svg'} />
        </Box>
      )}
      {editItemMode ? (
        <Box className="relative">
          <Input
            className="w-full pr-9"
            type="text"
            value={state[key]}
            onChange={onNewLabelChange}
            onKeyPress={(e) => e.key === 'Enter' && onUpdateItem()}
          />
          <Box
            onClick={onUpdateItem}
            className={`absolute right-2 top-2/4 transform -translate-y-1/2 ${
              state[key] ? 'text-primary' : 'text-neutral'
            }`}
            style={{ width: '18px', height: '18px' }}
          >
            <ImageLoader className="fill-current" src={'/public/assets/svgs/check.svg'} />
          </Box>
        </Box>
      ) : (
        <span className={`line-clamp-2 hover:text-base-content`}>{item.label}</span>
      )}

      {editMode && (
        <Box
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            remove(item);
          }}
          className="absolute right-3 top-2/4 transform -translate-y-1/2 hover:text-base-content"
          style={{ width: '12px', height: '12px' }}
        >
          <ImageLoader
            className="stroke-current fill-current"
            src={'/public/assets/svgs/remove.svg'}
          />
        </Box>
      )}
    </Box>
  );
};

SubNavItem.propTypes = {};

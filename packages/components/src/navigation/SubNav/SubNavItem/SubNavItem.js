import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { Link } from 'react-router-dom';
import { SubNavItemStyles } from './SubNavItem.styles';

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
  onClick,
  ...props
}) => {
  const key = `label-${item.id}`;

  const handleClick = (ev) => {
    if (isFunction(onClick)) onClick(item);
    if (item.disabled) ev.preventDefault();
  };

  const { classes, cx } = SubNavItemStyles({
    active,
    disabled: item.disabled,
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
        onClick={handleClick}
      >
        {item.label}
      </a>
    );
  }
};

SubNavItem.propTypes = {};

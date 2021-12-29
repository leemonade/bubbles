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
  useRouter,
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
    const className = cx(classes.root, {
      [classes.active]: active,
      [classes.editMode]: editMode,
      [classes.dragging]: isDragging,
      [classes.layer]: isLayer,
      [classes.editItemMode]: editItemMode,
    });

    if (useRouter) {
      return (
        <Link to={item.url} className={className} onClick={handleClick}>
          {item.label}
        </Link>
      );
    }
    return (
      <a href={item.url} className={className} onClick={handleClick}>
        {item.label}
      </a>
    );
  }
};

SubNavItem.defaultProps = {
  useRouter: false,
  active: false,
  isDragging: false,
  isLayer: false,
  editMode: false,
};

SubNavItem.propTypes = {
  item: PropTypes.any,
  active: PropTypes.bool,
  isDragging: PropTypes.bool,
  isLayer: PropTypes.bool,
  editMode: PropTypes.bool,
  editItemMode: PropTypes.bool,
  useRouter: PropTypes.bool,
  onClick: PropTypes.func,
};

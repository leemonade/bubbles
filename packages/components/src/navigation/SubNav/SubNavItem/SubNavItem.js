import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mantine/core';
import { SubNavItemStyles } from './SubNavItem.styles';
import { ImageLoader } from './../../../misc';

export const SubNavItem = ({ item, itemWidth, active, onClick, ...props }) => {
  const { classes, cx } = SubNavItemStyles({ itemWidth, active });

  return (
    <Button
      className={classes.root}
      onClick={(e) => (item.disabled ? e.preventDefault() : onClick(e))}
    >
      <ImageLoader
        className={cx(classes.icon)}
        src={active && item.activeIconSvg ? item.activeIconSvg : item.iconSvg}
        alt={item.iconAlt}
        strokeCurrent
      />
    </Button>
  );
};

SubNavItem.propTypes = {};

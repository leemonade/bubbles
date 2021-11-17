import React from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip } from '@mantine/core';
import { MainNavItemStyles } from './MainNavItem.styles';
import { ImageLoader } from './../../../misc';

export const MainNavItem = ({ item, itemWidth, active, onClick, ...props }) => {
  const { classes, cx } = MainNavItemStyles({ itemWidth, active });
  return (
    <Tooltip
      position="right"
      label={item.label}
      withArrow
      classNames={{ body: classes.tooltipBody, arrow: classes.tooltipArrow }}
    >
      <Button className={classes.root}>
        <ImageLoader
          className={cx(classes.icon)}
          src={active && item.activeIconSvg ? item.activeIconSvg : item.iconSvg}
          alt={item.iconAlt}
          strokeCurrent
        />
      </Button>
    </Tooltip>
  );
};

MainNavItem.propTypes = {};

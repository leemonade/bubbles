import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from '@mantine/core';
import { MainNavItemStyles } from './MainNavItem.styles';
import { ImageLoader } from './../../../misc';

export const MainNavItem = ({ item, itemWidth, active, onClick, useRouter, ...props }) => {
  const { classes, cx } = MainNavItemStyles({ itemWidth, active });

  const Wrapper = ({ children }) => {
    if (item.url) {
      if (useRouter) {
        return (
          <Link key={item.id} to={item.url}>
            {children}
          </Link>
        );
      }
      return (
        <a key={item.id} href={item.url}>
          {children}
        </a>
      );
    }
    return children;
  };

  return (
    <Tooltip
      position="right"
      label={item.label}
      withArrow
      classNames={{ body: classes.tooltipBody, arrow: classes.tooltipArrow }}
    >
      <Wrapper>
        <Button
          className={classes.root}
          onClick={(e) => (item.disabled ? e.preventDefault() : onClick(e))}
          aria-label={item.label}
        >
          <ImageLoader
            className={cx(classes.icon)}
            src={active && item.activeIconSvg ? item.activeIconSvg : item.iconSvg}
            alt={item.iconAlt}
            strokeCurrent
            fillCurrent={active}
          />
        </Button>
      </Wrapper>
    </Tooltip>
  );
};

MainNavItem.propTypes = {};

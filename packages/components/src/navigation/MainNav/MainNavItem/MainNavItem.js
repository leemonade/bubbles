import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { MainNavItemStyles } from './MainNavItem.styles';
import { ImageLoader } from './../../../misc';

export const MainNavItem = ({
  item,
  itemWidth,
  active,
  onClick,
  useRouter,
  lightMode,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useClickOutside(() => setIsHovered(false));

  const { classes, cx } = MainNavItemStyles({ itemWidth, active, lightMode });

  const handleClick = (e) => {
    setIsHovered(false);
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    onClick(e);
  };

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
      opened={isHovered}
      position="right"
      label={item.label}
      withArrow
      classNames={{ body: classes.tooltipBody, arrow: classes.tooltipArrow }}
    >
      <Wrapper>
        <Button
          ref={ref}
          className={classes.root}
          disabled={item.disabled}
          aria-label={item.label}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ImageLoader
            className={cx(classes.icon)}
            src={active && item.activeIconSvg ? item.activeIconSvg : item.iconSvg}
            alt={item.iconAlt}
            strokeCurrent
            ignoreFill={!active}
          />
        </Button>
      </Wrapper>
    </Tooltip>
  );
};

MainNavItem.propTypes = {
  lightMode: PropTypes.bool,
};

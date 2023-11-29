import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { MainNavItemStyles } from './MainNavItem.styles';
import { ImageLoader } from '../../../misc/ImageLoader/ImageLoader';
import { Box } from '../../../layout/Box';

const Wrapper = ({ useRouter, item, children }) => {
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

Wrapper.propTypes = {
  useRouter: PropTypes.bool,
  item: PropTypes.object,
  children: PropTypes.node,
};

const MainNavItem = ({ item, itemWidth, active, onClick, useRouter, lightMode, drawerColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useClickOutside(() => setIsHovered(false));

  const { classes, cx } = MainNavItemStyles({ itemWidth, active, lightMode, drawerColor });

  const handleClick = (e) => {
    setIsHovered(false);
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    onClick(e);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 3000);
  };

  const handleSvgProps =
    !item?.activeIconSvg || (!!item?.activeIconSvg && item?.activeIconSvg === item?.iconSvg);

  return (
    <Tooltip
      opened={isHovered}
      position="right"
      label={item.label}
      classNames={{ tooltip: classes.tooltipBody, arrow: classes.tooltipArrow }}
      withArrow
      withinPortal
    >
      <Box style={{ height: 54 }}>
        <Wrapper useRouter={useRouter} item={item}>
          <Button
            ref={ref}
            className={classes.root}
            disabled={item.disabled}
            aria-label={item.label}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
          >
            {item.icon ? (
              React.cloneElement(item.icon, { className: cx(classes.icon) })
            ) : (
              <ImageLoader
                className={cx(classes.icon)}
                src={active && item.activeIconSvg ? item.activeIconSvg : item.iconSvg}
                alt={item.iconAlt}
                strokeCurrent
                ignoreFill={!active && handleSvgProps}
              />
            )}
          </Button>
        </Wrapper>
      </Box>
    </Tooltip>
  );
};

MainNavItem.propTypes = {
  lightMode: PropTypes.bool,
  item: PropTypes.object,
  itemWidth: PropTypes.number,
  active: PropTypes.bool,
  useRouter: PropTypes.bool,
  drawerColor: PropTypes.string,
  onClick: PropTypes.func,
};

export { MainNavItem };

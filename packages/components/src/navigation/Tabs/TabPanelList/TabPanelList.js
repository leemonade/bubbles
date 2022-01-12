import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import TabContext from '../TabContext';
import { TabPanelListStyles } from './TabPanelList.styles';

export const TabPanelList = ({
  id,
  activeKey,
  animated,
  position,
  rtl,
  destroyInactiveTabPane,
  className,
  forceRender,
  children,
}) => {
  const { tabs } = useContext(TabContext);

  const { classes, cx } = TabPanelListStyles({ position, animated }, { name: 'TabPanelList' });

  const activeIndex = tabs.findIndex((tab) => tab.key === activeKey);

  return (
    <Box className={cx(classes.root, className)}>
      <Box
        className={cx(classes.content)}
        style={
          activeIndex && animated
            ? { [rtl ? 'marginRight' : 'marginLeft']: `-${activeIndex}00%` }
            : null
        }
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            tabKey: child.key,
            id,
            animated: animated,
            active: child.key === activeKey,
            destroyInactiveTabPane: destroyInactiveTabPane,
            forceRender: forceRender,
          });
        })}
      </Box>
    </Box>
  );
};

TabPanelList.propTypes = {
  activeKey: PropTypes.any,
  id: PropTypes.string,
  rtl: PropTypes.bool,
  animated: PropTypes.bool,
  position: PropTypes.string,
  destroyInactiveTabPane: PropTypes.bool,
  forceRender: PropTypes.bool,
};

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
}) => {
  const { tabs } = useContext(TabContext);
  const { classes, cx } = TabPanelListStyles({ position, animated }, { name: 'TabPanelList' });

  const activeIndex = tabs.findIndex((tab) => tab.key === activeKey);

  return (
    <Box className={cx(classes.root)}>
      <Box
        className={cx(classes.content)}
        style={
          activeIndex && animated
            ? { [rtl ? 'marginRight' : 'marginLeft']: `-${activeIndex}00%` }
            : null
        }
      >
        {tabs.map((tab) => {
          return React.cloneElement(tab.node, {
            key: tab.key,
            tabKey: tab.key,
            id,
            animated,
            active: tab.key === activeKey,
            destroyInactiveTabPane,
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
};

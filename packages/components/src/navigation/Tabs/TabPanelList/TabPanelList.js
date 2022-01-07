import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import TabContext from '../TabContext';
import { TabPane } from './TabPane';
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
        {tabs.map((tab) => (
          <TabPane
            key={tab.key}
            tabKey={tab.key}
            id={id}
            animated={animated}
            active={tab.key === activeKey}
            destroyInactiveTabPane={destroyInactiveTabPane}
            forceRender={forceRender}
          >
            {tab.node.props.children}
          </TabPane>
        ))}
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

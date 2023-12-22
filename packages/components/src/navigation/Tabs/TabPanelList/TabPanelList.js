import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../../layout/Box';
import TabContext from '../TabContext';
import { TabPanelListStyles } from './TabPanelList.styles';

const TabPanelList = ({
  id,
  activeKey,
  animated,
  position,
  rtl,
  destroyInactiveTabPanel,
  className,
  tabPanelListStyle,
  forceRender,
}) => {
  const { tabs } = useContext(TabContext);
  const { classes, cx } = TabPanelListStyles({ position, animated }, { name: 'TabPanelList' });

  const activeIndex = tabs.findIndex((tab) => tab.key === activeKey);

  return (
    <Box className={cx(classes.root, className)} style={tabPanelListStyle}>
      <Box
        className={cx(classes.content)}
        style={
          activeIndex && animated
            ? { [rtl ? 'marginRight' : 'marginLeft']: `-${activeIndex}00%` }
            : null
        }
      >
        {tabs.map(({ node, key }) =>
          React.cloneElement(node, {
            key,
            tabKey: key,
            id,
            animated,
            active: key === activeKey,
            destroyInactiveTabPanel,
            forceRender,
          }),
        )}
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
  destroyInactiveTabPanel: PropTypes.bool,
  forceRender: PropTypes.bool,
  fullHeight: PropTypes.bool,
  tabPanelListStyle: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string,
};

export { TabPanelList };

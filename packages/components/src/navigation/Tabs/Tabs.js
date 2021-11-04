// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
import React, { useEffect, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { useMergedState } from './hooks';
import { TabNavList } from './TabNavList/TabNavList';
import { TabPanelList } from './TabPanelList/TabPanelList';
import { TabPane } from './TabPanelList/TabPane';
import TabContext from './TabContext';
import { TabsStyles } from './Tabs.styles';

// Used for accessibility
let uuid = 0;

function parseTabList(children) {
  // Tab[]
  return React.Children.toArray(children)
    .map((node) => {
      if (React.isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined;
        return {
          key,
          ...node.props,
          node,
        };
      }

      return null;
    })
    .filter((tab) => tab);
}

export const Tabs = forwardRef(
  (
    {
      id,
      children,
      direction,
      activeKey,
      defaultActiveKey,
      position = 'left',
      destroyInactiveTabPane,
      animated = false,
      onChange,
      onTabClick,
      onTabScroll,
    },
    ref
  ) => {
    const tabs = parseTabList(children);
    const rtl = direction === 'rtl';

    const mergedAnimated = {
      tabPane: false,
    };

    // ········································································
    // Active Key
    const [mergedActiveKey, setMergedActiveKey] = useMergedState(() => tabs[0]?.key, {
      value: activeKey,
      defaultValue: defaultActiveKey,
    });
    const [activeIndex, setActiveIndex] = useState(() =>
      tabs.findIndex((tab) => tab.key === mergedActiveKey)
    );

    // Reset active key if not exist anymore
    useEffect(() => {
      let newActiveIndex = tabs.findIndex((tab) => tab.key === mergedActiveKey);
      if (newActiveIndex === -1) {
        newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
        setMergedActiveKey(tabs[newActiveIndex]?.key);
      }
      setActiveIndex(newActiveIndex);
    }, [tabs.map((tab) => tab.key).join('_'), mergedActiveKey, activeIndex]);

    // ········································································
    // Accessibility
    const [mergedId, setMergedId] = useMergedState(null, {
      value: id,
    });

    // Async generate id to avoid ssr mapping failed
    useEffect(() => {
      if (!id) {
        setMergedId(`tabs-${process.env.NODE_ENV === 'test' ? 'test' : uuid}`);
        uuid += 1;
      }
    }, []);

    // ········································································
    // Events
    function onInternalTabClick(key, e) {
      if (onTabClick && typeof onTabClick === 'function') onTabClick(key, e);

      setMergedActiveKey(key);
      if (onChange && typeof onChange === 'function') onChange(key);
    }

    // ········································································
    // Render
    const sharedProps = {
      id: mergedId,
      activeKey: mergedActiveKey,
      animated,
      position,
      rtl,
    };

    const tabNavBarProps = {
      ...sharedProps,
      onTabClick: onInternalTabClick,
      onTabScroll,
      panes: children,
    };

    const { classes, cx } = TabsStyles({ direction, position }, { name: 'Tabs' });

    return (
      <TabContext.Provider value={{ tabs }}>
        <Box ref={ref} id={id} className={cx(classes.root)}>
          <TabNavList {...tabNavBarProps} />
          <TabPanelList destroyInactiveTabPane={destroyInactiveTabPane} {...sharedProps} />
        </Box>
      </TabContext.Provider>
    );
  }
);

Tabs.TabPane = TabPane;

Tabs.propTypes = {
  id: PropTypes.string,
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  direction: PropTypes.oneOf(['ltr', 'rtl']),
  position: PropTypes.oneOf(['left', 'right', 'center']),
  destroyInactiveTabPane: PropTypes.bool,
  animated: PropTypes.bool,

  onChange: PropTypes.func,
  onTabClick: PropTypes.func,
  onTabScroll: PropTypes.func,
};

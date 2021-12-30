// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
import React, { useEffect, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { useMergedState } from './hooks';
import { TabNavList } from './TabNavList/TabNavList';
import { TabPanelList } from './TabPanelList/TabPanelList';
import { TabPane } from './TabPanelList/TabPane';
import TabContext from './TabContext';
import { TabsStyles } from './Tabs.styles';
import { PageContainer } from '../../layout';

export const TABS_PANEL_COLORS = ['default', 'solid'];

// Used for accessibility
let uuid = 0;

function parseTabList(children) {
  // Tab[]
  return React.Children.toArray(children)
    .map((node) => {
      if (React.isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : useId();
        return {
          ...node.props,
          key,
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
      orientation = 'horizontal',
      destroyInactiveTabPane,
      animated = false,
      className,
      classNames,
      onChange,
      onTabClick,
      onTabScroll,
      usePageLayout,
      panelColor = 'default',
    },
    ref
  ) => {
    const tabs = parseTabList(children);
    console.log('tabs:', tabs);

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
      orientation,
      rtl,
    };

    const tabNavBarProps = {
      ...sharedProps,
      onTabClick: onInternalTabClick,
      onTabScroll,
      panes: children,
    };

    const { classes, cx } = TabsStyles({ direction, position, panelColor }, { name: 'Tabs' });

    const Wrapper = usePageLayout ? PageContainer : Box;

    return (
      <TabContext.Provider value={{ tabs }}>
        <Box ref={ref} id={id} className={cx(classes.root, classNames?.root, className)}>
          <Wrapper className={classNames?.navList}>
            <TabNavList {...tabNavBarProps} />
          </Wrapper>
          <Wrapper className={cx(classes.panelList, classNames?.panelList)}>
            <TabPanelList destroyInactiveTabPane={destroyInactiveTabPane} {...sharedProps} />
          </Wrapper>
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
  usePageLayout: PropTypes.bool,
  panelColor: PropTypes.oneOf(TABS_PANEL_COLORS),
  onChange: PropTypes.func,
  onTabClick: PropTypes.func,
  onTabScroll: PropTypes.func,
};

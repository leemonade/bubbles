// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isFunction, isNil } from 'lodash';
import { Box } from '../../layout/Box';
import { PageContainer } from '../../layout/PageContainer';
import { useMergedState } from './hooks';
import { TabNavList } from './TabNavList/TabNavList';
import { TabPanelList } from './TabPanelList/TabPanelList';
import { TabsStyles } from './Tabs.styles';
import TabContext from './TabContext';

export const TABS_PANEL_COLORS = ['default', 'solid'];

// Used for accessibility
let uuid = 0;

function parseTabList(children, acc = []) {
  React.Children.forEach(children, (child, index) => {
    if (child?.type?.displayName === 'TabPanel') {
      const key = !isNil(child.key) ? child.key : index.toString();
      acc.push({
        ...child.props,
        key,
        node: child,
      });
    } else {
      if (child?.props?.children && child?.type?.displayName !== 'Tabs') {
        parseTabList(child.props.children, acc);
      }
    }
  });
  return acc;
}

const Wrapper = ({ usePageLayout, usePaddedLayout, fullWidth, className, children }) => {
  return usePageLayout ? (
    <Box className={className}>
      <PageContainer fullWidth={fullWidth}>{children}</PageContainer>
    </Box>
  ) : (
    <Box
      className={className}
      sx={(theme) => ({ padding: usePaddedLayout && `0 ${theme.spacing[7]}px` })}
    >
      {children}
    </Box>
  );
};

export const Tabs = forwardRef(
  (
    {
      id,
      children,
      direction,
      activeKey,
      defaultActiveKey,
      position,
      orientation,
      destroyInactiveTabPanel,
      animated,
      fullHeight,
      fullWidth,
      className,
      classNames,
      onChange,
      onTabClick,
      onTabScroll,
      usePageLayout,
      usePaddedLayout,
      panelColor,
      forceRender,
      tabPanelListStyle,
    },
    ref
  ) => {
    const tabs = parseTabList(children);
    const rtl = direction === 'rtl';

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
        setMergedId(`tabs-${uuid}`);
        uuid += 1;
      }
    }, []);

    // ········································································
    // Events
    function onInternalTabClick(key, e) {
      if (isFunction(onTabClick)) onTabClick(key, e);

      setMergedActiveKey(key);
      if (isFunction(onChange)) onChange(key);
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

    const { classes, cx } = TabsStyles(
      { direction, position, panelColor, fullHeight },
      { name: 'Tabs' }
    );

    return (
      <TabContext.Provider value={{ tabs }}>
        <Box ref={ref} id={id} className={cx(classes.root, classNames?.root, className)}>
          <Wrapper
            usePageLayout={usePageLayout}
            usePaddedLayout={usePaddedLayout}
            fullWidth={fullWidth}
            className={classNames?.navList}
          >
            <TabNavList {...tabNavBarProps} />
          </Wrapper>
          <Wrapper
            usePageLayout={usePageLayout}
            usePaddedLayout={usePaddedLayout}
            fullWidth={fullWidth}
            className={cx(classes.panelList, classNames?.panelList)}
          >
            <TabPanelList
              {...sharedProps}
              tabPanelListStyle={tabPanelListStyle}
              forceRender={forceRender}
              destroyInactiveTabPanel={destroyInactiveTabPanel}
              children={children}
            />
          </Wrapper>
        </Box>
      </TabContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
  position: 'left',
  orientation: 'horizontal',
  animated: false,
  fullHeight: false,
  fullWidth: false,
  panelColor: 'default',
};

Tabs.propTypes = {
  id: PropTypes.string,
  activeKey: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  direction: PropTypes.oneOf(['ltr', 'rtl']),
  position: PropTypes.oneOf(['left', 'right', 'center']),
  destroyInactiveTabPanel: PropTypes.bool,
  animated: PropTypes.bool,
  usePageLayout: PropTypes.bool,
  usePaddedLayout: PropTypes.bool,
  panelColor: PropTypes.oneOf(TABS_PANEL_COLORS),
  onChange: PropTypes.func,
  onTabClick: PropTypes.func,
  onTabScroll: PropTypes.func,
  fullHeight: PropTypes.bool,
  fullWidth: PropTypes.bool,
  forceRender: PropTypes.bool,
};

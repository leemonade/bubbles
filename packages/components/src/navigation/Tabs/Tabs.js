// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
import React, { forwardRef, useEffect, useState, useMemo } from 'react';
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
    if (
      child?.type?.displayName === 'TabPanel' ||
      child?.type?.displayName === 'MDXCreateElement'
    ) {
      const key = !isNil(child.key) ? child.key : index.toString();
      acc.push({
        ...child.props,
        key,
        node: child,
      });
    } else if (child?.props?.children && child?.type?.displayName !== 'Tabs') {
      parseTabList(child.props.children, acc);
    }
  });
  return acc;
}

const Wrapper = ({ usePageLayout, usePaddedLayout, fullWidth, className, children, scrollRef }) =>
  usePageLayout ? (
    <Box ref={scrollRef} className={className}>
      <PageContainer fullWidth={fullWidth}>{children}</PageContainer>
    </Box>
  ) : (
    <Box
      ref={scrollRef}
      className={className}
      sx={(theme) => ({
        padding: usePaddedLayout && `0 ${theme.other.global.spacing.padding.lg}`,
      })}
    >
      {children}
    </Box>
  );

Wrapper.propTypes = {
  usePageLayout: PropTypes.bool,
  usePaddedLayout: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  scrollRef: PropTypes.any,
};

const Tabs = forwardRef(
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
      centerGrow,
      tabPanelListStyle,
      scrollRef: scrollRefProp,
    },
    ref,
  ) => {
    const tabs = parseTabList(children);
    const rtl = direction === 'rtl';
    const newScrollRef = React.useRef();
    const scrollRef = scrollRefProp || newScrollRef;
    const [topScroll, setTopScroll] = React.useState(false);

    // ········································································
    // Active Key
    const [mergedActiveKey, setMergedActiveKey] = useMergedState(() => tabs[0]?.key, {
      value: activeKey,
      defaultValue: defaultActiveKey,
    });
    const [activeIndex, setActiveIndex] = useState(() =>
      tabs.findIndex((tab) => tab.key === mergedActiveKey),
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

    const handleScroll = () => {
      const div = scrollRef?.current;
      if (div) {
        const { scrollTop } = div;
        if (scrollTop > 5 && !topScroll) setTopScroll(true);
        else if (scrollTop === 0 && topScroll) setTopScroll(false);
      }
    };
    React.useEffect(() => {
      const body = scrollRef?.current;
      if (body) {
        handleScroll();
        body.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
          body.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleScroll);
        };
      }
      return () => {};
    }, [scrollRef?.current, handleScroll]);

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
      { direction, position, panelColor, fullHeight, topScroll },
      { name: 'Tabs' },
    );

    const value = useMemo(() => ({ tabs }), [tabs]);

    return (
      <TabContext.Provider value={value}>
        <Box ref={ref} id={id} className={cx(classes.root, classNames?.root, className)}>
          <Wrapper
            usePageLayout={usePageLayout}
            usePaddedLayout={usePaddedLayout}
            fullWidth={fullWidth}
            className={cx(classes.navList, classNames?.navList)}
          >
            <TabNavList {...tabNavBarProps} centerGrow={centerGrow} />
          </Wrapper>
          <Wrapper
            scrollRef={scrollRef}
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
            >
              {children}
            </TabPanelList>
          </Wrapper>
        </Box>
      </TabContext.Provider>
    );
  },
);

Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
  position: 'left',
  orientation: 'horizontal',
  animated: false,
  fullHeight: false,
  fullWidth: false,
  panelColor: 'default',
  centerGrow: false,
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
  centerGrow: PropTypes.bool,
  children: PropTypes.node,
  classNames: PropTypes.any,
  styles: PropTypes.any,
  tabPanelListStyle: PropTypes.any,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
  scrollRef: PropTypes.any,
};

export { Tabs };

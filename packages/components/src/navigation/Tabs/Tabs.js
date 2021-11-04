import React, { useState, useEffect, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useUncontrolled, useMergedRef, clamp, useResizeObserver } from '@mantine/hooks';
import { Group, Menu } from '@mantine/core';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { Tab } from './Tab/Tab';
import { TabsStyles } from './Tabs.styles';
import { Button } from './../../form';

export const TABS_POSITION = ['left', 'right', 'center', 'apart'];
export const TABS_ORIENTATION = ['horizontal', 'vertical'];

function getPreviousTab(active, tabs) {
  for (let i = active - 1; i >= 0; i -= 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return active;
}

function getNextTab(active, tabs) {
  for (let i = active + 1; i < tabs.length; i += 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return active;
}

function findInitialTab(tabs) {
  for (let i = 0; i < tabs.length; i += 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return -1;
}

export const Tabs = forwardRef(
  (
    {
      children,
      style,
      initialTab,
      active,
      position = 'left',
      grow = false,
      onTabChange,
      variant = 'default',
      tabPadding = 'xs',
      orientation = 'horizontal',
      sx,
      ...props
    },
    ref
  ) => {
    const tabRefs = useRef({});

    const { classes, cx } = TabsStyles({ tabPadding, orientation }, { sx, name: 'Tabs' });

    const tabs = React.Children.toArray(children).filter((item) => item.type === Tab);

    const [_activeTab, handleActiveTabChange] = useUncontrolled({
      value: active,
      defaultValue: initialTab,
      finalValue: findInitialTab(tabs),
      rule: (value) => typeof value === 'number',
      onChange: onTabChange,
    });

    const activeTab = clamp({ value: _activeTab, min: 0, max: tabs.length - 1 });

    const nextTabCode = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
    const previousTabCode = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';

    const handleKeyDown = (event) => {
      if (event.nativeEvent.code === nextTabCode) {
        event.preventDefault();
        const nextTab = getNextTab(activeTab, tabs);
        handleActiveTabChange(nextTab);
        tabRefs.current[nextTab].focus();
      }

      if (event.nativeEvent.code === previousTabCode) {
        event.preventDefault();
        const previousTab = getPreviousTab(activeTab, tabs);
        handleActiveTabChange(previousTab);
        tabRefs.current[previousTab].focus();
      }
    };

    const panes = tabs.map((tab, index) => (
      <Tab
        {...tab.props}
        key={index}
        active={activeTab === index}
        onKeyDown={handleKeyDown}
        variant={variant}
        orientation={orientation}
        onClick={() => activeTab !== index && handleActiveTabChange(index)}
        buttonRef={useMergedRef((node) => {
          tabRefs.current[index] = node;
        }, tab.ref)}
      />
    ));

    const content = tabs[activeTab].props.children;

    // ········································································
    // Hidden Tabs
    const [showMore, setShowMore] = useState(false);
    const [showHiddenTabs, setShowHiddenTabs] = useState(false);
    const [hiddenTabs, setHiddenTabs] = useState([]);
    const [resizeRef, rect] = useResizeObserver();
    const [tabSizes, setTabSizes] = useState([]);

    useEffect(() => {
      setShowHiddenTabs(false);

      if (tabs && tabs.length && tabRefs.current) {
        const newSizes = tabSizes;

        // At first time
        if (newSizes.length === 0) {
          tabs.forEach((item, index) => {
            const btnNode = tabRefs.current[index];
            if (btnNode) {
              newSizes.push({
                width: btnNode.offsetWidth,
                height: btnNode.offsetHeight,
                left: btnNode.offsetLeft,
                top: btnNode.offsetTop,
              });
            }
          });
          setTabSizes(newSizes);
        }
        // End first time

        const tabListWidth = rect.width || 0;
        let startHiddenTabIndex = 0;
        let tabsWidth = 80;
        for (let i = 0, l = tabs.length; i < l; i++) {
          tabsWidth += newSizes[i].width;
          if (tabsWidth > tabListWidth) {
            setShowMore(true);
            break;
          }
          tabRefs.current[i].style.display = 'block';
          startHiddenTabIndex = i;
        }
        // Check if any hidden Tab
        const tabsHidden = [];
        if (startHiddenTabIndex < tabs.length - 1) {
          for (let i = startHiddenTabIndex + 1, l = tabs.length; i < l; i++) {
            tabRefs.current[i].style.display = 'none';
            tabsHidden.push({ key: i, props: tabs[i].props });
          }
        } else {
          setShowMore(false);
        }
        setHiddenTabs(tabsHidden);
      }
    }, [rect]);

    return (
      <div {...props} ref={ref} className={cx(classes.root)}>
        <div className={cx(classes.tabsListWrapper, classes[variant])}>
          <Group
            className={classes.tabsList}
            role="tablist"
            direction={orientation === 'horizontal' ? 'row' : 'column'}
            aria-orientation={orientation}
            spacing={2}
            position={position}
            grow={grow}
            noWrap
            ref={resizeRef}
          >
            {panes}
          </Group>
          {showMore && (
            <>
              <div className={cx(classes.tabsShowMore)}>
                <Menu
                  control={
                    <Button color="ghost" iconOnly rounded onClick={() => setShowHiddenTabs(true)}>
                      <ChevronRightIcon style={{ width: 16 }} />
                    </Button>
                  }
                  withArrow
                  position="bottom"
                  opened={showHiddenTabs}
                  onOpen={() => setShowHiddenTabs(true)}
                  onClose={() => setShowHiddenTabs(false)}
                >
                  {hiddenTabs.map((item) => (
                    <Menu.Item
                      key={item.key}
                      onClick={() => activeTab !== item.key && handleActiveTabChange(item.key)}
                    >
                      {item.props.label}
                    </Menu.Item>
                  ))}
                </Menu>
              </div>
            </>
          )}
        </div>

        {content && (
          <div role="tabpanel" className={classes.body}>
            {content}
          </div>
        )}
      </div>
    );

    // return <div ref={ref}>Hola</div>;
  }
);

Tabs.propTypes = {
  // Index of initial tab
  initialTab: PropTypes.number,

  // Index of active tab, overrides internal state
  active: PropTypes.number,

  // Active tab color from theme.colors
  // color?: MantineColor,

  // True if tabs should take all available space
  grow: PropTypes.bool,

  // Tab controls position
  position: PropTypes.oneOf(TABS_POSITION),

  // Called when tab control is clicked with tab index
  onTabChange: PropTypes.func,

  // Controls tab content padding-top
  // tabPadding: MantineNumberSize;

  // Controls tab orientation
  orientation: PropTypes.oneOf(TABS_ORIENTATION),
};

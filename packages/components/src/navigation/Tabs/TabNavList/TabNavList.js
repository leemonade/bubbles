import React, { useState, useRef, useEffect, forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { useResizeObserver } from '@mantine/hooks';
import { Box, Group } from '@mantine/core';
import { Tab } from '../Tab/Tab';
import {
  useOffsets,
  useVisibleRange,
  useRaf,
  useRafState,
  useSyncState,
  useRefs,
  useTouchMove,
} from '../hooks';
import { Dropdown } from './Dropdown';
import TabContext from '../TabContext';
import { TabNavListStyles } from './TabNavList.styles';

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

export const TabNavList = forwardRef(
  (
    {
      id,
      animated,
      activeKey,
      rtl,
      position,
      orientation,
      children,
      onTabClick,
      onTabScroll,
      ...props
    },
    ref
  ) => {
    const { tabs } = useContext(TabContext);
    const tabsWrapperRef = useRef();
    const tabListRef = useRef();
    const operationsRef = useRef();
    const [getBtnRef, removeBtnRef] = useRefs();
    const [resizeRef, rect] = useResizeObserver();

    const tabPositionTopOrBottom = true;

    const [transformLeft, setTransformLeft] = useSyncState(0, (next, prev) => {
      if (tabPositionTopOrBottom && onTabScroll) {
        onTabScroll({ direction: next > prev ? 'left' : 'right' });
      }
    });
    const [transformTop, setTransformTop] = useSyncState(0, (next, prev) => {
      if (!tabPositionTopOrBottom && onTabScroll) {
        onTabScroll({ direction: next > prev ? 'top' : 'bottom' });
      }
    });

    const [wrapperScrollWidth, setWrapperScrollWidth] = useState(0);
    const [wrapperScrollHeight, setWrapperScrollHeight] = useState(0);
    const [wrapperContentWidth, setWrapperContentWidth] = useState(0);
    const [wrapperContentHeight, setWrapperContentHeight] = useState(0);
    const [wrapperWidth, setWrapperWidth] = useState(null);
    const [wrapperHeight, setWrapperHeight] = useState(null);

    const [tabSizes, setTabSizes] = useRafState(new Map());
    const tabOffsets = useOffsets(tabs, tabSizes, wrapperScrollWidth);

    // ········································································
    // Util

    let transformMin = 0;
    let transformMax = 0;

    if (!tabPositionTopOrBottom) {
      transformMin = Math.min(0, wrapperHeight - wrapperScrollHeight);
      transformMax = 0;
    } else if (rtl) {
      transformMin = 0;
      transformMax = Math.max(0, wrapperScrollWidth - wrapperWidth);
    } else {
      transformMin = Math.min(0, wrapperWidth - wrapperScrollWidth);
      transformMax = 0;
    }

    function alignInRange(value) {
      if (value < transformMin) {
        return transformMin;
      }
      if (value > transformMax) {
        return transformMax;
      }
      return value;
    }

    // ········································································
    // Mobile
    const touchMovingRef = useRef();
    const [lockAnimation, setLockAnimation] = useState();

    function doLockAnimation() {
      setLockAnimation(Date.now());
    }

    function clearTouchMoving() {
      window.clearTimeout(touchMovingRef.current);
    }

    useTouchMove(tabsWrapperRef, (offsetX, offsetY) => {
      function doMove(setState, offset) {
        setState((value) => {
          const newValue = alignInRange(value + offset);

          return newValue;
        });
      }

      if (tabPositionTopOrBottom) {
        // Skip scroll if place is enough
        if (wrapperWidth >= wrapperScrollWidth) {
          return false;
        }

        doMove(setTransformLeft, offsetX);
      } else {
        if (wrapperHeight >= wrapperScrollHeight) {
          return false;
        }

        doMove(setTransformTop, offsetY);
      }

      clearTouchMoving();
      doLockAnimation();

      return true;
    });

    useEffect(() => {
      clearTouchMoving();
      if (lockAnimation) {
        touchMovingRef.current = window.setTimeout(() => {
          setLockAnimation(0);
        }, 100);
      }

      return clearTouchMoving;
    }, [lockAnimation]);

    // ········································································
    // Scroll
    function scrollToTab(key = activeKey) {
      const tabOffset = tabOffsets.get(key) || {
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
      };

      if (tabPositionTopOrBottom) {
        // Align with top & bottom
        let newTransform = transformLeft;

        // RTL
        if (rtl) {
          if (tabOffset.right < transformLeft) {
            newTransform = tabOffset.right;
          } else if (tabOffset.right + tabOffset.width > transformLeft + wrapperWidth) {
            newTransform = tabOffset.right + tabOffset.width - wrapperWidth;
          }
        }
        // LTR
        else if (tabOffset.left < -transformLeft) {
          newTransform = -tabOffset.left;
        } else if (tabOffset.left + tabOffset.width > -transformLeft + wrapperWidth) {
          newTransform = -(tabOffset.left + tabOffset.width - wrapperWidth);
        }

        setTransformTop(0);
        setTransformLeft(alignInRange(newTransform));
      } else {
        // Align with left & right
        let newTransform = transformTop;

        if (tabOffset.top < -transformTop) {
          newTransform = -tabOffset.top;
        } else if (tabOffset.top + tabOffset.height > -transformTop + wrapperHeight) {
          newTransform = -(tabOffset.top + tabOffset.height - wrapperHeight);
        }

        setTransformLeft(0);
        setTransformTop(alignInRange(newTransform));
      }
    }

    // ········································································
    // Tab
    // Render tab node & collect tab offset

    const containerSize = {
      width: wrapperWidth,
      height: wrapperHeight,
      left: transformLeft,
      top: transformTop,
    };

    const tabContentNodeSize = {
      width: wrapperContentWidth,
      height: wrapperContentHeight,
    };

    const [visibleStart, visibleEnd] = useVisibleRange(
      tabOffsets,
      containerSize,
      tabContentNodeSize,
      {
        width: 0,
        height: 36,
      },
      { ...props, tabs }
    );

    const onListHolderResize = useRaf(() => {
      // Update wrapper records
      const offsetWidth = tabsWrapperRef.current?.offsetWidth || 0;
      const offsetHeight = tabsWrapperRef.current?.offsetHeight || 0;
      const newOperationWidth = operationsRef.current?.offsetWidth || 0;
      const newOperationHeight = operationsRef.current?.offsetHeight || 0;

      setWrapperWidth(offsetWidth);
      setWrapperHeight(offsetHeight);

      const newWrapperScrollWidth = tabListRef.current?.offsetWidth || 0;
      const newWrapperScrollHeight = tabListRef.current?.offsetHeight || 0;

      setWrapperScrollWidth(newWrapperScrollWidth);
      setWrapperScrollHeight(newWrapperScrollHeight);

      const isOperationHidden = !hasDropdown;
      setWrapperContentWidth(newWrapperScrollWidth - (isOperationHidden ? 0 : newOperationWidth));
      setWrapperContentHeight(
        newWrapperScrollHeight - (isOperationHidden ? 0 : newOperationHeight)
      );

      // Update buttons records only at first time
      if (tabSizes.size === 0) {
        setTabSizes(() => {
          const newSizes = new Map();
          tabs.forEach(({ key }) => {
            const btnNode = getBtnRef(key).current;
            if (btnNode) {
              newSizes.set(key, {
                width: btnNode.offsetWidth,
                height: btnNode.offsetHeight,
                left: btnNode.offsetLeft,
                top: btnNode.offsetTop,
              });
            }
          });
          return newSizes;
        });
      }
    });

    // ········································································
    // Dropdown
    const startHiddenTabs = tabs.slice(0, visibleStart);
    const endHiddenTabs = tabs.slice(visibleEnd + 1);
    const hiddenTabs = [...startHiddenTabs, ...endHiddenTabs];

    // ········································································
    // Link & Operations
    const activeTabOffset = tabOffsets.get(activeKey);

    // ········································································
    // Effect
    useEffect(() => {
      scrollToTab();
    }, [activeKey, activeTabOffset, tabOffsets, tabPositionTopOrBottom]);

    // Should recalculate when rtl changed
    useEffect(() => {
      onListHolderResize();
    }, [rtl, activeKey, tabs.map((tab) => tab.key).join('_')]);

    // Should recalculate when resize
    useEffect(() => {
      onListHolderResize();
    }, [rect]);

    // ········································································
    // Render
    const hasDropdown = !!hiddenTabs.length;

    const { classes, cx } = TabNavListStyles({ animated: animated.inkBar }, { name: 'TabNavList' });
    const controlRefs = useRef({});
    const nextTabCode = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
    const previousTabCode = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';

    const handleKeyDown = (event) => {
      console.log(tabs);
      if (event.nativeEvent.code === nextTabCode) {
        event.preventDefault();
        // const nextTab = getNextTab(activeTab, tabs);
        // handleActiveTabChange(nextTab);
        // controlRefs.current[nextTab].focus();
      }

      if (event.nativeEvent.code === previousTabCode) {
        event.preventDefault();
        // const previousTab = getPreviousTab(activeTab, tabs);
        // handleActiveTabChange(previousTab);
        // controlRefs.current[previousTab].focus();
      }
    };

    return (
      <Box
        ref={ref}
        role="tablist"
        className={cx(classes.root)}
        onKeyDown={() => {
          // No need animation when use keyboard
          doLockAnimation();
        }}
      >
        <Box ref={resizeRef} className={cx(classes.tabsResizer)}>
          <Box className={cx(classes.tabsWrapper)} ref={tabsWrapperRef}>
            <Group
              ref={tabListRef}
              position={position}
              noWrap
              className={cx(classes.navList)}
              style={{
                transform: `translate(${transformLeft}px, ${transformTop}px)`,
                transition: lockAnimation ? 'none' : undefined,
              }}
            >
              {tabs.map((tab) => (
                <Tab
                  id={id}
                  key={tab.key}
                  tab={tab}
                  active={tab.key === activeKey}
                  renderWrapper={children}
                  onKeyDown={handleKeyDown}
                  ref={getBtnRef(tab.key)}
                  onClick={(e) => {
                    onTabClick(tab.key, e);
                  }}
                  onFocus={() => {
                    scrollToTab(tab.key);
                    doLockAnimation();
                    if (!tabsWrapperRef.current) {
                      return;
                    }
                    // Focus element will make scrollLeft change which we should reset back
                    if (!rtl) {
                      tabsWrapperRef.current.scrollLeft = 0;
                    }
                    tabsWrapperRef.current.scrollTop = 0;
                  }}
                />
              ))}
            </Group>
          </Box>
        </Box>
        {hasDropdown && (
          <Dropdown
            {...props}
            ref={operationsRef}
            tabs={hiddenTabs}
            tabMoving={!!lockAnimation}
            onTabClick={onTabClick}
          />
        )}
      </Box>
    );
  }
);

TabNavList.propTypes = {
  id: PropTypes.string,
  tabPosition: PropTypes.string, // left, right, etc
  activeKey: PropTypes.string,
  rtl: PropTypes.bool,
  panes: PropTypes.node,
  animated: PropTypes.any,
  moreIcon: PropTypes.node,
  mobile: PropTypes.bool,
  tabBarGutter: PropTypes.number,
  renderTabBar: PropTypes.any,
  onTabClick: PropTypes.func,
  onTabScroll: PropTypes.func,
};

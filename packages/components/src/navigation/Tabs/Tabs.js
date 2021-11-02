import React, { useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useUncontrolled, useMergedRef, clamp } from '@mantine/hooks';
import { Group } from '@mantine/core';
import { Tab } from './Tab/Tab';
import { TabsStyles } from './Tabs.styles';

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
    const controlRefs = useRef({});

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
        controlRefs.current[nextTab].focus();
      }

      if (event.nativeEvent.code === previousTabCode) {
        event.preventDefault();
        const previousTab = getPreviousTab(activeTab, tabs);
        handleActiveTabChange(previousTab);
        controlRefs.current[previousTab].focus();
      }
    };

    /*
buttonRef={useMergedRef((node) => {
          controlRefs.current[index] = node;
        }, tab.ref)}
    */

    const panes = tabs.map((tab, index) => (
      <Tab
        {...tab.props}
        key={index}
        active={activeTab === index}
        onKeyDown={handleKeyDown}
        variant={variant}
        orientation={orientation}
        onClick={() => activeTab !== index && handleActiveTabChange(index)}
      />
    ));

    const content = tabs[activeTab].props.children;

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
          >
            {panes}
          </Group>
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

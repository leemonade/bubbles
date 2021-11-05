import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mantine/core';
import { TabPaneStyles } from './TabPane.styles';

export const TabPane = ({
  forceRender,
  className,
  style,
  id,
  active,
  animated,
  destroyInactiveTabPane,
  tabKey,
  children,
}) => {
  const [visited, setVisited] = useState(forceRender);

  useEffect(() => {
    if (active) {
      setVisited(true);
    } else if (destroyInactiveTabPane) {
      setVisited(false);
    }
  }, [active, destroyInactiveTabPane]);

  const mergedStyle = {};
  if (!active) {
    if (animated) {
      mergedStyle.visibility = 'hidden';
      mergedStyle.height = 0;
      mergedStyle.overflowY = 'hidden';
    } else {
      mergedStyle.display = 'none';
    }
  }

  const { classes, cx } = TabPaneStyles({ active }, { name: 'TabPane' });

  return (
    <Box
      id={id && `${id}-panel-${tabKey}`}
      role="tabpanel"
      tabIndex={active ? 0 : -1}
      aria-labelledby={id && `${id}-tab-${tabKey}`}
      aria-hidden={!active}
      style={{ ...mergedStyle, ...style }}
      className={cx(classes.root, className)}
    >
      {(active || visited || forceRender) && children}
    </Box>
  );
};

TabPane.propTypes = {
  tab: PropTypes.node,
  disabled: PropTypes.bool,
  forceRender: PropTypes.bool,
  closable: PropTypes.bool,
  closeIcon: PropTypes.node,

  // Pass by TabPaneList
  tabKey: PropTypes.string,
  id: PropTypes.string,
  animated: PropTypes.bool,
  active: PropTypes.bool,
  destroyInactiveTabPane: PropTypes.bool,
};

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../../layout/Box';
import { TabPanelStyles } from './TabPanel.styles';

export const TabPanel = ({
  forceRender,
  className,
  style,
  id,
  active,
  animated,
  destroyInactiveTabPanel,
  tabKey,
  children,
}) => {
  const [visited, setVisited] = useState(forceRender);

  useEffect(() => {
    if (active) {
      setVisited(true);
    } else if (destroyInactiveTabPanel) {
      setVisited(false);
    }
  }, [active, destroyInactiveTabPanel]);

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

  const { classes, cx } = TabPanelStyles({ active }, { name: 'TabPane' });

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
      <Box style={{ width: '100%', height: '100%' }}>
        {active || visited || forceRender ? children : null}
      </Box>
    </Box>
  );
};
TabPanel.displayName = 'TabPanel';
TabPanel.propTypes = {
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
  destroyInactiveTabPanel: PropTypes.bool,
};

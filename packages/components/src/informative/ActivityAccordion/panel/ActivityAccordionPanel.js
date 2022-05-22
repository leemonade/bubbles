import React from 'react';
import PropTypes from 'prop-types';

export const ACTIVITY_ACCORDION_PANEL_COLORS = ['default', 'solid'];

const ActivityAccordionPanel = ({ children }) => {
  return children;
};

ActivityAccordionPanel.defaultProps = {
  color: 'default',
};
ActivityAccordionPanel.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  icon: PropTypes.node,
  rightSection: PropTypes.node,
  color: PropTypes.oneOf(ACTIVITY_ACCORDION_PANEL_COLORS),
};

export { ActivityAccordionPanel };

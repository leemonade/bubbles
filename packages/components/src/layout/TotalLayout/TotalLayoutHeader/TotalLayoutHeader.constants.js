import React from 'react';
import PropTypes from 'prop-types';
import { PluginAssignmentsIcon as Icon } from '@bubbles-ui/icons/solid';

export const TOTAL_LAYOUT_HEADER_PROP_TYPES = {
  title: PropTypes.string,
  formTitlePlaceholder: PropTypes.string,
  compact: PropTypes.bool,
  icon: PropTypes.element,
  iconLarge: PropTypes.bool,
  onCancel: PropTypes.func,
  children: PropTypes.node,
  cancelable: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'column']),
};

export const TOTAL_LAYOUT_HEADER_DEFAULT_PROPS = {
  title: '',
  icon: <Icon />,
  iconLarge: false,
  formTitlePlaceholder: '',
  compact: false,
  cancelable: true,
  direction: 'column',
};

export const TOTAL_LAYOUT_HEADER_HEIGHT = 72;

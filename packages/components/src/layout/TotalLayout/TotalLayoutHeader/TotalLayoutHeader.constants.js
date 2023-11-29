import PropTypes from 'prop-types';
import { PluginAssignmentsIcon as Icon } from '@bubbles-ui/icons/solid';

export const TOTAL_LAYOUT_HEADER_PROP_TYPES = {
  title: PropTypes.string,
  formTitlePlaceholder: PropTypes.string,
  compact: PropTypes.bool,
  icon: PropTypes.element,
};

export const TOTAL_LAYOUT_HEADER_DEFAULT_PROPS = {
  title: 'Title',
  icon: <Icon />,
  formTitlePlaceholder: 'User input placeholder',
  compact: false,
};

import PropTypes from 'prop-types';

export const TOOLBAR_PROPTYPES = {
  label: PropTypes.string,
  localizer: PropTypes.object,
  onNavigate: PropTypes.func,
  onView: PropTypes.func,
  showType: PropTypes.string,
  setShowType: PropTypes.func,
  showWeekends: PropTypes.bool,
  setShowWeekends: PropTypes.func,
  toolbarRightNode: PropTypes.node,
  showToolbarAddButton: PropTypes.bool,
  showToolbarToggleWeekend: PropTypes.bool,
  showToolbarViewSwitcher: PropTypes.bool,
  addEventClick: PropTypes.func,
  view: PropTypes.string,
  views: PropTypes.arrayOf(PropTypes.string),
};

export const TOOLBAR_DEFAULT_PROPS = {};

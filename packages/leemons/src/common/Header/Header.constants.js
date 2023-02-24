import PropTypes from 'prop-types';
import { CLASSROOM_HEADER_BAR_PROP_TYPES } from '../ClassroomHeaderBar';
import { EDIT_ACTIVITY_BAR_PROP_TYPES } from '../EditActivityBar/EditActivityBar.constants';
import { HEADER_DROPDOWN_PROP_TYPES } from '../HeaderDropdown';

export const HEADER_SIZES = ['sm', 'md', 'lg'];

export const HEADER_DEFAULT_PROPS = {
  size: 'md',
  image: '',
  editActivity: false,
  showClassbar: false,
  showDropdown: false,
  showActivity: false,
  showTimeline: false,
};
export const HEADER_PROP_TYPES = {
  image: PropTypes.string,
  size: PropTypes.oneOf(HEADER_SIZES),
  activity: PropTypes.shape(EDIT_ACTIVITY_BAR_PROP_TYPES),
  classRoom: PropTypes.shape(CLASSROOM_HEADER_BAR_PROP_TYPES),
  dropdown: PropTypes.shape(HEADER_DROPDOWN_PROP_TYPES),
  activity: PropTypes.shape({}),
  timeline: PropTypes.shape({}),
  editActivity: PropTypes.bool,
  showClassbar: PropTypes.bool,
  showDropdown: PropTypes.bool,
  showActivity: PropTypes.bool,
  showTimeline: PropTypes.bool,
};

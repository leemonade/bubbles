import PropTypes from 'prop-types';

export const STEP_DEFAULT_PROPS = {
  label: '',
  badge: '',
  subSteps: [],
};
export const STEP_PROP_TYPES = {
  label: PropTypes.string,
  badge: PropTypes.string,
  subSteps: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, badge: PropTypes.string })
  ),
};

import PropTypes from 'prop-types';

export const TOTAL_LAYOUT_STEP_CONTAINER_PROP_TYPES = {
  stepName: PropTypes.string,
  children: PropTypes.node,
  Footer: PropTypes.node,
  style: PropTypes.object,
  clean: PropTypes.bool,
  fullWidth: PropTypes.bool,
  titleZone: PropTypes.node,
  loading: PropTypes.bool,
  TopZone: PropTypes.node,
  forceNotMaxWidth: PropTypes.bool,
};
export const TOTAL_LAYOUT_STEP_CONTAINER_DEFAULT_PROPS = {
  stepName: '',
  titleZone: null,
  TopZone: null,
  forceNotMaxWidth: false,
};

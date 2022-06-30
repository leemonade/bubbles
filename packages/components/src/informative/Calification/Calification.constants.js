import PropTypes from 'prop-types';

export const CALIFICATION_ORIENTATIONS = ['horizontal', 'vertical'];

export const CALIFICATION_DEFAULT_PROPS = {
  label: '',
  grade: 0,
  minimumGrade: 0,
  orientation: CALIFICATION_ORIENTATIONS[0],
  inverted: false,
  styles: {},
  className: '',
  showOnlyLabel: false,
};
export const CALIFICATION_PROP_TYPES = {
  label: PropTypes.string,
  grade: PropTypes.number,
  minimumGrade: PropTypes.number,
  orientation: PropTypes.oneOf(CALIFICATION_ORIENTATIONS),
  inverted: PropTypes.bool,
  styles: PropTypes.object,
  className: PropTypes.string,
  showOnlyLabel: PropTypes.bool,
};

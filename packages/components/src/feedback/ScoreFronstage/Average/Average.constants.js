import PropTypes from 'prop-types';

export const AVERAGE_DEFAULT_PROPS = {
  label: '',
  minGrade: 0,
  maxGrade: 0,
};
export const AVERAGE_PROP_TYPES = {
  label: PropTypes.string,
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minGrade: PropTypes.number,
  maxGrade: PropTypes.number,
};

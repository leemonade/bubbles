import PropTypes from 'prop-types';

export const BADGE_DEFAULT_PROPS = {
  score: 0,
  minGrade: 0,
};
export const BADGE_PROP_TYPES = {
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minGrade: PropTypes.number,
};

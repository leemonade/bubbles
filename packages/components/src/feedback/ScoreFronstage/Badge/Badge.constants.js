import PropTypes from 'prop-types';

export const BADGE_DEFAULT_PROPS = {
  score: {
    number: 0,
    letter: '',
  },
  minGrade: 0,
  nonCalificable: false,
};
export const BADGE_PROP_TYPES = {
  score: PropTypes.shape({
    number: PropTypes.number,
    letter: PropTypes.string,
  }),
  minGrade: PropTypes.number,
  nonCalificable: PropTypes.bool,
};

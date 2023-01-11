import PropTypes from 'prop-types';

export const AVERAGE_DEFAULT_PROPS = {
  label: '',
  minGrade: 0,
  maxGrade: 0,
  score: {
    number: 0,
    letter: 'A+',
  },
};
export const AVERAGE_PROP_TYPES = {
  label: PropTypes.string,
  score: PropTypes.shape({ number: PropTypes.number, letter: PropTypes.string }),
  minGrade: PropTypes.number,
  maxGrade: PropTypes.number,
};

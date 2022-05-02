import PropTypes from 'prop-types';

export const SCORE_FEEDBACK_DEFAULT_PROPS = {
  calification: {
    label: '',
    grade: 0,
    minimumGrade: 0,
  },
  styles: {},
  className: '',
};
export const SCORE_FEEDBACK_PROP_TYPES = {
  calification: PropTypes.shape({
    label: PropTypes.string,
    grade: PropTypes.number,
    minimumGrade: PropTypes.number,
  }),
  children: PropTypes.node,
  styles: PropTypes.object,
  className: PropTypes.string,
};

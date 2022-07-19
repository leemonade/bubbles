import PropTypes from 'prop-types';

export const SCORE_FEEDBACK_DEFAULT_PROPS = {
  calification: {
    label: '',
    grade: 0,
    minimumGrade: 0,
    decimalNumbers: 2,
  },
  styles: {},
  className: '',
  useAria: true,
};
export const SCORE_FEEDBACK_PROP_TYPES = {
  /** Controls the Calification properties */
  calification: PropTypes.shape({
    label: PropTypes.string,
    grade: PropTypes.number,
    minimumGrade: PropTypes.number,
    decimalNumbers: PropTypes.number,
  }),
  /** The content that is shown inside ScoreFeedback */
  children: PropTypes.node,
  /** Controls the styles of the root element */
  styles: PropTypes.object,
  /** Classname of the root element */
  className: PropTypes.string,
  /** Controls if ScoreFeedback uses aria role */
  useAria: PropTypes.bool,
};

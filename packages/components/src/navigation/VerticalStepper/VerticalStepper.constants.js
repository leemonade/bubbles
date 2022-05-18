import PropTypes from 'prop-types';

export const VERTICAL_STEPPER_DEFAULT_PROPS = {
  data: [],
  activeIndex: 0,
  completedSteps: [],
  autocompleteOnNext: false,
  calificationProps: null,
};
export const VERTICAL_STEPPER_PROP_TYPES = {
  data: PropTypes.arrayOf(PropTypes.object),
  activeIndex: PropTypes.number,
  completedSteps: PropTypes.arrayOf(PropTypes.number),
  autocompleteOnNext: PropTypes.bool,
  calificationProps: PropTypes.shape({
    label: PropTypes.string,
    grade: PropTypes.number,
    minimumGrade: PropTypes.number,
  }),
};

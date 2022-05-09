import PropTypes from 'prop-types';

export const VERTICAL_STEPPER_DEFAULT_PROPS = {
  data: [],
  currentStep: 0,
  onNext: null,
  onPrevious: null,
  calificationProps: null,
  rootClassName: '',
  stepColumnClassname: '',
  currentStepClassname: '',
  rootStyles: {},
  stepColumnStyles: {},
};
export const VERTICAL_STEPPER_PROP_TYPES = {
  data: PropTypes.arrayOf(PropTypes.object),
  currentStep: PropTypes.number,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  calificationProps: PropTypes.shape({
    label: PropTypes.string,
    grade: PropTypes.number,
    minimumGrade: PropTypes.number,
  }),
  rootClassname: PropTypes.string,
  stepColumnClassname: PropTypes.string,
  currentStepClassname: PropTypes.string,
  rootStyles: PropTypes.object,
  stepColumnStyles: PropTypes.object,
};
import PropTypes from 'prop-types';

export const HORIZONTAL_STEPPER_DEFAULT_PROPS = {
  currentStep: 0,
  allowStepClick: false,
  allowVisitedStepClick: false,
  visitedSteps: [],
  data: [],
};
export const HORIZONTAL_STEPPER_PROP_TYPES = {
  currentStep: PropTypes.number,
  onStepClick: PropTypes.func,
  allowStepClick: PropTypes.bool,
  allowVisitedStepClick: PropTypes.bool,
  visitedSteps: PropTypes.arrayOf(PropTypes.number),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      status: PropTypes.string,
    })
  ),
};

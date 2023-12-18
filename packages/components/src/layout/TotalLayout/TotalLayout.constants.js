import PropTypes from 'prop-types';

export const TOTAL_LAYOUT_DEFAULT_PROPS = {};
export const TOTAL_LAYOUT_PROP_TYPES = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
  Header: PropTypes.node,
  showStepper: PropTypes.boolean,
  stepsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      badge: PropTypes.oneOfType([null]), // must be null initially
      status: PropTypes.oneOfType([null]), // must be null initially
      validationSchema: PropTypes.object, // must fit with the chosen validator
      stepComponent: PropTypes.node,
    }),
  ),
  Steps: PropTypes.arrayOf(PropTypes.node),
  footerActionsLabels: PropTypes.shape({
    back: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
    save: PropTypes.string, // only when draft saving is needed, can be undefined or not passed
    dropdownLabel: PropTypes.string, // only for dropdown, can be undefined or not passed
  }),
  footerFinalActions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      action: PropTypes.func,
    }),
  ),
  stepNumberForDraftSave: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([undefined])]), // skip when no save functionality is needed
  onSave: PropTypes.func, // only when draft saving is needed, can be undefined or not passed
};

export const TOTAL_LAYOUT_FOOTER_PROP_TYPES = {};
